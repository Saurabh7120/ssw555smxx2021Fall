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
import { useEffect } from "react";
import questionMap from "../../data/questionMap";

export const UserProfile = ({userInfo}) => {

    const router = useRouter();

    console.log(questionMap);

    useEffect(()=>{
        console.log(questionMap);
    },[questionMap])

    return(
        userInfo && <Container  maxW="container.lg" alignItems='center' pt='5%' pb='10%' textAlign='center'>
            <HStack mb='10px'>
                <Text><strong>Name: </strong>{userInfo.name}</Text>
                <Text><strong>Email: </strong>{userInfo.email}</Text>
            </HStack>
            <Box mb='10px' overflowY={'auto'} maxH={'60%'} boxShadow={'lg'} borderRadius={'lg'}>
                <Table variant="simple" w={'100%'} >
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
                            <Td>{questionMap[i.primary]}</Td>
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
            </Box>

            <Button onClick={() => router.push('/category')}  boxShadow={'lg'} leftIcon={<BiLeftArrow/>} variant={'contained'} bg='brand.900' size='lg' color='white' >Back to App</Button>
        </Container>
    )
}

