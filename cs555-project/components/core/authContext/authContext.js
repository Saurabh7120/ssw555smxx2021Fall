import React, {useState, useEffect,  createContext} from "react";
import { auth } from "../../../services/initFirebase";
export const UserContext = createContext({User: null})
import { useRouter } from "next/dist/client/router";
import { writeData, readData } from "../../firebase/cloudFirestore";

export  const UserProvider = ({children}) => {
const router = useRouter();
  const [User, setuser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
  auth.onAuthStateChanged(async (user) => {
    try {
        if(user) {
          console.log('user: ', user.l)
          setuser({
            userId,
            displayName,
            email
          });
          const { displayName, email, l:userId }  = user;

     
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
            //     userId,
            //     displayName,
            //     email
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