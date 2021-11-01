import { useContext } from "react";
import { Text,VStack } from "@chakra-ui/layout"
import {Layout} from "../../components/core"
import { QuestionsContext } from "../../components/core/questionsContext/questionsContext"
import { Button } from "@chakra-ui/button";


export default function EndingPage(){
    return (
        <Layout >
          <VStack mt='auto' mb='auto'>
              <Text fontSize='2xl'>This is the end</Text>
              <Text fontSize='4xl'>Thank you for using the web</Text>
          </VStack>
        </Layout>
    )
}