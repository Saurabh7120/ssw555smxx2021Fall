// import dotenv from 'dotenv'
// dotenv.config()
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"
import "firebase/storage"



//const router = useRouter();
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId:  process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
  });
}else{
  firebase.app();
}

export const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider()


export const initFirebase = () => {
  if(typeof window !== 'undefined') {
    if(process.env.NEXT_PUBLIC_MEASUREMENT_ID) {
      firebase.analytics();
      firebase.performance();
    }
  }
}

export const signInWithGoogle = () => {

  auth.signInWithPopup(googleProvider).then((res) => {
    console.log('userInfo: ', res.user)
    if(res.user) {
      window.open("/category");
    }
  }).catch((error) => {
    console.log(error.message)
  })

}


export const logOut = () => {
  auth.signOut().then(()=> {
    console.log('logged out')
  }).catch((error) => {
    console.log(error.message)
  })
}