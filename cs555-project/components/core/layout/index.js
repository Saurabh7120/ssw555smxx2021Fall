import React,{useContext} from 'react';
import { Flex,Button } from '@chakra-ui/react';
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
                {loggedIn  && <Flex w='100vw' justify='flex-end'>
                    <LeftOption/>
                    <Button onClick={logOut} leftIcon={<BiLogOut/>} size='lg' m='5px' colorScheme='red' variant='ghost'>Logout</Button>
                </Flex>}
                {children}
            </Flex>
    );

    
};



