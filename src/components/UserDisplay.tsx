import { User } from "@prisma/client";

export default function UserDisplay({ user }: { user: User }) {
  return (
    <li>
      <div>
        User:{user.firstName} {user.lastName}
      </div>
      <div>{user.addr1}</div>
      <div>{user.addr2}</div>
      <div>{user.state}</div>
      <div>{user.zip}</div>
    </li>
  );
} // <li key={user.id}>{user.name}</li>

// import React from "react";
// import { User } from "@prisma/client";

// export const UserDisplay: React.FC<User> = ({ user }: { user: User }) => {
//   return <div>User:{user.firstName}</div>;
// };
