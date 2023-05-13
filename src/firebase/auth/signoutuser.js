'use client'
import { auth } from "../config";
import { signOut } from "firebase/auth";


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
