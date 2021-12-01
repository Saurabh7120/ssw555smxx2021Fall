import React,{useContext, useState} from 'react';
import { Container,Text,Spacer,Stack,Button, Radio, RadioGroup ,IconButton  } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { UserContext } from '../core/authContext/authContext';
import axios from 'axios';

const FeedbackQuestions = () => {
    const [answers, setAnswers] = useState({})

    const router = useRouter();

    const {User,setuser} = useContext(UserContext);
    
    const handleSubmit = async () => {
        try {
            const {data} = await axios.patch(`http://localhost:5000/users/feedback/${User.id}`,{
                scoreId: User.score[0].id,
                answer1: answers["1"],
                answer2: answers["2"]
            });
            if(data){
                setuser(data);
            }
            router.push('/ending');
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Container alignItems='center' pt='10%' pb='10%' textAlign='center'>
            <Text fontWeight='bolder' fontSize='4xl' mb='50px'>Give us some feedback</Text>
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
            <Button bg='brand.900' size='lg' marginTop = '20px' onClick = {handleSubmit}>
                Submit
              </Button>
        </Container>
    )
}

export default FeedbackQuestions;