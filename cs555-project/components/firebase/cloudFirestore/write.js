import { db } from "../../../services/initFirebase";
import { addDoc, collection } from "firebase/firestore"; 

export const writeData = async (col,document,data) => {
    debugger;
    if(!collection || !document || !data) throw "Incomplete info to write";
    if(typeof collection !== 'string') throw "Invalid type of collection";
    if(typeof document !== 'string') throw "Invalid type of document";
    if(typeof data !== 'object' || data.length) throw "Invalid type of data";
    console.log(data);
    const docRef = await addDoc(collection(db, col), {...data});
    console.log("Document written with ID: ", docRef.id);
}