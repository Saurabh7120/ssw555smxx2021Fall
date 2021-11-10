import { Flex,Button } from '@chakra-ui/react';
import {CgProfile} from "react-icons/cg";
import {IoChevronBackCircleOutline} from "react-icons/io";
import { useRouter } from 'next/dist/client/router';
import React from 'react';

export default function LeftOption(){
    const router = useRouter();
    
            //if(router.pathname === "/userProfile") {
                return (
            //         <Button onClick={() => router.push("/userProfile")} leftIcon={<IoChevronBackCircleOutline/>} size='lg' m='5px'  variant='ghost'>Back to app</Button>
            //     )
            // }else{
            //     return (
                    <Button onClick={() => router.push("/userProfile")} leftIcon={<CgProfile/>} size='lg' m='5px'  variant='ghost'>Profile</Button>
                )
            // }
            
}