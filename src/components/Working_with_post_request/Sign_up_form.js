import { Button, Input } from "@mui/material";
import { useForm } from "react-hook-form";

function SignUpForm(){
    const { formState, register, handleSubmit } = useForm({
        mode: "onSubmit"
    });

    return(
        <form className="signUpForm" method="POST">
            <Input 
                type="text" 
                placeholder="Your name" 
                { ...register("name", 
                    { 
                        required: "Name is required", minLength: { value: 2, message: "Name length must be greater than 2" }, maxLength: { value: 100, message: "Name length must be less than 100" } }
                )} 
            />
            
            <Input type="email" placeholder="Email" />
            <Input type="tel" placeholder="Phone" />

            <Button type="submit" variant="contained">Sing up</Button>
        </form>
    );
}

export default SignUpForm;