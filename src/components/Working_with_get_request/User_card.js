function UserCard({ user }){

    return(
        <div className="userCard">
            <h2>{user.name}</h2>
        </div>
    );
}

export default UserCard;