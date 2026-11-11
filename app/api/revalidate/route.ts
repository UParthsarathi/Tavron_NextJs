import { revalidateTag } from "next/cache";
import { DOCS } from "@/lib/firestore";

// The admin calls this after every save, so the news and video pages are rebuilt now instead of
// at the next hourly check (lib/firestore.ts).
//
// Only staff get through. The caller sends their Firebase sign-in, and Firestore is asked for an
// entry of the staff list on their behalf: firestore.rules lets staff read that list (the answer
// is 200, or 404 as "-" isn't on it) and refuses everyone else, signed in or not (403).
export async function POST(request: Request) {
  const asCaller = await fetch(`${DOCS}/staff/-`, { headers: { Authorization: request.headers.get("authorization") ?? "" }, cache: "no-store" });
  if (asCaller.status !== 200 && asCaller.status !== 404) return new Response(null, { status: 403 });
  for (const tag of ["news", "videos"]) revalidateTag(tag, { expire: 0 }); // 0: the very next visitor gets the new page
  return new Response(null, { status: 204 });
}
