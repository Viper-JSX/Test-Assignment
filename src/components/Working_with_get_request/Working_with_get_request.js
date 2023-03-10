import { Button, CircularProgress, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Users from "./Users";

function WorkingWithGetRequest({ handleShowMoreUsers }){
    const [ usersAreLoading, usersCount, avaliableUsers ] = useSelector((state) => [ state.users.usersAreLoading, state.users.users.length, state.users.usersData?.total_users || 0 ]);

    return(
        <div id="workingWithGetRequest">
            <Typography variant="h1">Working with GET request</Typography>
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