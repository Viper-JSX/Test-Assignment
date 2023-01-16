import { useSelector } from "react-redux";

function MessageWindow(){
    const message = useSelector((state) => state.message);

    return(
        <div className={`messageWindow ${message ? "visible" : "hidden"} `}>
            <b className="messageTitle">{ message?.messageTitle }</b>
            <p className="messageText">{ message?.messageText }</p>
        </div>
    );
}

export default MessageWindow;