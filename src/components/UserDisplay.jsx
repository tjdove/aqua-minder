export default function UserDisplay(thisUser) {
  return (
    <div>
      <div>
        User:{thisUser.id}:{thisUser.lastName} {thisUser.lastName}
      </div>
      <div>Email:{thisUser.email}</div>
      <div>
        Address: {thisUser.addr1} {thisUser.addr2}
        {thisUser.state} {thisUser.zip}
      </div>
    </div>
  );
}
