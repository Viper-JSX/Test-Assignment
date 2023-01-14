import { Button } from "@mui/material";
import Users from "./Users";

function WorkingWithGetRequest(){
    return(
        <div className="workingWithGetRequest">
            <h2>Working with GET request</h2>
            <Users />
            <Button variant="contained" >Show more</Button>
        </div>
    );
}

export default WorkingWithGetRequest;