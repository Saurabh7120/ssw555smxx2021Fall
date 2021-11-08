import { useContext } from "react";
import { Text,VStack } from "@chakra-ui/layout"
import {Layout} from "../../components/core"
import { QuestionsContext } from "../../components/core/questionsContext/questionsContext"
import { Button } from "@chakra-ui/button";
import { useRouter } from 'next/dist/client/router';


export default function SolutionPage() {

    const {score} = useContext(QuestionsContext);
    const router = useRouter();


    function handleNext(){
      router.push('./feedback');
    }


    if(score >=1 && score <3){
      return (
        <Layout >
          <VStack mt='auto' mb='auto'>
              <Text fontSize='2xl'>Here is what we have for you</Text>
              <Text fontSize='4xl' fontWeight='bold'>solution 1</Text>
              <Button bg='brand.900' size='lg' marginTop = '150px' onClick = {()=>handleNext()}>
                Finish
              </Button>
          </VStack>
        </Layout>
      )
    }
    else if (score >= 3 && score < 6){
      return (
        <Layout>
          <VStack mt='auto' mb='auto'>
              <Text fontSize='2xl'>Here is what we have for you</Text>
              <Text fontSize='4xl' fontWeight='bold'>solution 2</Text>
              <Button bg='brand.900' size='lg' marginTop = '150px' onClick = {()=>handleNext()}>
                Finish
              </Button>
          </VStack>
        </Layout>
      )
    }

    else if (score >= 6 && score <= 9){
      return (
        <Layout>
          <VStack mt='auto' mb='auto'>
              <Text fontSize='2xl'>Here is what we have for you</Text>
              <Text fontSize='4xl' fontWeight='bold'>solution 3</Text>
              <Button bg='brand.900' size='lg' marginTop = '150px' onClick = {()=>handleNext()}>
                Finish
              </Button>
          </VStack>
        </Layout>
      )
    }

    else {
      return (
        <Layout>
          <VStack mt='auto' mb='auto'>
              <Text fontSize='2xl'>Here is what we have for you</Text>
              <Text fontSize='4xl' fontWeight='bold'>solution 4</Text>
              <Button bg='brand.900' size='lg' marginTop = '150px' onClick = {()=>handleNext()}>
                Finish
              </Button>
          </VStack>
        </Layout>
      )
    }

  
}
