// Run once, on 2026-11-12: copied content/news.json and content/videos.json into Firestore, where
// /admin edits them from then on. Running it again is harmless: it only adds documents that aren't
// there yet, so it never undoes an edit made in the admin.   node scripts/seed.mjs
import fs from "node:fs";
import { google, PROJECT } from "./google.mjs";

// plain values → Firestore's wrapped ones (the reverse of lib/firestore.ts)
const wrap = (v) =>
  Array.isArray(v) ? { arrayValue: { values: v.map(wrap) } }
  : typeof v === "object" ? { mapValue: { fields: wrapAll(v) } }
  : typeof v === "boolean" ? { booleanValue: v }
  : typeof v === "number" ? { integerValue: v }
  : { stringValue: v };
const wrapAll = (o) => Object.fromEntries(Object.entries(o).map(([k, v]) => [k, wrap(v)]));

async function add(collection, id, data) {
  try {
    await google("firestore", "POST", `/projects/${PROJECT}/databases/(default)/documents/${collection}`, { fields: wrapAll(data) }, { documentId: id });
    console.log(`added ${collection}/${id}`);
  } catch (e) {
    if (e.status !== 409) throw e;
    console.log(`kept  ${collection}/${id} (already there)`);
  }
}

const json = (file) => JSON.parse(fs.readFileSync(new URL(`../content/${file}`, import.meta.url), "utf8"));

for (const item of json("news.json")) await add("news", item.slug, { ...item, published: true });
// Videos with the same date are shown in the order of their ids. These get 0000000000001…; the
// admin gives a new video the time it was added, which is always a larger number.
for (const [i, video] of json("videos.json").entries()) await add("videos", String(i + 1).padStart(13, "0"), video);
