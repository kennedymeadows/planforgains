import { createUserWithEmailAndPassword } from "firebase/auth";
import { createUserProfileDocument } from "../firestore/createUserProfileDocument";
import { firebase_app, auth } from "../config";


export default async function signUp(email, password) {
    let result = null,
        error = null;
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        console.log(`Created user with email: ${email}`);
        result = await createUserProfileDocument(user);
    } catch (e) {
        console.error(`Error in signUp: ${e.message}`);
        error = e;
    }

    return { result, error };
}