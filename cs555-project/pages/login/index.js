import React,{useContext,useEffect} from 'react';
import { Layout } from '../../components/core';
import { Button,Flex } from '@chakra-ui/react';
import {FcGoogle} from 'react-icons/fc';
import {signInWithGoogle} from '../../services/initFirebase';
import { useRouter } from 'next/dist/client/router';
import { UserContext } from '../../components/core/authContext/authContext';


const LoginPage = () => {

    const router = useRouter();

    const User = useContext(UserContext);
  
    useEffect(() => {
      let loggedIn = localStorage.getItem('loggedIn')
      if(User) {
        if(!loggedIn) {
          router.push('/category');
        }else{
          localStorage.setItem('loggedIn',true);
        }
      }else{
        router.push('/login');
      }
    },[User])

    return(
        <Layout>
            <Flex justify="center" pt='20%'>
                <Button w='200px' onClick={signInWithGoogle} leftIcon={<FcGoogle/>} variant='outline' border='2px' borderColor='brand.900' size='lg'>Sign in with google</Button>
            </Flex>
        </Layout>
    )
}

export default LoginPage