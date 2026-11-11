// The news and videos are written at /admin and kept in Firestore, a Google database in Tavron's
// Firebase project. The public pages read them here, over Firestore's web API, so they carry no
// Firebase code. What a visitor may read (published news, videos) is decided by firestore.rules.

export const PROJECT = "tavron-site-admin";
export const BUCKET = `${PROJECT}.firebasestorage.app`;
export const DOCS = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents`;

// Firestore sends every value wrapped in its type: { stringValue: "x" }, { arrayValue: { values: […] } }
type Wrapped = Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

function plain(v: Wrapped): unknown {
  if ("mapValue" in v) return fields(v.mapValue.fields);
  if ("arrayValue" in v) return (v.arrayValue.values ?? []).map(plain);
  if ("integerValue" in v) return Number(v.integerValue); // sent as a string
  return Object.values(v)[0];
}

/** a document's fields with the wrapping taken off */
export const fields = (f: Record<string, Wrapped> = {}): Record<string, unknown> =>
  Object.fromEntries(Object.entries(f).map(([k, v]) => [k, plain(v)]));

/**
 * Every document of a collection, in the order of their ids. With `flag`, only those where that
 * field is true. The answer is kept until the admin saves something (app/api/revalidate), and is
 * read again every hour in any case.
 */
export async function read<T>(collection: string, flag?: string): Promise<T[]> {
  const where = flag && { fieldFilter: { field: { fieldPath: flag }, op: "EQUAL", value: { booleanValue: true } } };
  const reply = await fetch(`${DOCS}:runQuery`, {
    method: "POST",
    body: JSON.stringify({ structuredQuery: { from: [{ collectionId: collection }], ...(where && { where }) } }),
    cache: "force-cache",
    next: { tags: [collection], revalidate: 3600 },
  });
  if (!reply.ok) throw new Error(`Firestore answered ${reply.status} for ${collection}`);
  const rows: { document?: { fields?: Record<string, Wrapped> } }[] = await reply.json();
  return rows.flatMap((row) => (row.document ? [fields(row.document.fields) as T] : []));
}
