import { useEffect, useContext, useState } from "react";
import { UserContext } from "../../components/core/authContext/authContext";
import {Text} from "@chakra-ui/react";
import { Layout } from "../../components/core";
import { UserProfile } from "../../components/UserProfile";
import axios from "axios";

export default function UserProfilePage() {

    const [currentUser, setCurrentUser] = useState(null)

    const User = useContext(UserContext);

    useEffect(() => {
        if(User) {
            try {
                const getUser = async id => {
                    const {data} = await axios.get(`http://localhost:5000/users/${id}`);
                    setCurrentUser(data);
                  }
                  getUser(User.id);
            } catch (error) {
                console.log(error);
            }
        }
    },[])

    return(
        <Layout>
            <UserProfile userInfo={currentUser}/>
        </Layout>
    )
}