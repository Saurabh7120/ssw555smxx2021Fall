import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import theme from '../theme'
import "@fontsource/dosis"
import UserContextProvider from '../components/core/authContext/authContext';
import QuestionsContextProvider from "../components/core/questionsContext/questionsContext";

function MyApp({ Component, pageProps }) {

  return <ChakraProvider theme={theme}>
    <UserContextProvider>
      <QuestionsContextProvider>
        <Component {...pageProps} />
      </QuestionsContextProvider>
    </UserContextProvider>
  </ChakraProvider>

}

export default MyApp
