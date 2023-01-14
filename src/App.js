import "./css/main.scss";
import "../public/files/images/Logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPositions, getUsers, signUp } from "./redux/thunks";

function App(){
    useSelector((state) => console.log(state))
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getPositions());
        dispatch(getUsers({ offset: 0, count: 5 }));

        //dispatch(signUp({ signUpData: { name: "Yura", email: "yuramcpecs@gmail.com", phone: "+380955388485", position_id: "2" } }));
    }, [])

    return(
        <div>
            <h2>Working</h2>
        </div>
    );
}

export default App;