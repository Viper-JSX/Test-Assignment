import { useSelector } from "react-redux";

function Users(){
    const users = useSelector((state) => state.users.users);
    console.log(users);

    return(
        <div className="users">
            Users
        </div>  
    );
}

export default Users;