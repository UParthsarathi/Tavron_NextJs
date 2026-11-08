// npm test: the YouTube link formats people paste into content/videos.json
import assert from "node:assert/strict";
import { isoDuration, youtubeId } from "./youtube.ts";

const id = "nwZqRNYkA6I";
for (const link of [
  id,
  `https://www.youtube.com/watch?v=${id}`,
  `https://youtube.com/watch?feature=share&v=${id}&t=12s`,
  `https://m.youtube.com/watch?v=${id}`,
  `https://youtu.be/${id}?si=abc123`,
  `https://www.youtube.com/shorts/${id}`,
  `https://www.youtube.com/embed/${id}?rel=0`,
  `https://www.youtube-nocookie.com/embed/${id}`,
  `https://www.youtube.com/live/${id}`,
  `  https://www.youtube.com/watch?v=${id}  `,
]) assert.equal(youtubeId(link), id, link);

for (const bad of ["", "not a link", "https://vimeo.com/123456789", `https://example.com/watch?v=${id}`, "https://www.youtube.com/@tavronsales3868", "https://youtu.be/short"])
  assert.equal(youtubeId(bad), undefined, bad);

assert.equal(isoDuration("1:17"), "PT1M17S");
assert.equal(isoDuration("0:21"), "PT21S");
assert.equal(isoDuration("1:02:05"), "PT1H2M5S");

console.log("youtubeId, isoDuration: ok");
