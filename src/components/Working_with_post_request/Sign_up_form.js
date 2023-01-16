import "../../../public/files/images/success-image.svg";
import { Button, FormControl, FormControlLabel, FormLabel, Input, OutlinedInput, Radio, RadioGroup, TextField } from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { emailValidationExpression, phoneValidationExpression } from "../../various_things/validation_expressions";

function SignUpForm({ handleSignUp }){
    const [ positions, user ] =  useSelector((state) => [ state.users.positions, state.user?.user ]);
    const { formState, control, register, handleSubmit, setError } = useForm({
        mode: "onChange",
        defaultValues: {
            position_id: 1,
            email: "ivan@gmail.com",
            name: "Ivann",
            phone: "+380973242455"
        }
    });

    useEffect(() => setError("photo", { type: "text", message: "Select the image" }) ,[]); //To disable the sing up button at initial render (No image selected)

    function checkPhotoSelected(images){
        if(images.length === 0){
            return "Select the image"
        }
    }

    function checkPhotoSize(images){
        if(images[0].size > 5000000){ //File greater that 5MB
            setError("photo", { type: "text", message: "Image size must be less that 5MB" });
        }
    }

    function checkPhotoDimentions(images){
        const reader = new FileReader();
        reader.readAsDataURL(images[0]);
        reader.onload = function(event){
            photo.src = event.target.result;
        }

        const photo = new Image();
        photo.onload = function(){
            if(photo.width <= 70 || photo.height <= 70){
                setError("photo", { type: "text", message: "Image dimentions must be at least 70x70" });
            }
        }
    }


    if(user){
        return(
            <img src="../../../public/files/images/success-image.svg" />
        )
    }

    return(
        <form className="signUpForm" method="POST" onSubmit={ handleSubmit(handleSignUp)}>
            
            <TextField 
                type="text" 
                placeholder="Your name" 
                variant="outlined"
                label={formState.errors.name?.message}
                InputLabelProps={{
                    style: { color: 'red' },
                }}
                { ...register("name", 
                    { 
                        required: "Name is required", 
                        minLength: { value: 2, message: "Name length must be greater than 2" }, 
                        maxLength: { value: 100, message: "Name length must be less than 100" } 
                    }
                )} 
            />

            <TextField 
                type="email" 
                placeholder="Email"
                label={formState.errors.email?.message}
                InputLabelProps={{
                    style: { color: 'red' },
                }}
                { ...register("email", 
                    {
                        required: "Email is required",
                        pattern: { value: emailValidationExpression, message: "Wrong email format" }
                    }
                )} 
            />

            <TextField
                type="tel" 
                placeholder="Phone"
                label={formState.errors.phone?.message}
                InputLabelProps={{
                    style: { color: 'red' },
                }}
                { ...register("phone", 
                    {
                        required: "Email is required",
                        pattern: { value: phoneValidationExpression, message: "Wrong phone format" }
                    }
                )} 
            />

            <FormControl color="secondary">
                <FormLabel>Your position</FormLabel>
                

                <Controller 
                    control={control}
                    name="position_id"
                    rules={{ required: "Select the position" }}
                    render={({ field }) =>
                        <RadioGroup { ...field } >
                        {
                            positions.map((position) => 
                                <FormControlLabel value={position.id}  label={position.name} control={<Radio color="secondary" />} key={`position_${position.id}}`} />
                            )
                        }
                        </RadioGroup>
                    }
                />
            </FormControl>
            <span>{ formState.errors.position_id?.message }</span>

            <Button variant="contained" component="label">
                Upload File
                <input type="file" { 
                    ...register("photo", { 
                        required: "Upload a photo",
                        validate: {
                            photoIsSelected: checkPhotoSelected,
                            sizeIsSuitable: checkPhotoSize,
                            photoDimentionsAreSuitable: checkPhotoDimentions
                        }
                    }) 
                    } hidden accept="image/jpg, image/jpeg" />
            </Button>
            <span>{ formState.errors.photo?.message }</span>

            {
                ( Object.keys(formState.errors).length === 0 ) ? 
                <Button className="roundedButton" type="submit" variant="contained">Sing up</Button>
                :
                <Button className="roundedButton" disabled>Sing up</Button>
            }

        </form>
    );
}

export default SignUpForm;