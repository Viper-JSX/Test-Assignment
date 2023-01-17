import { Input, Button } from "@mui/material";

function PhotoSelect({ register, checkPhotoExtension, checkPhotoSize, checkPhotoDimentions, fileName  }){
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
            <Input type="text" value={fileName} disabled />
        </div>
    );
}

export default PhotoSelect;