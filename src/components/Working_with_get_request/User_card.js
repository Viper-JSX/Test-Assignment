function UserCard({ user }){

    return(
        <div className="userCard">
            <img className="userPhoto" src={user.photo} />
            <br />
            <span className="userName">{user.name}</span>
            <p className="userInfo">
                <span className="userPosition">{user.position}</span>
                <br />
                <span className="userEmail">{user.email}</span>
                <br />
                <span className="userPhone">{user.phone}</span>
            </p>
        </div>
    );
}

export default UserCard;