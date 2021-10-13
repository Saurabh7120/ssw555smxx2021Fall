import { SlideFade,useToast } from '@chakra-ui/react';
import { QuestionsContext } from '../core/questionsContext/questionsContext';
import { QuestionLayout } from '../core/primaryLayout/questionLayout';
import React,{useContext,useState} from 'react';
import { useRouter } from 'next/dist/client/router';


const SubQuestions = () => {
    const router = useRouter();
    const toast = useToast()
    const [currentQuestionResponse, setCurrentQuestionResponse] = useState("1");
    const [currentIndex,setCurrentIndex] = useState(0);
    const [allResponses,setAllResponses] = useState({});
    const {subQuestions} = useContext(QuestionsContext);

    const handleChange = value => {
        let currentResponses = allResponses;
            let currentQuestion = subQuestions[currentIndex];
            currentResponses[currentQuestion] = value;
            setAllResponses(currentResponses);
    }

    const handleNext = () => {
        let currentResponses = allResponses;
        let currentQuestion = subQuestions[currentIndex];
        if(!currentResponses[currentQuestion]) return toast({title:"Please select an option",status:'warning',duration:'3000'});
        if(currentIndex < subQuestions.length - 1) {
            
            setCurrentIndex(prevValue => prevValue + 1);
        }else{
            console.log(allResponses);
        }
    }

    const handleBack = () => {
        if(currentIndex > 0) setCurrentIndex(prevValue => prevValue - 1)
    }

    return (
        subQuestions && <SlideFade in={true} offsetY='50px'>
            <QuestionLayout 
                primary={false}
                question={subQuestions[currentIndex]}
                index={currentIndex}
                handleNext={handleNext}
                responseList={allResponses}
                handleChange={handleChange}
                handleBack={handleBack}
            />
        </SlideFade>
    );
};

export  {SubQuestions};