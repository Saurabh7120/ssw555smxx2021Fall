import { SlideFade } from '@chakra-ui/react';
import {BiRightArrow} from 'react-icons/bi'
import { QuestionLayout } from './questionLayout';
import React from 'react';


const Questions = () => {
    return (
        <SlideFade in={true} offsetY='50px'>
            <QuestionLayout questionNumber={1} question="Do you face low energy levels after a day at work?" handleNext={answer => console.log(answer)}/>
        </SlideFade>
    );
};

export  {Questions};