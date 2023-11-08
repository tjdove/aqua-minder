import { User } from "@prisma/client";

export default function UserDisplay(user) {
  return (
    <li>
      <div>
        User:{user.firstName} {user.lastName}
      </div>
      <div>{user.email}</div>
      <div>
        {user.addr1} {user.addr2}
        {user.state} {user.zip}
      </div>
    </li>
  );
} // <li key={user.id}>{user.name}</li>
