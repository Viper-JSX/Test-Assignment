import "./css/main.scss";
import "../public/files/images/Logo.svg";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPositions, getUsers, showmessage, showMessage, signUp } from "./redux/thunks";

import TopContent from "./components/Top_content/Top_Content";
import Header from "./components/Header/Header";
import MainPage from "./components/Main_page/Main_page";


function App(){
    const dispatch = useDispatch();
    const usersData = useSelector((state) => state.users.usersData);
    useSelector((state) => console.log(state))
    useEffect(() =>{
        dispatch(getPositions());
        dispatch(getUsers({ url: "/users?page=1&count=5" }));
    }, [])


    function handleSignUp(data){
        dispatch(signUp({ signUpData: data }));
    }

    function handleShowMoreUsers(){
        console.log("more", usersData)
        dispatch(getUsers({ url: usersData.links.next_url }));
    }

    return(
        <div className="app">
            <Header />
            <MainPage 
                handleSignUp={handleSignUp}
                handleShowMoreUsers={handleShowMoreUsers}
            />
        </div>
    );
}

export default App;