'use client'
import firebase_app from "../config";
import { signOut, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signOutUser() {
    let result = null,
        error = null;
    try {
        await signOut(auth);
        result = "Signed out successfully!";
    } catch (e) {
        error = e;
    }

    return { result, error };
}
