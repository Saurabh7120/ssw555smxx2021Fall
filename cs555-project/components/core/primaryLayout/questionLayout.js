import { Container, Text,Spacer,Stack,Button, Radio, RadioGroup  } from '@chakra-ui/react';
import {BiRightArrow} from 'react-icons/bi'
import React,{useState} from 'react';


const QuestionLayout = ({primary,question,handleNext,response,handleChange}) => {



    return (
        <Container alignItems='center' pt='15%' pb='10%' textAlign='center'>
            <Text mb='20px' fontSize='2xl' >{question}</Text>
            <Spacer/>
            <RadioGroup value={response} onChange={value => handleChange(value)}  mb='40px' pl='15px'>
                {primary ? <Stack spacing={5} direction="row" >
                    <Radio colorScheme="gray" value={"true"}>
                    Yes
                    </Radio>
                    <Radio colorScheme="gray" value={"false"}>
                    No
                    </Radio>
                </Stack>
                :
                <Stack spacing={5} direction="row">
                    <Radio colorScheme="gray" value={"1"}>
                    1
                    </Radio>
                    <Radio colorScheme="gray" value={"2"}>
                    2
                    </Radio>
                    <Radio colorScheme="gray" value={"3"}>
                    3
                    </Radio>
                    <Radio colorScheme="gray" value={"4"}>
                    4
                    </Radio>
                    <Radio colorScheme="gray" value={"5"}>
                    5
                    </Radio>
                    <Radio colorScheme="gray" value={"6"}>
                    6
                    </Radio>
                    <Radio colorScheme="gray" value={"7"}>
                    7
                    </Radio>
                    <Radio colorScheme="gray" value={"8"}>
                    8
                    </Radio>
                    <Radio colorScheme="gray" value={"9"}>
                    9
                    </Radio>
                    <Radio colorScheme="gray" value={"10"}>
                    10
                    </Radio>
                </Stack>
                }
            </RadioGroup>
            <Button rightIcon={<BiRightArrow/>} bg='brand.900' size='lg' onClick={() => handleNext()}>
                Next
            </Button>
        </Container>
    );
};

export  {QuestionLayout};