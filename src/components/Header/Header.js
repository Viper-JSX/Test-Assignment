import "../../../public/files/images/Logo.svg";
import { Button } from "@mui/material";

function Header(){
    return(
        <header>
            <img className="appIcon" src="../../../public/files/images/Logo.svg" />
            <div className="headerButtons">
                <Button className="goToSignUp" href="#" variant="contained">Sing up</Button>
                <Button className="goToShowMoreUsers" href="#" variant="contained">Users</Button>
            </div>
        </header>
    )
}

export default Header;