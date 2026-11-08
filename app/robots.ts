import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// /robots.txt. Everything may be crawled; /old-site/ stays out of results through its noindex
// header (vercel.json), which crawlers only see if they're allowed to fetch it.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${SITE}sitemap.xml` };
}
