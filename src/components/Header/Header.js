import "../../../public/files/images/Logo.svg";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

function Header(){
    const user = useSelector((state) => state.user?.user);

    return(
        <header>
            <div className="headerItemsContainer">
                <img className="appIcon" src="../../../public/files/images/Logo.svg" />
                <div className="headerButtons">
                    {
                        !user ?
                        <Button className="goToSignUp roundedButton" href="#workingWithPostRequest" variant="contained">Sing up</Button>
                        :
                        null
                    }
                    <Button className="goToShowMoreUsers roundedButton" href="#workingWithGetRequest" variant="contained">Users</Button>
                </div>
            </div>
        </header>
    )
}

export default Header;