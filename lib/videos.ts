import data from "@/content/videos.json";
import { youtubeId } from "./youtube";

export { isoDuration } from "./youtube";

// Videos live in content/videos.json: paste the YouTube link, a title and the upload date.
// Like lib/news.ts, an admin panel or CMS can later write that file or replace getVideos.

export type Video = {
  /** any YouTube link to the video (watch, youtu.be, shorts…) */
  youtube: string;
  title: string;
  /** upload date, 2016-08-20; newest first, and videos with the same date keep the file's order */
  date: string;
  /** "1:17", as YouTube shows it */
  duration?: string;
  description?: string;
  /** filmed upright on a phone: the gallery shows it full-height instead of between black bars */
  portrait?: boolean;
  /** the page about what the video shows */
  related?: { label: string; href: string };
};

const videos: Video[] = data;

export async function getVideos(): Promise<(Video & { id: string })[]> {
  return videos
    .flatMap((v) => {
      const id = youtubeId(v.youtube);
      if (!id) console.warn(`content/videos.json: "${v.title}" is skipped, "${v.youtube}" isn't a YouTube video link`);
      return id ? [{ ...v, id }] : [];
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

