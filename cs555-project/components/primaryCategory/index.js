import { Container, Text,Spacer,Select,Button, SlideFade, useDisclosure } from '@chakra-ui/react';
import {BiRightArrow} from 'react-icons/bi'
import React,{useState} from 'react';
import { useRouter } from 'next/dist/client/router';


const PrimaryCategory = () => {
    const [start, setStart] = useState(false);
    const {isOpen, onOpen} = useDisclosure();

    const router = useRouter();

    const handleNext = () => {
    
        setStart(true);
        setTimeout(() => {
            onOpen();
            setTimeout(() => {
                router.push('/questions');
            },3000);
        }, 1000);
        //onToggle();
    }

        return (
            !start? 
            <SlideFade in={!isOpen} offsetY="50px">
                <Container alignItems='center' pt='10%' pb='10%' textAlign='center'>
                    <Text mb='50px' fontSize='5xl' color='brand.900'>Let's get started...</Text>
                    <Text mb='20px' fontSize='2xl' >Please select your primary issue</Text>
                    <Spacer/>
                    <Select size='sm' mb='40px'>
                        <option>Select one issue</option>
                        <option>I have problems at my workplace</option>
                    </Select>
                    <Button rightIcon={<BiRightArrow/>} bg='brand.900' size='lg' onClick={handleNext}>
                        Next
                    </Button>
                </Container>
            </SlideFade>
            :
            <SlideFade in={isOpen} offsetY="50px">
                {isOpen && <Container alignItems='center' pt='10%' pb='10%' textAlign='center' >
                    <Text mb='50px' fontSize='4xl' color='brand.900'>We have some question curated for you, so lets get started...</Text>
                </Container>}
            </SlideFade>
        )

    }

export  {PrimaryCategory};