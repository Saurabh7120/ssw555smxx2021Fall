import React from 'react';
import { Flex } from '@chakra-ui/layout';



export const Layout = ({children}) => {
    return (
        <Flex direction='column' h='100vh' bg="brand.100">
            {children}
        </Flex>
    );
};

