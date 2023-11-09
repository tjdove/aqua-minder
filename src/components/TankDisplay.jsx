export default function TankDisplay(tank) {
  return (
    <li>
      <div>
        Tank:{tank.id} : {tank.name}
      </div>
      <div>
        {tank.size} : {tank.description}
      </div>
    </li>
  );
}
