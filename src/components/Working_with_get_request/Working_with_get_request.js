import { Button, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import Users from "./Users";

function WorkingWithGetRequest({ handleShowMoreUsers }){
    const [ usersAreLoading, usersCount, avaliableUsers ] = useSelector((state) => [ state.users.usersAreLoading, state.users.users.length, state.users.usersData?.total_users || 0 ]);

    return(
        <div className="workingWithGetRequest">
            <h2>Working with GET request</h2>
            <Users />

            {
                usersCount < avaliableUsers ? 
                (
                    usersAreLoading ?
                    <CircularProgress color="secondary" />
                    :
                    <Button className="roundedButton showMore" onClick={handleShowMoreUsers} variant="contained" >Show more</Button> 
                )
                :
                null
            }
        </div>
    );
}

export default WorkingWithGetRequest;