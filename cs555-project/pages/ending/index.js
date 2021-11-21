import { useContext } from "react";
import { Text,VStack } from "@chakra-ui/layout"
import {Layout} from "../../components/core"
import { QuestionsContext } from "../../components/core/questionsContext/questionsContext"
import { Button } from "@chakra-ui/button";
import { useRouter } from 'next/dist/client/router';

export default function EndingPage(){

    const router = useRouter();

    function handleNext1(){
        router.push('./category');
    }

    function handleNext2(){
        router.push('./userProfile');
    }


    return (
        <Layout >
          <VStack mt='auto' mb='auto'>
              <Text fontSize='2xl'>This is the end</Text>
              <Text fontSize='4xl'>Thank you for using the web</Text>
              <Button bg='brand.900' size='lg' marginTop = '50px' onClick = {()=>handleNext1()}>
                Back to Home
                </Button>

                <Button bg='brand.900' size='lg' marginTop = '50px' onClick = {()=>handleNext2()}>
                View Profile
                </Button> 
          </VStack>

          

          
        </Layout>
    )
}