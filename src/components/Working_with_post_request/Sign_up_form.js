import "../../../public/files/images/success-image.svg";
import { Button, CircularProgress, FormControl, FormControlLabel, FormLabel, Input, OutlinedInput, Radio, RadioGroup, TextField } from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { emailValidationExpression, phoneValidationExpression } from "../../various_things/validation_expressions";
import PhotoSelect from "./Photo_select";

function SignUpForm({ handleSignUp }){
    const [ positions, user, singUpProcessing ] =  useSelector((state) => [ state.users.positions, state.user.user,  state.user.signUpProcessing]);
    const { formState, control, register, handleSubmit, getValues, setError } = useForm({
        mode: "onChange",
        defaultValues: {
            position_id: 1,
        }
    });

    useEffect(() => setError("photo", { type: "text", message: "Upload a photo" }) ,[]); //To disable the sing up button at initial render (No image selected)

    function checkPhotoSize(images){
        if(images[0].size > 5000000){ //File greater that 5MB
            return "Image size must be less that 5MB";
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

    function checkPhotoExtension(images){
        const photoType = images[0].type;
        console.log(photoType);
        if(photoType !== "image/jpg" && photoType !== "image/jpeg"){
            return "Allowed extensions: jpg and jpeg";
        }
    }




    //Rendering
    if(user){
        return(
            <img className="signUpSuccessImage" src="../../../public/files/images/success-image.svg" />
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
                InputProps={{ className: "signUpFormTextField" }}
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
                InputProps={{ className: "signUpFormTextField" }}
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
                InputProps={{ className: "signUpFormTextField" }}
                { ...register("phone", 
                    {
                        required: "Phone is required",
                        pattern: { value: phoneValidationExpression, message: "Wrong phone format" }
                    }
                )} 
            />

            <FormControl className="signUpFormControll" color="secondary">
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

            <PhotoSelect 
                fileName={ ( getValues().photo && getValues().photo?.length > 0 ) ? getValues().photo[0].name : "Upload a photo" }
                error={formState.errors.photo?.message}
                register={register} 
                checkPhotoExtension={checkPhotoExtension}  
                checkPhotoSize={checkPhotoSize}
                checkPhotoDimentions={checkPhotoDimentions}
            />

            {
                singUpProcessing ? 
                (
                    <CircularProgress color="secondary" />
                )
                :
                (
                    ( Object.keys(formState.errors).length === 0 ) ? 
                    <Button className="signUp roundedButton" type="submit" variant="contained">Sing up</Button>
                    :
                    <Button className="roundedButton" disabled>Sing up</Button>
                )
            }

        </form>
    );
}

export default SignUpForm;