import { Container, Text,Spacer,Stack,Button, Radio, RadioGroup ,IconButton } from '@chakra-ui/react';
import {BiRightArrow,BiLeftArrow} from 'react-icons/bi'
import React,{useEffect, useState} from 'react';
import { HStack } from '@chakra-ui/layout';


const QuestionLayout = ({primary,question,handleNext,handleBack,response,handleChange,index,responseList}) => {

    const [subQuestionAnswer, setSubQuestionAnswer] = useState("0");
    useEffect(() => {
        if(!question || !responseList) return;
        if(!responseList[question]) return setSubQuestionAnswer("0");
        console.log('responseList: ', responseList)
        console.log(typeof responseList[question]);
        setSubQuestionAnswer(responseList[question]);
    },[question,responseList])

    useEffect(() => {
        console.log('subQuestionAnswer: ', subQuestionAnswer);
    },[setSubQuestionAnswer])

    return (
        <Container alignItems='center' pt='15%' pb='10%' textAlign='center'>
            <Text mb='20px' fontSize='2xl' >{question}</Text>
            <Spacer/>
            <RadioGroup value={primary ? response : subQuestionAnswer} onChange={value => {setSubQuestionAnswer(value); handleChange(value)}}  mb='40px' pl='15px'>
                {primary ? <Stack spacing={19} direction="row" marginLeft = '170px'>
                    <Radio colorScheme="gray" value={"true"}>
                    Yes
                    </Radio>
                    <Radio colorScheme="gray" value={"false"}>
                    No
                    </Radio>
                </Stack>
                :
                <Stack spacing={5} direction="row" marginLeft = '-28px'>
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
            <HStack justifyContent="center">
                <IconButton disabled={index === 0} icon={<BiLeftArrow/>} bg="none" color='gray' size='lg' onClick={() => handleBack()}/>
                <Button rightIcon={<BiRightArrow/>} bg='brand.900' size='lg' onClick={() => handleNext()}>
                    Next
                </Button>
            </HStack>
        </Container>
    );
};

export  {QuestionLayout};