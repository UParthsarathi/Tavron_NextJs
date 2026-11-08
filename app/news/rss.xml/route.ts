import { getNews } from "@/lib/news";
import { SITE } from "@/lib/site";

// /news/rss.xml: the news as an RSS feed, built with the site. Feed readers, and tools that post
// new items to LinkedIn automatically, pick up each item as soon as it's published.
export const dynamic = "force-static";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function GET() {
  const items = (await getNews()).map((n) => {
    const url = `${SITE}news/${n.slug}`;
    const image = n.image ? `<enclosure url="${SITE}${n.image.src}" type="${n.image.src.endsWith(".png") ? "image/png" : "image/jpeg"}" length="0"/>` : "";
    return `<item><title>${esc(n.title)}</title><link>${url}</link><guid>${url}</guid><pubDate>${new Date(n.date).toUTCString()}</pubDate><category>${esc(n.type)}</category><description>${esc(n.summary)}</description>${image}</item>`;
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel><title>Tavron Engineers news</title><link>${SITE}news.html</link><description>Equipment leaving the Tavron Engineers factory in Chennai, and where to meet the team.</description><language>en-in</language>${items.join("")}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
