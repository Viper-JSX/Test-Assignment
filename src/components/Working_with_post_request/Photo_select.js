import { Input, Button, OutlinedInput } from "@mui/material";

function PhotoSelect({ fileName, error, register, checkPhotoExtension, checkPhotoSize, checkPhotoDimentions  }){
    return(
        <div className="">
            <Button className="photoSelect" variant="outlined" color="dark" component="label">
                Upload
                <input type="file" accept=".jpg, .jpeg" hidden { 
                    ...register("photo", { 
                        required: "Upload a photo",
                        validate: {
                            checkPhotoSize,
                            checkPhotoDimentions,
                            checkPhotoExtension
                        }
                    }) 
                }/>
            </Button>
            <OutlinedInput type="text" value={fileName} disabled />
            <br />
            <span>{ error }</span>
        </div>
    );
}

export default PhotoSelect;