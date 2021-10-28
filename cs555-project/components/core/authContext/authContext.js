import React, {useState, useEffect,  createContext} from "react";
import { auth } from "../../../services/initFirebase";
export const UserContext = createContext({user: null})
import { useRouter } from "next/dist/client/router";

export  const UserProvider = ({children}) => {
const router = useRouter();
  const [user, setuser] = useState(null)
  useEffect(() => {
  auth.onAuthStateChanged(async (user) => {
      if(user) {
          const { displayName, email }  = user;
          setuser({
            displayName,
            email
          });
          router.push("/category");
      }else{
        setuser(null);
          router.push("/login");
      }
  })
  },[])
  return (
    <UserContext.Provider value={user}>{children}</UserContext.Provider>
  )
}