import { Button, FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup } from "@mui/material";
import { positions } from "@mui/system";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { emailValidationExpression, phoneValidationExpression } from "../../various_things/validation_expressions";

function SignUpForm({ handleSignUp }){
    const positions =  useSelector((state) => state.users.positions);
    const { formState, control, register, handleSubmit, setError } = useForm({
        mode: "onChange",
        defaultValues: {
            position_id: 1,
            email: "ivan@gmail.com",
            name: "Ivann",
            phone: "+380973242455"
        }
    });

    function handleImageChange(event){
        if(event.target.files.length === 0){
            setError("photo", { type: "text", message: "Select the image" });
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = function(event){
            photo.src = event.target.result;
        }

        const photo = new Image();

        photo.onload = function(){
            console.log("done")
            console.log(photo.width, photo.height);
            if(photo.width <= 70 || photo.height <= 70){
                setError("photo", { type: "text", message: "Image dimentions must be at least 70x70" });
            }
        }

        if(event.target.files[0].size > 5000000){ //File greater that 5MB
            setError("photo", { type: "text", message: "Image size must be less that 5MB" });
        }
    }

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

            <Button variant="contained" component="label">
                Upload File
                <input type="file" { ...register("photo", { required: "Upload a photo" }) } hidden accept="image/jpg, image/jpeg" onChange={handleImageChange}/>
            </Button>
            <span>{ formState.errors.photo?.message }</span>

            <Button type="submit" variant="contained">Sing up</Button>
        </form>
    );
}

export default SignUpForm;