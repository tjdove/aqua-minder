export default function TankDisplay(tank) {
  return (
    <div>
      <div>
        Tank:{tank.id} : {tank.name}
      </div>
      <div>
        {tank.size} : {tank.description}
      </div>
    </div>
  );
}
