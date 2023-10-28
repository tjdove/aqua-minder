import { useState, useEffect } from "react";
import axios from "axios";
import { User } from "@prisma/client";
import Loading from "../components/Loading";
import UserDisplay from "../components/UserDisplay";

const App = () => {
  const [users, setUsers] = useState([]);
  //const [loadingError, setError] = useState({});

  useEffect(() => {
    axios
      .get("/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
        //setError(error);
      });
  }, []);

  return (
    <div className="list-users">
      {/* <p>{loadingError}<p/> */}
      <h1>Users:</h1>
      <ul>
        {users.length > 0 ? (
          users.map((thisUser: User) => (
            <UserDisplay user={thisUser} key={thisUser.id} />
          ))
        ) : (
          <Loading />
        )}
      </ul>
    </div>
  );
};

export default App;
