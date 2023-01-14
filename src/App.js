import "./css/main.scss";
import "../public/files/images/Logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "./redux/thunks";

function App(){
    useSelector((state) => console.log(state))
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getUsers({}));
    }, [])

    return(
        <div>
            <h2>Working</h2>
        </div>
    );
}

export default App;