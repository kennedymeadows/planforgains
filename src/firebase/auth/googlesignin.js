// src/firebase/auth/googleSignIn.js
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebase_app from "../config";

const auth = getAuth(firebase_app);

export default async function googleSignIn() {
  const provider = new GoogleAuthProvider();
  let result = null,
      error = null;
  try {
    result = await signInWithPopup(auth, provider);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
