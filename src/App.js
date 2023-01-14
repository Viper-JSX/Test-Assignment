import "./css/main.scss";
import "../public/files/images/Logo.svg";
import { useSelector } from "react-redux";

function App(){
    useSelector((state) => console.log(state))
    return(
        <div>
            <h2>Working</h2>
        </div>
    );
}

export default App;