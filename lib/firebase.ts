// The admin's connection to Tavron's Firebase project. Only /admin loads this file and the
// Firebase code behind it; the public pages read through lib/firestore.ts instead.
//
// The values below name the project. They are not secrets and are meant to be in the page: what
// anyone can do with them is decided by firestore.rules and storage.rules.
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { BUCKET, PROJECT } from "./firestore";

const app = initializeApp({
  apiKey: "AIzaSyBMhK9kswXP3H5MEPBdATpOOUP9y3-llto",
  authDomain: `${PROJECT}.firebaseapp.com`,
  projectId: PROJECT,
  storageBucket: BUCKET,
  appId: "1:575459591335:web:b76829991882a540ee4782",
});

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

/** The one account that can add and remove staff. The rules files name the same address. */
export const OWNER = "sales@tavron.net";
