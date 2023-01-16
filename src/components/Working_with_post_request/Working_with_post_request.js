import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import SignUpForm from "./Sign_up_form";

function WorkingWithPostRequest({ handleSignUp }){
    const user = useSelector((state) => state.user?.user);

    return(
        <div className="workingWithPostRequest">
            <h2>
                {
                    user ?
                    "User successfully registered"
                    :
                    "Working with post request" 
                }
            </h2>
            
                <SignUpForm handleSignUp={handleSignUp} />
        </div>  
    );
}

export default WorkingWithPostRequest;