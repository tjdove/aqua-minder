import express from "express";
//Import the genereates type from the schema models
import { User } from "@prisma/client";
//import { getUser, getUsers, createUser } from "./database.js";

import {
  getUser,
  getUsers,
  createUser,
  removeUser,
  updateUser,
} from "./database";

const app = express();
app.use(express.json());

// Get All
app.get("/api/users", async (req, res) => {
  const users = await getUsers();
  res.send(users);
});

// Get one by ID
app.get("/api/users/:id", async (req, res) => {
  const id: number = Number(req.params.id);
  console.log("/users/:id:  " + id);
  const user = await getUser(id);
  res.send(user);
});

// Create
app.post("/api/user", async (req, res) => {
  const user = req.body;
  const createdUser = await createUser(user);
  res.status(201).json(createdUser);
});

// Update
app.put("/api/users/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  const updatedUser = await updateUser(id, data);
  res.status(200).json(updatedUser);
});

// Delete
app.delete("/api/users/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await removeUser(id);
  res.status(204).send();
});

app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(8080, () => console.log("Example app listening on port 8080"));

// Better error handling. Gott Learn this:
// const id = 1;

// try {
//   await removeUser(id);
// } catch (error) {
//   if (error instanceof PrismaClientKnownRequestError) {
//     switch (error.code) {
//       case 'P2025': // Record not found
//         console.log('The User record to be removed does not exist.');
//         break;
//       default:
//         console.log('An unexpected error occurred while trying to remove the User record.');
//         break;
//     }
//   } else {
//     console.log('An unexpected error occurred while trying to remove the User record.');
//   }
// }
