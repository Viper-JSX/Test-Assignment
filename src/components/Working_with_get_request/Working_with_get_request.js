import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import Users from "./Users";

function WorkingWithGetRequest({ handleShowMoreUsers }){
    const usersAreLoading = useSelector((state) => state.users.usersAreLoading);

    return(
        <div className="workingWithGetRequest">
            <h2>Working with GET request</h2>
            <Users />
            {
                usersAreLoading ?
                null
                :
                <Button onClick={handleShowMoreUsers} variant="contained" >Show more</Button> 
            }
        </div>
    );
}

export default WorkingWithGetRequest;