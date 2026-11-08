/** The 11-character video id in any YouTube link (watch, youtu.be, shorts, embed, live), or a bare id. */
export function youtubeId(link: string): string | undefined {
  const s = link.trim();
  const id = (v: string | null | undefined) => (v && /^[\w-]{11}$/.test(v) ? v : undefined);
  if (id(s)) return s;
  let u: URL;
  try {
    u = new URL(s);
  } catch {
    return undefined;
  }
  if (!/(^|\.)(youtube\.com|youtube-nocookie\.com|youtu\.be)$/.test(u.hostname)) return undefined;
  if (u.hostname.endsWith("youtu.be")) return id(u.pathname.split("/")[1]);
  return id(u.searchParams.get("v")) ?? id(u.pathname.match(/^\/(?:shorts|embed|live|v)\/([^/?#]+)/)?.[1]);
}

/** "1:17" → "PT1M17S", for search engines */
export const isoDuration = (d: string) => {
  const [s = 0, m = 0, h = 0] = d.split(":").map(Number).reverse();
  return `PT${h ? `${h}H` : ""}${m ? `${m}M` : ""}${s}S`;
};
