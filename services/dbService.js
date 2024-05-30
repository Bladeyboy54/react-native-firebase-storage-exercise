import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase";


export const createnewBucketItem = async (item) => {

    try{
        const docRef = await addDoc(collection(db, "items"), item)
        console.log("Document written with ID: ", docRef.id);
        return true
    } catch (e) {
        console.error("error adding Document:", e)
        return false
    }
}