import { Button, FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup } from "@mui/material";
import { positions } from "@mui/system";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { emailValidationExpression, phoneValidationExpression } from "../../various_things/validation_expressions";

function SignUpForm({ handleSignUp }){
    const positions = [ { id: 1, name: "Ivan" }, { id: 2, name: "Ivan" }, { id: 3, name: "Ivan" } ] //useSelector((state) => state.users.positions);
    const { formState, control, register, handleSubmit } = useForm({
        mode: "onChange",
        defaultValues: {
            position_id: 1
        }
    });

    console.log(positions)

    return(
        <form className="signUpForm" method="POST" onSubmit={ handleSubmit(handleSignUp)}>
            <Input 
                type="text" 
                placeholder="Your name" 
                { ...register("name", 
                    { 
                        required: "Name is required", 
                        minLength: { value: 2, message: "Name length must be greater than 2" }, 
                        maxLength: { value: 100, message: "Name length must be less than 100" } 
                    }
                )} 
            />
            <span>{ formState.errors.name?.message }</span>

            <Input 
                type="email" 
                placeholder="Email"
                { ...register("email", 
                    {
                        required: "Email is required",
                        pattern: { value: emailValidationExpression, message: "Wrong email format" }
                    }
                )} 
            />
            <span>{ formState.errors.email?.message }</span>

            <Input 
                type="tel" 
                placeholder="Phone"
                { ...register("phone", 
                    {
                        required: "Email is required",
                        pattern: { value: phoneValidationExpression, message: "Wrong phone format" }
                    }
                )} 
            />
            <span>{ formState.errors.phone?.message }</span>

            <FormControl>
                <FormLabel>Your position</FormLabel>
                

                <Controller 
                    control={control}
                    name="position_id"
                    rules={{ required: "Select the position" }}
                    render={({ field }) =>
                        <RadioGroup { ...field } >
                        {
                            positions.map((position) => 
                                <FormControlLabel value={position.id} label={position.name} control={<Radio />} key={`position_${position.id}}`} />
                            )
                        }
                        </RadioGroup>
                    }
                />
            </FormControl>
            <span>{ formState.errors.position_id?.message }</span>

            <Input type="file" { ...register("photo", { required: "Upload a photo" }) } />

            <Button type="submit" variant="contained">Sing up</Button>
        </form>
    );
}

export default SignUpForm;