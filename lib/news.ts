import data from "@/content/news.json";

// News lives in content/news.json. When an admin panel or CMS takes over, it can either write that
// file, or replace the bodies of getNews / getNewsItem with a fetch that returns the same shape.
// The pages only ever use these two functions.

export type NewsItem = {
  /** the page's address: /news/<slug> */
  slug: string;
  /** "2023", "2022-03" or "2022-03-14": as precise as you know it. Newest first. */
  date: string;
  /** "Event" and "Dispatch" have their own colour; anything else is shown plainly */
  type: string;
  title: string;
  summary: string;
  image?: { src: string; width: number; height: number; alt: string };
  /** paragraphs */
  body: string[];
  /** e.g. what left the factory on a dispatch */
  list?: { title: string; items: string[] };
  /** a size marks a downloadable file, e.g. "1.4 MB" */
  links?: { label: string; href: string; size?: string }[];
};

const news: NewsItem[] = data;

export async function getNews(): Promise<NewsItem[]> {
  return [...news].sort((a, b) => b.date.localeCompare(a.date));
}

export async function getNewsItem(slug: string): Promise<NewsItem | undefined> {
  return news.find((n) => n.slug === slug);
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/** "2023" → "2023", "2022-03" → "March 2022", "2022-03-14" → "14 March 2022" */
export function formatDate(date: string) {
  const [y, m, d] = date.split("-");
  return [d && Number(d), m && months[Number(m) - 1], y].filter(Boolean).join(" ");
}
