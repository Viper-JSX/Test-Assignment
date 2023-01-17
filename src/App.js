import "./css/main.scss";
import "../public/files/images/Logo.svg";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPositions, getUsers,  signUp } from "./redux/thunks";

import Header from "./components/Header/Header";
import MainPage from "./components/Main_page/Main_page";
import { usersPerRequest } from "./api/requests_config";
import MessageWindow from "./components/Message_window/Message_window";
import WebFont from "webfontloader";
import { TextField } from "@mui/material";


function App(){
    const dispatch = useDispatch();
    const usersData = useSelector((state) => state.users.usersData);
    
    useEffect(() =>{
        WebFont.load({
            google:{
                families: ["Nunito"]
            }
        });
        dispatch(getPositions());
        dispatch(getUsers({ url: `/users?page=1&count=${usersPerRequest}` }));
    }, [])


    function handleSignUp(data){
        dispatch(signUp({ signUpData: data }));
    }

    function handleShowMoreUsers(){
        dispatch(getUsers({ url: usersData.links.next_url }));
    }

    return(
        <div className="app">
            <Header />
            <MainPage 
                handleSignUp={handleSignUp}
                handleShowMoreUsers={handleShowMoreUsers}
            />
            <MessageWindow />
        </div>
    );
}

export default App;