import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import theme from '../theme'
import "@fontsource/dosis"
import QuestionsContextProvider from '../components/core/questionsContext/questionsContext'

function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={theme}>
    <QuestionsContextProvider>
      <Component {...pageProps} />
    </QuestionsContextProvider>
  </ChakraProvider>

}

export default MyApp
