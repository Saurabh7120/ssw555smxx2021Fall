import {Box,
    Container,
    Text,
    HStack,
    Button,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
} from "@chakra-ui/react";
import {BiLeftArrow} from "react-icons/bi"
import { useRouter } from "next/dist/client/router";

export const UserProfile = ({userInfo}) => {

    const router = useRouter();

    return(
        userInfo && <Container  maxW="container.lg" alignItems='center' pt='15%' pb='10%' textAlign='center'>
            <Table variant="simple" w={'100%'} boxShadow={'lg'} borderRadius={'lg'}>
                <TableCaption>Usage History</TableCaption>
                <Thead>
                    <Tr>
                    <Th>Index</Th>
                    <Th>Issue category</Th>
                    <Th>Detailed Issue</Th>
                    <Th >Mental Score</Th>
                    <Th>Solution</Th>
                    <Th>Checked at</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {userInfo.score.map((i,idx) => 
                        <Tr key={i.id}>
                        <Td>{idx + 1}</Td>
                        <Td>{i.category}</Td>
                        <Td>{i.primary}</Td>
                        <Td 
                            color={
                            i.score >=1 && i.score <3  ?
                            "#28B463" :
                            i.score >= 3 && i.score < 6 ?
                            "#F1C40F" :
                            i.score >= 6 && i.score <= 9 ?
                            "#F39C12" :
                            "#C0392B"
                            }
                        >{i.score}{` (${
                            i.score >=1 && i.score <3 ?
                            "You are okay" :
                            i.score >= 3 && i.score < 6 ?
                            "Can be better" :
                            i.score >= 6 && i.score <= 9 ?
                            "Take care of yourself" :
                            "You need help"
                        })`}</Td>
                        <Td>{`Solution ${i.solution}`}</Td>
                        <Td>{i.checkedAt}</Td>
                        </Tr>
                    )}
                </Tbody>
            </Table>
            {/* <HStack justifyContent={'center'} mb='40px'>
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
            </HStack> */}
            <Button onClick={() => router.push('/category')}  boxShadow={'lg'} leftIcon={<BiLeftArrow/>} variant={'contained'} bg='brand.900' size='lg' color='white' >Back to App</Button>
        </Container>
    )
}

