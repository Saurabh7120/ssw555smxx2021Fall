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
          const { displayName, email, uid }  = user;

          setLoggedIn({
            id: uid,
            name: displayName,
            email: email
          });
          localStorage.setItem('id',uid);
          localStorage.setItem('name',displayName);
          localStorage.setItem('email',email);

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

      const createUser = async data => {
        const created = await axios.post('http://localhost:5000/users/',data);
        if(created) {
          setuser(created.data);
        }
      }
      const getUser = async loginData => {
        const {data} = await axios.get(`http://localhost:5000/users/${loginData.id}`);
        if(!data) {
          createUser(loginData);
        }
        else{
          setuser(data);
        }
      }
      if(!User && loggedIn) {
        getUser(loggedIn);
      }else{
        if(!loggedIn) {
          let id = localStorage.getItem('id');
          let name = localStorage.getItem('name');
          let email = localStorage.getItem('email');
          if(id || name || email) {
            setLoggedIn({
              id,
              name,
              email
            })
          }
        }

      }
  },[User,loggedIn])

  const destroy = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
  }

  return (
    <UserContext.Provider value={{User, setuser,loggedIn,destroy}}>{children}</UserContext.Provider>
  )
}

export default UserContextProvider;