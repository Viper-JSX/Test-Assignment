import "../../../../public/files/images/Logo.svg";
import { Button } from "@mui/material";

function Header(){
    return(
        <header>
            <img src="../../../../public/files/images/Logo.svg" />
            <Button href="#" variant="contained">Users</Button>
            <Button href="#" variant="contained">Users</Button>
        </header>
    )
}

export default Header;