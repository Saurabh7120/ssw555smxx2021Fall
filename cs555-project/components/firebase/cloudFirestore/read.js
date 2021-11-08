import firebase from 'firebase/app';
import { getFirestore } from  'firebase/firestore';

export const readData = (collection,document,data) => {
    if(!collection || !document || !data) throw "Incomplete info to write";
    if(typeof collection !== 'string') throw "Invalid type of collection";
    if(typeof document !== 'string') throw "Invalid type of document";
    if(typeof data !== 'object' || data.length) throw "Invalid type of data";
    firebase
        .firestore()
        .collection(collection)
        .doc(document)
        .onSnapshot(function (doc) {
            console.log('info doc: ', doc.data());
            let info = doc.data()
            console.log('info: ', info);
            return doc.data();
        })
}