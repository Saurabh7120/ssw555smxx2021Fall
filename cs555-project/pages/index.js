
import { useEffect, useContext } from "react"
import { Text } from "@chakra-ui/layout"
import {Layout} from "../components/core"
import { UserContext } from "../components/core/authContext/authContext"
import { useRouter } from "next/dist/client/router"


export default function Home() {
  const router = useRouter();
  const User = useContext(UserContext);

  useEffect(() => {
    if(User) {
      router.push('/category');
    }else{
      router.push('/login');
    }
  },[User])

  return (
    <Layout>
      <Text mt='20%' textAlign='center' fontSize='2xl'>Please Wait....</Text>
    </Layout>
  )
}
