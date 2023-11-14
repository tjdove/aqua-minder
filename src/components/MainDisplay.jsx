import { useLoaderData } from "react-router-dom";
import UserDisplay from "./UserDisplay";
import TankDisplay from "./TankDisplay";
import MeasureDisplay from "./MeasureDisplay";

export default function MainDisplay() {
  //const [users, setUsers] = useState([]);
  const user = useLoaderData();

  console.log("MainDisplay");
  console.log(user);

  return (
    <div className="">
      <h1>Management:</h1>
      <div>
        <UserDisplay {...user} key={user.id} />
      </div>
      // Show Tanks
      <div className="px-10">
        <h1>Tanks:</h1>
        <div>
          {user.tanks.map((tank) => (
            <div className="px-5">
              <TankDisplay {...tank} />
              <h1>Measures:</h1>
              {tank.measures.map((measure) => (
                <MeasureDisplay {...measure} />
              ))}
            </div>
          ))}
        </div>
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
