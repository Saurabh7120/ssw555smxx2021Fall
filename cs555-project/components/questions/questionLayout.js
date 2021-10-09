import { Container, Text,Spacer,Stack,Button, Radio, RadioGroup  } from '@chakra-ui/react';
import {BiRightArrow} from 'react-icons/bi'
import React,{useState} from 'react';


const QuestionLayout = ({questionNumber,question,handleNext}) => {

    const [answer, setAnswer] = useState(2);

    return (
        <Container alignItems='center' pt='10%' pb='10%' textAlign='center'>
            <Text mb='50px' fontSize='5xl' color='brand.900'>Question {questionNumber}/5</Text>
            <Text mb='20px' fontSize='2xl' >{question}</Text>
            <Spacer/>
            <RadioGroup value={answer} onChange={value => setAnswer(parseInt(value))} mb='40px' pl='15px'>
                <Stack spacing={5} direction="row">
                    <Radio colorScheme="gray" value={1}>
                    Yes
                    </Radio>
                    <Radio colorScheme="gray" value={2}>
                    No
                    </Radio>
                </Stack>
            </RadioGroup>
            <Button rightIcon={<BiRightArrow/>} bg='brand.900' size='lg' onClick={() => handleNext(answer)}>
                Next
            </Button>
        </Container>
    );
};

export  {QuestionLayout};