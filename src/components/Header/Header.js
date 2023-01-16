import "../../../public/files/images/Logo.svg";
import { Button } from "@mui/material";

function Header(){
    return(
        <header>
            <div className="headerItemsContainer">
                <img className="appIcon" src="../../../public/files/images/Logo.svg" />
                <div className="headerButtons">
                    <Button className="goToSignUp roundedButton" href="#" variant="contained">Sing up</Button>
                    <Button className="goToShowMoreUsers roundedButton" href="#" variant="contained">Users</Button>
                </div>
            </div>
        </header>
    )
}

export default Header;