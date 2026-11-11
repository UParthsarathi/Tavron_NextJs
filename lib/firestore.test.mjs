// npm test: Firestore's wrapped values come out as the plain news and video objects the pages use
import assert from "node:assert/strict";
import { fields } from "./firestore.ts";

assert.deepEqual(
  fields({
    title: { stringValue: "A 15 KL silo" },
    published: { booleanValue: true },
    body: { arrayValue: { values: [{ stringValue: "one" }, { stringValue: "two" }] } },
    image: { mapValue: { fields: { src: { stringValue: "a.jpg" }, width: { integerValue: "1277" } } } },
    links: { arrayValue: { values: [{ mapValue: { fields: { label: { stringValue: "PDF" }, href: { stringValue: "x.pdf" } } } }] } },
    none: { arrayValue: {} },
  }),
  {
    title: "A 15 KL silo",
    published: true,
    body: ["one", "two"],
    image: { src: "a.jpg", width: 1277 },
    links: [{ label: "PDF", href: "x.pdf" }],
    none: [],
  },
);
assert.deepEqual(fields(undefined), {});

console.log("firestore: ok");
