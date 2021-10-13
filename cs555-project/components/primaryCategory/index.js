import { Container, Text,Spacer,Select,Button, SlideFade, useDisclosure, useToast } from '@chakra-ui/react';
import { QuestionsContext } from '../core/questionsContext/questionsContext';
import {BiRightArrow} from 'react-icons/bi'
import React,{useState,useContext, useEffect} from 'react';
import { useRouter } from 'next/dist/client/router';


const PrimaryCategory = () => {
    const [start, setStart] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const toast = useToast();
    const {isOpen, onOpen} = useDisclosure();
    const {categories, selectCategory} = useContext(QuestionsContext);

    const router = useRouter();

    const handleSelect = e => {
        setSelectedCategory(e.target.value);
    }

    useEffect(() => {
        console.log("categories: ",categories);
    },[categories])

    const handleNext = () => {
        if(selectedCategory) {
            selectCategory(selectedCategory);
            setStart(true);
            setTimeout(() => {
                onOpen();
                setTimeout(() => {
                    router.push('/primary');
                },3000);
            }, 1000);
        }else{
            toast({
                title:"Please select an issue",
                duration:3000,
                status:'warning'
            })
        }

        //onToggle();
    }

        return (
            !start? 
            <SlideFade in={!isOpen} offsetY="50px">
                <Container alignItems='center' pt='10%' pb='10%' textAlign='center'>
                    <Text mb='50px' fontSize='5xl' color='brand.900'>Let's get started...</Text>
                    <Text mb='20px' fontSize='2xl' >Please select your primary issue</Text>
                    <Spacer/>
                    <Select size='sm' mb='40px' onChange={handleSelect}>
                        <option>Select one issue</option>
                        {categories && categories.map(i => {return <option value={i}>{i}</option>})}
                        
                    </Select>
                    <Button rightIcon={<BiRightArrow/>} bg='brand.900' size='lg' onClick={handleNext}>
                        Next
                    </Button>
                </Container>
            </SlideFade>
            :
            <SlideFade in={isOpen} offsetY="50px">
                {isOpen && <Container alignItems='center' pt='10%' pb='10%' textAlign='center' >
                    <Text mb='50px' fontSize='4xl' color='brand.900'>Let's narrow down your issue a bit...</Text>
                </Container>}
            </SlideFade>
        )

    }

export  {PrimaryCategory};