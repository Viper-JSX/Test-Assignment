import { Button } from "@mui/material";
import SignUpForm from "./Sign_up_form";

function WorkingWithPostRequest({ handleSignUp }){
    return(
        <div className="workingWithPostRequest">
            <h2>Working with post request</h2>
            <SignUpForm handleSignUp={handleSignUp} />
        </div>  
    );
}

export default WorkingWithPostRequest;