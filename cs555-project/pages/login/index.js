import React,{useContext,useEffect} from 'react';
import { Layout } from '../../components/core';
import { Button,Flex } from '@chakra-ui/react';
import {FcGoogle} from 'react-icons/fc';
import {signInWithGoogle} from '../../services/initFirebase';
import { useRouter } from 'next/dist/client/router';
import { UserContext } from '../../components/core/authContext/authContext';
import axios from 'axios';


const LoginPage = () => {

    const router = useRouter();

    const {User,setuser,loggedIn} = useContext(UserContext);
  
    useEffect(() => {
      try {
        if(!loggedIn) return; 
          console.log(User);
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
            router.push('/category');
          }
          if(loggedIn && !loggedIn.score) {
            getUser(loggedIn.id);
          }else{
            router.push('/category');
          }
      } catch (error) {
        console.log(error);
      }

    },[loggedIn])



    return(
        <Layout>
            <Flex justify="center" pt='20%'>
                <Button w='200px' onClick={signInWithGoogle} leftIcon={<FcGoogle/>} variant='outline' border='2px' borderColor='brand.900' size='lg'>Sign in with google</Button>
            </Flex>
        </Layout>
    )
}

export default LoginPage