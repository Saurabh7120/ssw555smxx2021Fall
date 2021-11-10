import { db } from "../../../services/initFirebase";
import { getDocs, collection } from "firebase/firestore"; 

export const readData = async (col,document,data) => {
    if(!collection || !document || !data) throw "Incomplete info to write";
    if(typeof collection !== 'string') throw "Invalid type of collection";
    if(typeof document !== 'string') throw "Invalid type of document";
    if(typeof data !== 'object' || data.length) throw "Invalid type of data";
    const querySnapshot = await getDocs(collection(db, col));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
}