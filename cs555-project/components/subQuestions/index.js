import { SlideFade,useToast } from '@chakra-ui/react';
import { QuestionsContext } from '../core/questionsContext/questionsContext';
import { UserContext } from '../core/authContext/authContext';
import { QuestionLayout } from '../core/primaryLayout/questionLayout';
import React,{useContext,useState} from 'react';
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';



const SubQuestions = () => {
    const router = useRouter();
    const toast = useToast()
    const [currentQuestionResponse, setCurrentQuestionResponse] = useState("1");
    const [currentIndex,setCurrentIndex] = useState(0);
    const [allResponses,setAllResponses] = useState({});
    const {subQuestions,setFinalScore,selectedCategory,selectedPrimary} = useContext(QuestionsContext);
    const {User,setuser} = useContext(UserContext);

    const handleChange = value => {
        let currentResponses = allResponses;
            let currentQuestion = subQuestions[currentIndex];
            currentResponses[currentQuestion] = value;
            setAllResponses(currentResponses);
    }

    const handleNext = async () => {
        try {
            let currentResponses = allResponses;
            let currentQuestion = subQuestions[currentIndex];
            if(!currentResponses[currentQuestion]) return toast({title:"Please select an option",status:'warning',duration:'3000'});
            if(currentIndex < subQuestions.length - 1) {
                
                setCurrentIndex(prevValue => prevValue + 1);
            }else{
                let numberOfQuestions = Object.keys(allResponses).length;
                let total = 0;
                let avg = 0;
                console.log("number of questions: ",numberOfQuestions);
                for(let k in allResponses) {
                    total += parseInt(allResponses[k]);
                }
                console.log("total: ",total);
                avg = total/numberOfQuestions;
                let score=Math.round(avg);
                setFinalScore(score);
                
                console.log({id: User.id, score:score, category: selectedCategory, primary: selectedPrimary});
                let solution = 0;
            
                if(score >=1 && score <3) {
                    solution = 1
                }else if(score >= 3 && score < 6) {
                    solution = 2
                }else if(score >= 6 && score <= 9) {
                    solution = 3
                }else{
                    solution = 4
                }
               
                console.log(User);
                console.log('solution: ',solution);
                if(User.score.length > 0) {
                    const exist = User.score.find(i => i.primary === selectedPrimary && i.score === score);
                    if(exist && exist.feedback) {
                        if(exist.feedback["Change content?"]) {
                            let floor = Math.floor(solution);
                            let ceil = Math.ceil(solution);
                            let iteration = (solution * 10) - (ceil * 10);
                            if(iteration !== 9) {
                                solution = solution + 0.1;
                            }
                        }
                    }
                }
                const {data} = await axios.patch("http://localhost:5000/users/",{id: User.id, score:Math.floor(avg), solution: solution, category: selectedCategory, primary: selectedPrimary})
                console.log(data);
                setuser(data);
                if(data) {
                    router.push(`/solution?s=${solution}`);
                }else{
                    return toast({title:"Could not update user",status:'error',duration:'3000'});
                }
            }
        } catch (error) {
            console.log(error);
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