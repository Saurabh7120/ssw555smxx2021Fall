import { Container, Text,Spacer,Stack,Button, Radio, RadioGroup  } from '@chakra-ui/react';
import {BiRightArrow} from 'react-icons/bi'
import React,{useState} from 'react';


const QuestionLayout2 = ({questionNumber,question,handleNext}) => {

    const [answer, setAnswer] = useState(2);

    return (
        <Container alignItems='center' pt='10%' pb='10%' textAlign='center'>
            <Text mb='50px' fontSize='5xl' color='brand.900'>Question {questionNumber}/5</Text>
            <Text mb='20px' fontSize='2xl' >{question}</Text>
            <Spacer/>
            <RadioGroup value={answer} onChange={value => setAnswer(parseInt(value))} mb='40px' pr='40px' marginTop = "50px" 
            marginLeft = "-50px">
                <Stack spacing={8} direction="row">
                    <Radio colorScheme="gray" value={1}>
                    1
                    </Radio>
                    <Radio colorScheme="gray" value={2}>
                    2
                    </Radio>
                    <Radio colorScheme="gray" value={3}>
                    3
                    </Radio>
                    <Radio colorScheme="gray" value={4}>
                    4
                    </Radio>
                    <Radio colorScheme="gray" value={5}>
                    5
                    </Radio>
                    <Radio colorScheme="gray" value={6}>
                    6
                    </Radio>
                    <Radio colorScheme="gray" value={7}>
                    7
                    </Radio>
                    <Radio colorScheme="gray" value={8}>
                    8
                    </Radio>
                    <Radio colorScheme="gray" value={9}>
                    9
                    </Radio>
                    <Radio colorScheme="gray" value={10}>
                    10
                    </Radio>
                </Stack>
            </RadioGroup>
            <Button rightIcon={<BiRightArrow/>} bg='brand.900' size='lg' onClick={() => handleNext(answer)}>
                Next
            </Button>
        </Container>
    );
};

export  {QuestionLayout2};