import { useSelector } from "react-redux";
import UserCard from "./User_card";

function Users(){
    const users = useSelector((state) => state.users.users);
    /*const users = [
        {
            name: "Van",
            position: "Musor",
            email: "psina@hmao.com",
            phone: "1244567889",
            photo: "none"
        },
        {
            name: "Van",
            position: "Musorpsina@hmao.compsina@hmao.com psina@hmao.com psina@hmao.compsina@hmao.compsina@hmao.compsina@hmao.compsina@hmao.compsina@hmao.compsina@hmao.com",
            email: "psina@hmao.psina@hmao.psina@hmao.psina@hmao.psina@hmao.psina@hmao.psina@hmao.psina@hmao.psina@hmao.psina@hmao.",
            phone: "1244567889",
            photo: "none"
        },
        {
            name: "Van",
            position: "Musor",
            email: "psina@hmao.com",
            phone: "1244567889",
            photo: "none"
        },
        {
            name: "Van",
            position: "Musor",
            email: "psina@hmao.com",
            phone: "1244567889",
            photo: "none"
        },
        {
            name: "Van",
            position: "Musor",
            email: "psina@hmao.com",
            phone: "1244567889",
            photo: "none"
        }
    ];
    */
    console.log(users)

    return(
        <div className="users">
            {
                users.map((user) => <UserCard user={user} key={user.id} />)
            }
        </div>  
    );
}

export default Users;