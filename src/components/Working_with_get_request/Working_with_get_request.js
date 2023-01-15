import { Button } from "@mui/material";
import Users from "./Users";

function WorkingWithGetRequest({ handleShowMoreUsers }){
    return(
        <div className="workingWithGetRequest">
            <h2>Working with GET request</h2>
            <Users />
            <Button onClick={handleShowMoreUsers} variant="contained" >Show more</Button>
        </div>
    );
}

export default WorkingWithGetRequest;