import { useContext, useEffect } from "react";
import { Text,VStack, HStack } from "@chakra-ui/layout"
import {Layout} from "../../components/core"
import { QuestionsContext } from "../../components/core/questionsContext/questionsContext"
import { Button } from "@chakra-ui/button";
import { useRouter } from 'next/dist/client/router';

export default function EndingPage(){

    const router = useRouter();

    const {finish} = useContext(QuestionsContext);

    useEffect(() => {
        finish();
    },[]);

    function handleNext1(){
        router.push('./category');
    }

    function handleNext2(){
        router.push('./userProfile');
    }


    return (
        <Layout >
            <VStack mt = '230px' mb='40px'>
                <Text fontSize='2xl'>This is the end</Text>
                <Text fontSize='4xl'>Thank you for using the web</Text>
              
            </VStack>

            <HStack spacing = '30px' justifyContent = 'center'>
                <Button bg='brand.900' size='lg'  onClick = {()=>handleNext1()}>
                Back to Home
                </Button>

                <Button bg='brand.900' size='lg'   onClick = {()=>handleNext2()}>
                View Profile
                </Button> 
            </HStack>
          

          
        </Layout>
    )
}