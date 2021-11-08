import React,{useContext} from 'react';
import { Flex,Button } from '@chakra-ui/react';
import { logOut } from '../../../services/initFirebase';
import { UserContext } from '../authContext/authContext';
import {BiLogOut} from "react-icons/bi";



export const Layout = ({children}) => {

    const User = useContext(UserContext);


    return (
        <Flex direction='column' h='100vh' bg="brand.100">
            {User && <Flex w='100vw' justify='flex-end'>
                <Button onClick={logOut} leftIcon={<BiLogOut/>} size='lg' m='5px' colorScheme='red' variant='ghost'>Logout</Button>
            </Flex>}
            {children}
        </Flex>
    );
};

