// Calls Google's APIs as whoever is logged in to the Firebase CLI (`firebase login`), for the
// set-up and test scripts beside this file. Needs the CLI installed: npm i -g firebase-tools.
import { execSync } from "node:child_process";
import fs from "node:fs";
import { createRequire } from "node:module";

/** the Firebase project of the admin, from .firebaserc. Never the live site's project, tavron-3fa96. */
export const PROJECT = JSON.parse(fs.readFileSync(new URL("../.firebaserc", import.meta.url), "utf8")).projects.default;

const lib = execSync("npm root -g").toString().trim() + "/firebase-tools/lib/";
const require = createRequire(import.meta.url);
await require(lib + "requireAuth").requireAuth({ project: PROJECT, ...require(lib + "auth").getGlobalDefaultAccount() });
const { Client } = require(lib + "apiv2");

/** google("firestore", "PATCH", "/projects/…", body, { updateMask: "type" }) → the reply's JSON */
export async function google(api, method, path, body, queryParams, apiVersion = "v1") {
  const client = new Client({ urlPrefix: `https://${api}.googleapis.com`, apiVersion });
  return (await client.request({ method, path, body, queryParams })).body;
}
