import fs from "fs";
import type { MetadataRoute } from "next";
import { getNews } from "@/lib/news";
import { SITE } from "@/lib/site";

// /sitemap.xml, built with the site: every top-level page (each app/<name>/page.tsx, at its
// canonical <name>.html address) and every news item, so Google finds new news without waiting
// to stumble on it.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const news = await getNews();
  const pages = fs
    .readdirSync("app", { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(`app/${d.name}/page.tsx`))
    .map((d) => ({ url: `${SITE}${d.name}.html`, ...(d.name === "news" && news[0] && { lastModified: news[0].date }) }));
  return [
    { url: SITE },
    ...pages,
    ...news.map((n) => ({ url: `${SITE}news/${n.slug}`, lastModified: n.date })),
  ];
}
