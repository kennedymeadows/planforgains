import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config";
import { createUserProfileDocument } from "../firestore/createUserProfileDocument";


export default async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  let result = null,
    error = null;
  try {
    result = await signInWithPopup(auth, provider);
    console.log(`Signed in with Google as ${result.user.displayName}`);
    await createUserProfileDocument(result.user);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
