import firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export const writeData = async (collection,document,data) => {
    const db = getFirestore();

    if(!collection || !document || !data) throw "Incomplete info to write";
    if(typeof collection !== 'string') throw "Invalid type of collection";
    if(typeof document !== 'string') throw "Invalid type of document";
    if(typeof data !== 'object' || data.length) throw "Invalid type of data";

    const docRef = await addDoc(collection(db, collection), data);

   console.log(docRef);
}