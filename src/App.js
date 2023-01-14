import "./css/main.scss";
import "../public/files/images/Logo.svg";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPositions, getUsers, showmessage, showMessage, signUp } from "./redux/thunks";

import TopContent from "./components/Top_content/Top_Content";
import Header from "./components/Header/Header";


function App(){
    const dispatch = useDispatch();

    useEffect(() =>{
        //dispatch(getPositions());
        //dispatch(getUsers({ offset: 0, count: 5 }));
    }, [])




    return(
        <div>
            <Header />
            <TopContent />
        </div>
    );
}

export default App;