import { Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import SignUpForm from "./Sign_up_form";

function WorkingWithPostRequest({ handleSignUp }){
    const user = useSelector((state) => state.user.user);

    return(
        <div id="workingWithPostRequest">
            <Typography variant="h1">
                {
                    user ?
                    "User successfully registered"
                    :
                    "Working with post request" 
                }
            </Typography>
            
            <SignUpForm handleSignUp={handleSignUp} />
        </div>  
    );
}

export default WorkingWithPostRequest;