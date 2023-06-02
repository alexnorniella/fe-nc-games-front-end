import { Link } from "react-router-dom";
// we might need votes here 
const UserCard = ({user}) => {
  return (
    <div className="UserCard">
      <h2 className="UserCardTitle">{user.username} </h2>
      <p className="UserCardAuthor">{user.name}</p>
      <Link to="/"> 
        <img
          className="UserCardPic"
          alt={`A picture of ${user.username}`}
          src={user.avatar_url}
        />
      </Link>
    </div>
  );
};

export default UserCard;