import React,{useState} from 'react';
import { Container,Text,Spacer,Stack,Button, Radio, RadioGroup ,IconButton  } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';

const FeedbackQuestions = () => {
    const [answers, setAnswers] = useState({})

    const router = useRouter();
    

    return (
        <Container alignItems='center' pt='10%' pb='10%' textAlign='center'>
            <Text fontWeight='bolder' fontSize='4xl' mb='50px'>Give some feedback</Text>
            <Text mb='20px' fontSize='2xl' >Are you feeling better?</Text>
            <RadioGroup  value={answers['1'] && answers['1']} onChange={value => setAnswers(prevValue => {
                return {
                    ...prevValue,
                    "1": value
                }
            })}  mb='40px' pl='15px'>
                <Stack spacing={19} direction="row" marginLeft = '170px'>
                    <Radio colorScheme="gray" value={"true"}>
                    Yes
                    </Radio>
                    <Radio colorScheme="gray" value={"false"}>
                    No
                    </Radio>
                </Stack>
            </RadioGroup>
            <Text mb='20px' fontSize='2xl' >Would you like a change in the content the next time you visit?</Text>
            <RadioGroup  value={answers['2'] && answers['2']} onChange={value => setAnswers(prevValue => {
                return {
                    ...prevValue,
                    "2": value
                }
            })}  mb='40px' pl='15px'>
                <Stack spacing={19} direction="row" marginLeft = '170px'>
                    <Radio colorScheme="gray" value={"true"}>
                    Yes
                    </Radio>
                    <Radio colorScheme="gray" value={"false"}>
                    No
                    </Radio>
                </Stack>
            </RadioGroup>
            <Button bg='brand.900' size='lg' marginTop = '20px' onClick = {()=> router.push('/ending')}>
                Submit
              </Button>
        </Container>
    )
}

export default FeedbackQuestions;