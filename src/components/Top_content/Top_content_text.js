function TopContentText({ title, text }){
    return(
        <div className="topContentTextContainer">
            <h2 className="topContentTitle">{title}</h2>
            <p className="topContentText">{text}</p>
        </div>
    );
}

export default TopContentText;