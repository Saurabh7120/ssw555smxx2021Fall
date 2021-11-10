import React, {useState, useEffect,  createContext} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../services/initFirebase";
import { useRouter } from "next/dist/client/router";
import { writeData, readData } from "../../firebase/cloudFirestore";
import { addDoc, collection, doc, setDoc } from "firebase/firestore"; 
import { db } from "../../../services/initFirebase";

export const UserContext = createContext({User: null})

export  const UserProvider = ({children}) => {
const router = useRouter();
  const [User, setuser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {

  onAuthStateChanged(auth, async (user) => {
    try {
        if(user) {
          console.log('user: ', user.uid)

          const { displayName, email, uid }  = user;

          setuser({
            id: uid,
            name: displayName,
            email: email,
            score: 0
          });
          // const document = doc(db, `users/${userId}`);
          // console.log(document);
          // setDoc(document, {
          //   _id: userId,
          //   name: displayName,
          //   email: email
          // })
          // const docRef = await addDoc(collection(db, 'users'), {
          //   _id: userId,
          //   name: displayName,
          //   email: email
          // });
         
          // console.log("Document written with ID: ", docRef.id);
     
          // const exist = await readData('users',
          // userId,
          // {
          //   userId,
          //   displayName,
          //   email
          // });
          // console.log(exist);
          // if(!exist) {
          //   console.log('doesnt exist');
     
            // await writeData(
            //   'users',
            //   userId,
            //   {
            //     _id: userId,
            //     name: displayName,
            //     email: email
            //   }
            // )
          // }
      
      }else{
        setuser(null);
        router.push('/login');
      } 
    } catch (error) {
      console.log(error);
    }
  })
  },[])


  return (
    <UserContext.Provider value={User}>{children}</UserContext.Provider>
  )
}