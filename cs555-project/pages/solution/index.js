import { useContext } from "react";
import { Text,VStack } from "@chakra-ui/layout"
import {Layout} from "../../components/core"
import { QuestionsContext } from "../../components/core/questionsContext/questionsContext"


export default function SolutionPage() {

    const {score} = useContext(QuestionsContext);

  return (
    <Layout>
      <VStack mt='auto' mb='auto'>
          <Text fontSize='2xl'>Your score is</Text>
          <Text fontSize='4xl' fontWeight='bold'>{score}</Text>
      </VStack>
    </Layout>
  )
}
