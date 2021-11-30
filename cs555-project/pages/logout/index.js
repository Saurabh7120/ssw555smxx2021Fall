import { Box, Progress, Text, VStack } from "@chakra-ui/react"
import { useContext, useEffect } from "react";
import { QuestionsContext } from "../../components/core/questionsContext/questionsContext";
import { logOut } from "../../services/initFirebase";

const Logout = () => {

    const {finish} = useContext(QuestionsContext);

    useEffect(() => {
        finish();
        setTimeout(() => {
            logOut();
        },2000)
    },[]);

    return(
        <VStack justifyContent={'center'} w="100vw" h="100vh">
            <Box w='100%' display={'flex'} justifyContent={'center'} flexWrap={'wrap'} alignItems='center'>
                <Text mb='10px' w={'100%'} textAlign={'center'} fontSize={'2xl'}>Logging out...</Text>
                <Progress w={'20%'} size='xs' isIndeterminate colorScheme={"purple"}/>
            </Box>
        </VStack>
    )
}

export default Logout;