const title = "Test assignment for front-end developer";
const text = 
<span>
    What defines a good frontend developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility n mind. 
    <br/>They should also be excited to learn as the world of Front-End Deveopment keeps evolving.
</span>

import Header from "./Header/Header";
import TopContentText from "./Top_content_text";

function TopContent(){
    return(
        <div className="topContent">
            <Header />
            <TopContentText title={title} text={text} />
        </div>
    );
}

export default TopContent;