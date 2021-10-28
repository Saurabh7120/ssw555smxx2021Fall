import React from 'react';
import { Layout } from '../../components/core';
import { Button,Flex } from '@chakra-ui/react';
import {FcGoogle} from 'react-icons/fc';
import {signInWithGoogle} from '../../services/initFirebase';
import { useRouter } from 'next/dist/client/router';

const LoginPage = () => {

    const Router = useRouter();

    return(
        <Layout>
            <Flex justify="center" pt='20%'>
                <Button w='200px' onClick={signInWithGoogle} leftIcon={<FcGoogle/>} variant='outline' border='2px' borderColor='brand.900' size='lg'>Sign in with google</Button>
            </Flex>
        </Layout>
    )
}

export default LoginPage