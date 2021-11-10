import {Box,Container,Text,HStack,Button} from "@chakra-ui/react";
import {BiLeftArrow} from "react-icons/bi"
import { useRouter } from "next/dist/client/router";

export const UserProfile = ({userInfo}) => {

    const router = useRouter();

    return(
        userInfo && <Container alignItems='center' pt='15%' pb='10%' textAlign='center'>
            <HStack justifyContent={'center'} mb='40px'>
                <Box textAlign='left' boxShadow={'lg'} borderRadius={'8px'} padding={'15px'} minH={'148px'} minW={'215px'}>
                    <Text fontSize="2xl" mb='10px' fontWeight="bold">Basic Info</Text>
                    <Text>{userInfo.name}</Text>
                    <Text>{userInfo.email}</Text>
                </Box>
                <Box textAlign='left' boxShadow={'lg'} borderRadius={'8px'} padding={'15px'} minH={'148px'} minW={'215px'}>
                    <Text fontSize="2xl" mb='10px' fontWeight="bold">Mental Score</Text>
                    <Text fontSize={'xl'} fontWeight={'bold'}>{userInfo.score} /<Text fontSize='md' as='span'>10</Text></Text>
                    {userInfo.lastChecked && <Text fontSize={'sm'}>as of {userInfo.lastChecked}</Text>}
                </Box>
            </HStack>
            <Button onClick={() => router.push('/category')}  boxShadow={'lg'} leftIcon={<BiLeftArrow/>} variant={'contained'} bg='brand.900' size='lg' color='white' >Back to App</Button>
        </Container>
    )
}

