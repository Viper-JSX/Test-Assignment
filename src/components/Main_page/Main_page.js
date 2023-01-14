import TopContent from "../Top_content/Top_Content";
import WorkingWithGetRequest from "../Working_with_get_request/Working_with_get_request";
import WorkingWithPostRequest from "../Working_with_post_request/Working_with_post_request";

function MainPage(){
    return(
        <div className="mainPage">
            <TopContent />
            <WorkingWithGetRequest />
            <WorkingWithPostRequest />
        </div>
    );
}

export default MainPage;