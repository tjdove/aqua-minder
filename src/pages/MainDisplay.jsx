import { useLoaderData } from "react-router-dom";
import UserDisplay from "../components/UserDisplay";
import TankDisplay from "../components/TankDisplay";

export default function MainDisplay() {
  // const [users, setUsers] = useState([]);
  const users = useLoaderData();

  return (
    <div className="list-users">
      {/* <p>{loadingError}<p/> */}
      <h1>Users:</h1>
      <ul>
        {users.map((thisUser) => {
          <UserDisplay user={thisUser} key={thisUser.id} />;
          {
            thisUser.tanks.map((thisTank) => <TankDisplay user={thisTank} />);
          }
        })}
      </ul>
    </div>
  );
}

//Loader function
export const mainDisplayLoader = async () => {
  console.log("mainDisplayLoader");
  const res = await fetch(`/api/users`);
  console.log("mainDisplayLoader: " + res);

  if (!res.ok) {
    throw new Error("Could not fetch the careers");
  }
  return res.json();
};

// export default MainDisplay;
