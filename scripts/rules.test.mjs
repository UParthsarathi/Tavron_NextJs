// npm run test:rules: asks Google to evaluate firestore.rules (the file here, not the deployed
// copy) for visitors, signed-in strangers, staff and the owner. Run it before deploying a change
// to the rules. Nothing is read from or written to the real database.
import fs from "node:fs";
import { google, PROJECT } from "./google.mjs";

const doc = (path) => `/databases/(default)/documents/${path}`;
const who = (email, verified = true) => ({ uid: email, token: { email, email_verified: verified } });
const OWNER = who("sales@tavron.net");
const STAFF = who("editor@tavron.net");
const STRANGER = who("someone@gmail.com");

// [expected, what it shows, who, method, path, { onStaffList, existing document, document being written }]
const cases = [
  ["ALLOW", "a visitor reads a published item", null, "get", "news/a", { old: { published: true } }],
  ["DENY", "a visitor reads a draft", null, "get", "news/a", { old: { published: false } }],
  ["DENY", "a visitor writes news", null, "create", "news/a", { new: { published: true } }],
  ["DENY", "a visitor deletes news", null, "delete", "news/a", { old: { published: true } }],
  ["ALLOW", "a visitor reads a video", null, "get", "videos/a", { old: {} }],
  ["DENY", "a visitor writes a video", null, "create", "videos/a", { new: {} }],
  ["DENY", "a visitor reads the staff list", null, "get", "staff/editor@tavron.net", { old: {} }],
  ["DENY", "a visitor adds themselves to the staff", null, "create", "staff/x@y.z", { new: {} }],

  ["DENY", "a signed-in stranger reads a draft", STRANGER, "get", "news/a", { old: { published: false } }],
  ["DENY", "a signed-in stranger writes news", STRANGER, "create", "news/a", { new: { published: true } }],
  ["DENY", "a signed-in stranger adds themselves to the staff", STRANGER, "create", "staff/someone@gmail.com", { new: {} }],

  ["ALLOW", "staff read a draft", STAFF, "get", "news/a", { listed: true, old: { published: false } }],
  ["ALLOW", "staff save a draft", STAFF, "create", "news/a", { listed: true, new: { published: false } }],
  ["ALLOW", "staff publish", STAFF, "update", "news/a", { listed: true, old: { published: false }, new: { published: true } }],
  ["DENY", "staff save an item with no published flag", STAFF, "create", "news/a", { listed: true, new: { title: "x" } }],
  ["ALLOW", "staff delete news", STAFF, "delete", "news/a", { listed: true, old: { published: true } }],
  ["ALLOW", "staff add a video", STAFF, "create", "videos/a", { listed: true, new: {} }],
  ["ALLOW", "staff read the staff list", STAFF, "get", "staff/editor@tavron.net", { listed: true, old: {} }],
  ["DENY", "staff add more staff", STAFF, "create", "staff/friend@gmail.com", { listed: true, new: {} }],
  ["DENY", "staff remove staff", STAFF, "delete", "staff/editor@tavron.net", { listed: true, old: {} }],
  ["DENY", "a listed address that Google hasn't verified", who("editor@tavron.net", false), "create", "news/a", { listed: true, new: { published: true } }],

  ["ALLOW", "the owner publishes, without being on the list", OWNER, "create", "news/a", { new: { published: true } }],
  ["ALLOW", "the owner adds staff", OWNER, "create", "staff/editor@tavron.net", { new: {} }],
  ["ALLOW", "the owner removes staff", OWNER, "delete", "staff/editor@tavron.net", { old: {} }],
  ["DENY", "the owner's address, unverified", who("sales@tavron.net", false), "create", "staff/x@y.z", { new: {} }],
];

const { testResults } = await google("firebaserules", "POST", `/projects/${PROJECT}:test`, {
  source: { files: [{ name: "firestore.rules", content: fs.readFileSync(new URL("../firestore.rules", import.meta.url), "utf8") }] },
  testSuite: {
    testCases: cases.map(([expectation, , auth, method, path, { listed = false, old, new: written }]) => ({
      expectation,
      request: { ...(auth && { auth }), method, path: doc(path), ...(written && { resource: { data: written } }) },
      ...(old && { resource: { data: old } }),
      // the "is this address on the staff list?" lookup
      functionMocks: [{ function: "exists", args: [{ anyValue: {} }], result: { value: listed } }],
    })),
  },
});

let failed = 0;
testResults.forEach((r, i) => {
  const ok = r.state === "SUCCESS";
  if (!ok) failed++;
  console.log(`${ok ? "ok  " : "FAIL"} ${cases[i][0].padEnd(5)} ${cases[i][1]}${ok ? "" : "  " + JSON.stringify(r.debugMessages ?? r)}`);
});
if (failed || testResults.length !== cases.length) {
  console.error(`\n${failed} of ${cases.length} rule checks failed`);
  process.exit(1);
}
console.log(`\nfirestore.rules: all ${cases.length} checks pass`);
