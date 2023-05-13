import { db } from "../config";
import { doc, updateDoc } from "firebase/firestore";

export default async function updateData(collection, id, data) {
    const docRef = doc(db, collection, id);

    let error = null;

    try {
        await updateDoc(docRef, data);
    } catch (e) {
        error = e;
    }

    return { error };
}