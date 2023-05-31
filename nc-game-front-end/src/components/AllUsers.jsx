
import { fetchUsers } from "../api";
import UserCard from "./UserCard";
import { useEffect, useState } from "react";

const AllUsers = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [Users, setUsers] = useState([]);
  
    useEffect(() => {
      setIsLoading(true);
      fetchUsers().then((getUsers) => {
        setUsers(getUsers);
        setIsLoading(false);
      });
    }, []);
  
    if (isLoading) {
      return <p className="Loading">Loading Users.....</p>;
    }
    return (
        <div className="users">
          {Users.map((user) => {
            return <UserCard key={user.username} user={user} />;
          })}
        </div>
      
    );
  };
  export default AllUsers;