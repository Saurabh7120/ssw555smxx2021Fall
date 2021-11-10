import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import theme from '../theme'
import "@fontsource/dosis"
import QuestionsContextProvider from '../components/core/questionsContext/questionsContext'
import {UserProvider} from '../components/core/authContext/authContext';

function MyApp({ Component, pageProps }) {

  return <ChakraProvider theme={theme}>
    <UserProvider>
      <QuestionsContextProvider>
        <Component {...pageProps} />
      </QuestionsContextProvider>
    </UserProvider>
  </ChakraProvider>

}

export default MyApp
