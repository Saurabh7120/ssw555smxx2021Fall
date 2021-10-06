import { Container, Text,Spacer,Select,Button } from '@chakra-ui/react';
import {BiRightArrow} from 'react-icons/bi'
import React from 'react';


const PrimaryCategory = () => {
    return (
        <Container alignItems='center' pt='10%' pb='10%' textAlign='center'>
            <Text mb='50px' fontSize='5xl' color='brand.900'>Let's get started...</Text>
            <Text mb='20px' fontSize='2xl' >Please select your primary issue</Text>
            <Spacer/>
            <Select size='sm' mb='20px'>
                <option>Select one issue</option>
                <option>I have problems at my workplace</option>
            </Select>
            <Button rightIcon={<BiRightArrow/>} bg='brand.900' size='lg'>
                Next
            </Button>
        </Container>
    );
};

export  {PrimaryCategory};