import { SlideFade,useDisclosure,Container,Text, Progress } from '@chakra-ui/react';
import { QuestionsContext } from '../core/questionsContext/questionsContext';
import { QuestionLayout } from '../core/primaryLayout/questionLayout';
import React,{useContext,useState} from 'react';
import { useRouter } from 'next/dist/client/router';


const Questions = () => {
    const router = useRouter();

    const [forward,setForward] = useState(false);
    const [currentQuestionResponse, setCurrentQuestionResponse] = useState("false");
    const [currentIndex,setCurrentIndex] = useState(0);
    const {primaryQuestions,selectPrimary} = useContext(QuestionsContext);
    const {isOpen, onOpen} = useDisclosure();

    const handleNext = () => {
        if(currentQuestionResponse === "true") {
            selectPrimary(primaryQuestions[currentIndex]);
            setForward(true);
            setTimeout(() => {
                onOpen();
                setTimeout(() => {
                    router.push('/questions');
                },3000);
            }, 1000);
        } 
       
        if(currentIndex < primaryQuestions.length) setCurrentIndex(prevValue => prevValue + 1)
    }

    const handleBack = () => {
        if(currentIndex > 0) setCurrentIndex(prevValue => prevValue - 1)
    }

    return (
        !forward ? primaryQuestions && <SlideFade in={!isOpen} offsetY='50px'>
            <QuestionLayout 
                primary={true}
                question={primaryQuestions[currentIndex]}
                index={currentIndex}
                handleNext={handleNext}
                response={currentQuestionResponse}
                handleChange={value => setCurrentQuestionResponse(value)}
                handleBack={handleBack}
        />
        </SlideFade>
        :
        <SlideFade in={isOpen} offsetY="50px">
                {isOpen && <Container display={'flex'} justifyContent={'center'} flexWrap={'wrap'} alignItems='center' pt='10%' pb='10%' textAlign='center' >
                    <Text mb='50px' fontSize='4xl' color='brand.900'>We have some questions created for you, so lets get started...</Text>
                    <Progress w={'50%'} size='xs' isIndeterminate colorScheme={"purple"}/>
                </Container>}
            </SlideFade>
    );
};

export  {Questions};