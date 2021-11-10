
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAnalytics, logEvent } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
import "firebase/firestore"
import "firebase/storage"



const app = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId:  process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
});


export const auth = getAuth();

export const db =  getFirestore();

const provider = new GoogleAuthProvider();




export const signInWithGoogle = () => {

  signInWithPopup(auth, provider).then((res) => {
    console.log('userInfo: ', res.user)
    
  }).catch((error) => {
    console.log(error.message)
  })

}


export const logOut = () => {
  signOut(auth).then(()=> {
    console.log('logged out')
  }).catch((error) => {
    console.log(error.message)
  })
}