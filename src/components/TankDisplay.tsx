import { Tank } from "@prisma/client";

export default function TankDisplay({ tank }: { tank: Tank }) {
  return (
    <li>
      <div>
        Tank:{tank.name} - {tank.id}
      </div>
      <div>
        {tank.size} : {tank.description}
      </div>
    </li>
  );
} // <li key={user.id}>{user.name}</li>
