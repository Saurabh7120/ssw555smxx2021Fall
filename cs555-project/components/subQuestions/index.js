import { SlideFade } from '@chakra-ui/react';
import { QuestionsContext } from '../core/questionsContext/questionsContext';
import { QuestionLayout } from '../core/primaryLayout/questionLayout';
import React,{useContext,useState} from 'react';
import { useRouter } from 'next/dist/client/router';


const SubQuestions = () => {
    const router = useRouter();

    const [currentQuestionResponse, setCurrentQuestionResponse] = useState("1");
    const [currentIndex,setCurrentIndex] = useState(0);
    const [allResponses,setAllResponses] = useState({});
    const {subQuestions} = useContext(QuestionsContext);

    const handleNext = () => {
        
        if(currentIndex < subQuestions.length - 1) {
            let currentResponses = allResponses;
            let currentQuestion = subQuestions[currentIndex];
            currentResponses[currentQuestion] = currentQuestionResponse;
            setAllResponses(currentResponses);
            setCurrentIndex(prevValue => prevValue + 1);
        }else{
            console.log(allResponses);
        }
    }

    return (
        subQuestions && <SlideFade in={true} offsetY='50px'>
            <QuestionLayout 
                primary={false}
                question={subQuestions[currentIndex]}
                handleNext={handleNext}
                response={currentQuestionResponse}
                handleChange={value => setCurrentQuestionResponse(value)}
        />
        </SlideFade>
    );
};

export  {SubQuestions};