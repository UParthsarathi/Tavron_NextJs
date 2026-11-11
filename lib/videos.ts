import data from "@/content/videos.json";
import { read } from "./firestore";
import { youtubeId } from "./youtube";

export { isoDuration } from "./youtube";

// Videos are added at /admin (the YouTube link, a title and the upload date) and kept in Firestore.
// Like lib/news.ts, content/videos.json is only shown when Firestore can't be reached.

export type Video = {
  /** any YouTube link to the video (watch, youtu.be, shorts…) */
  youtube: string;
  title: string;
  /** upload date, 2016-08-20; newest first, and videos with the same date stay in the order they were added */
  date: string;
  /** "1:17", as YouTube shows it */
  duration?: string;
  description?: string;
  /** filmed upright on a phone: the gallery shows it full-height instead of between black bars */
  portrait?: boolean;
  /** the page about what the video shows */
  related?: { label: string; href: string };
};

export async function getVideos(): Promise<(Video & { id: string })[]> {
  const videos = await read<Video>("videos").catch((e): Video[] => {
    console.error("Videos are being shown from content/videos.json:", e);
    return data;
  });
  return videos
    .flatMap((v) => {
      const id = youtubeId(v.youtube);
      if (!id) console.warn(`Videos: "${v.title}" is skipped, "${v.youtube}" isn't a YouTube video link`);
      return id ? [{ ...v, id }] : [];
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

