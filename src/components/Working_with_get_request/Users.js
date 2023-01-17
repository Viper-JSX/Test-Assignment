import { useSelector } from "react-redux";
import UserCard from "./User_card";

function Users(){
    const users = useSelector((state) => state.users.users);

    return(
        <div className="users">
            {
                users.map((user) => <UserCard user={user} key={`${user.email}_${user.id}`} />)
            }
        </div>  
    );
}

export default Users;