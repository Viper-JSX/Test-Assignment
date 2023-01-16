import { Card } from "@mui/material";

function UserCard({ user }){

    return(
        <Card className="userCard">
            <img className="userPhoto" src={user.photo} />
            <br />
            <span className="userName" title={user.name}>{user.name}</span>
            <p className="userInfo">
                <span className="userPosition" title={user.position}>{user.position}</span>
                <br />
                <span className="userEmail" title={user.email}>{user.email}</span>
                <br />
                <span className="userPhone">{user.phone}</span>
            </p>
        </Card>
    );
}

export default UserCard;