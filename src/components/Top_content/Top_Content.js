import { Button } from "@mui/material";
import "../../../public/files/images/sunset.jpeg";
import TopContentText from "./Top_content_text";

const title = "Test assignment for front-end developer";
const text = 
<span>
    What defines a good frontend developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility n mind. 
    <br/>They should also be excited to learn as the world of Front-End Deveopment keeps evolving.
</span>


function TopContent(){
    return(
        <div className="topContent">
            <TopContentText title={title} text={text} />
            <Button className="goToSignUp roundedButton" href="#" color="primary" variant="contained">Sign up</Button>
                <div className="topContentUnderlyingImageContainer">
                    <img className="topContentUnderlyingImage" src="../../../public/files/images/sunset.jpeg" />
                </div>
        </div>
    );
}

export default TopContent;