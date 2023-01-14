import "./css/main.scss";
import "../public/files/images/Logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPositions, getUsers, showmessage, showMessage, signUp } from "./redux/thunks";

function App(){
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getPositions());
        dispatch(getUsers({ offset: 0, count: 5 }));
    }, [])

    const message = useSelector((state) => state.message);

    return(
        <div>
            <h2>Working</h2>
            {message ? "TObi gg" : "Harosh"} 
        </div>
    );
}

export default App;