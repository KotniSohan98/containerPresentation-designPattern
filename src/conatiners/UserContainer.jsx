import { useEffect, useState } from "react";
import UserList from "../components/UserList";

const UserContainer = () => {
  const [users, setusers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const getUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://reqres.in/api/users");
      const data = await response.json();
      console.log(data);
      if (!data.data) return;
      setTimeout(() => {
        setusers(data.data);
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <UserList users={users} loading={isLoading} error={error} />
    </div>
  );
};

export default UserContainer;
