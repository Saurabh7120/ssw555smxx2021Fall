import React, {useState, useEffect,  createContext} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../services/initFirebase";
import { useRouter } from "next/dist/client/router";
import axios from "axios";


export const UserContext = createContext()

const UserContextProvider = ({children}) => {
const router = useRouter();
  const [User, setuser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {

  onAuthStateChanged(auth, async (user) => {
    try {
        if(user) {
          console.log('user: ', user.uid)

          const { displayName, email, uid }  = user;

          setLoggedIn({
            id: uid,
            name: displayName,
            email: email
          });
      
      }else{
        setLoggedIn(null);
        setuser(null);
        router.push('/login');
      } 
    } catch (error) {
      console.log(error);
    }
  })
  },[])

  useEffect(() => {
    if(!User && loggedIn) {
      const createUser = async () => {
        const created = await axios.post('http://localhost:5000/users/',loggedIn);
        if(created) {
          console.log(created);
          setuser(created);
        }
      }
      const getUser = async id => {
        const {data} = await axios.get(`http://localhost:5000/users/${id}`);
        console.log(data);
        if(!data) {
          createUser();
        }
        else{
          setuser(data);
        }
      }
  
        getUser(loggedIn.id);
  
    }
  },[User,loggedIn])

  return (
    <UserContext.Provider value={{User, setuser,loggedIn}}>{children}</UserContext.Provider>
  )
}

export default UserContextProvider;