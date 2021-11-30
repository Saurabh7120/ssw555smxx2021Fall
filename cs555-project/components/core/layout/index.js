import React,{useContext} from 'react';
import { Flex,Button, HStack, Text, Heading } from '@chakra-ui/react';
import { logOut } from '../../../services/initFirebase';
import { UserContext } from '../authContext/authContext';
import {BiLogOut} from "react-icons/bi";
import LeftOption from '../../LeftOption';
import { useRouter } from 'next/dist/client/router';




export const Layout = ({children}) => {

    const router = useRouter();
    const {loggedIn} = useContext(UserContext);

    
    return (
            <Flex direction='column' h='100vh' bg="brand.100">
                <Flex w='100vw' justify={loggedIn ? 'space-between' : 'flex-start'} p='10px 10px'>
                    <Heading color={'brand.900'}>M-Health</Heading>
                    {loggedIn  && <HStack>
                        <LeftOption/>
                        <Button onClick={() => router.push('/logout')} leftIcon={<BiLogOut/>} size='lg' m='5px' colorScheme='red' variant='ghost'>Logout</Button>
                    </HStack>}
                </Flex>
                {children}
            </Flex>
    );

    
};



