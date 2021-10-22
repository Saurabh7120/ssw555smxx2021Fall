import { useContext } from "react";
import { Text,VStack } from "@chakra-ui/layout"
import {Layout} from "../../components/core"
import { QuestionsContext } from "../../components/core/questionsContext/questionsContext"


export default function SolutionPage() {

    const {score} = useContext(QuestionsContext);


    if(score >=1 && score <3){
      return (
        <Layout>
          <VStack mt='auto' mb='auto'>
              <Text fontSize='2xl'>Here is what we have for you</Text>
              <Text fontSize='4xl' fontWeight='bold'>solution 1</Text>
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
          </VStack>
        </Layout>
      )
    }

  
}
