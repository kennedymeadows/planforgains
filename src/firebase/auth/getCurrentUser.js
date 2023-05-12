import firebase_app from "../config";
import { getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export async function getCurrentUser() {
  let result = null,
      error = null;
  try {
    const user = auth.currentUser;
    if (user) {
      result = {
        name: user.displayName || 'User',
        email: user.email,
        imageUrl: user.photoURL || '/images/defaultProfilePic.png',
      };
    } else {
      error = "No user signed in";
    }
  } catch (e) {
    error = e;
  }

  return { result, error };
}
