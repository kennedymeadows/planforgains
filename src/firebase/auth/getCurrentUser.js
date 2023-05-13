import { auth } from '../config'

export async function getCurrentUser() {
  let result = null,
      error = null;
  try {
    const user = auth.currentUser;
    if (user) {
      result = {
        name: user.displayName || 'User',
        email: user.email,
        imageUrl: user.photoURL,
      };
    } else {
      error = "No user signed in";
    }
  } catch (e) {
    error = e;
  }

  return { result, error };
}
