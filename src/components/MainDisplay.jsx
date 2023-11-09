import { useLoaderData } from "react-router-dom";
import UserDisplay from "./UserDisplay";
import TankDisplay from "./TankDisplay";

export default function MainDisplay() {
  //const [users, setUsers] = useState([]);
  const user = useLoaderData();

  console.log("MainDisplay");
  console.log(user);

  return (
    <div className="">
      <h1>Management:</h1>
      <ul>
        <UserDisplay {...user} key={user.id} />
      </ul>
      // Show Tanks
      <div className="px-10">
        <h1>Tanks:</h1>
        <ul>
          {user.tanks.map((tank) => (
            <TankDisplay {...tank} />
          ))}
        </ul>
      </div>
      <div className="px-10">
        <h1>Measures:</h1>
        {/*         <ul>
          {tank.measure.map((measure) => (
            <MeasureDisplay {...measure} />
          ))}
        </ul> */}
      </div>
    </div>
  );
}

export const mainDisplayLoader = async () => {
  const userID = 1;
  console.log("mainDisplayLoader");
  const res = await fetch(`/api/users/` + userID);
  console.log("mainDisplayLoader: " + JSON.stringify(res));
  console.log(res);

  if (!res.ok) {
    throw new Error("Could not fetch User" + userID);
  }
  return res.json();
};

//Loader function
/* export const mainDisplayLoader = async () => {
  console.log("mainDisplayLoader");
  const res = await fetch(`/api/users`);
  console.log("mainDisplayLoader: " + JSON.stringify(res));
  console.log(res);

  if (!res.ok) {
    throw new Error("Could not fetch the Users");
  }
  return res.json();
}; */
