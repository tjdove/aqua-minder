import express from "express";

//import { getUser, getUsers, createUser } from "./database.js";

import { getUsers } from "./database";

const app = express();
app.use(express.json());

app.get("/api/users", async (req, res) => {
  const users = await getUsers();
  res.send(users);
});

// app.get("/api/users/:id", async (req, res) => {
//   const id = req.params.id;
//   console.log("/users/:id:  " + id);
//   const user = await getUser(id);
//   res.send(user);
// });

// app.post("/api/users", async (req, res) => {
//   const { first_name, last_name, addr1, addr2, city, state, zip } = req.body;
//   console.log("/users/:POST:  " + JSON.stringify(req.body));
//   const user = await createUser(
//     first_name,
//     last_name,
//     addr1,
//     addr2,
//     city,
//     state,
//     zip
//   );
//   res.send(user);
// });

app.use((err, req, res, next) => {
  //console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(8080, () => console.log("Example app listening on port 8080"));
