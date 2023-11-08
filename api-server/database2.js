import mysql from "mysql2";

import "dotenv/config";

export const pool = mysql
  .createPool({
    host: process.env.DB_LOCAL_HOST,
    user: process.env.DB_LOCAL_USERNAME,
    password: process.env.DB_LOCAL_PASSWORD,
    database: process.env.DB_LOCAL_DATABASE,
  })
  .promise();

//Returns all users
export async function getUsers() {
  const [rows] = await pool.query("SELECT * FROM user");
  return rows;
}

//Returns one user
export async function getUser(id) {
  const [rows] = await pool.query("SELECT * FROM user where id = ?", [id]);
  return rows;
}

//Returns inserted ID
export async function createUser(
  first_name,
  last_name,
  addr1,
  addr2,
  city,
  state,
  zip
) {
  const [results] = await pool.query(
    `INSERT INTO user 
    (first_name, last_name, addr1, addr2, city, state, zip) 
    VALUES (?,?,?,?,?,?,?)`,
    [first_name, last_name, addr1, addr2, city, state, zip]
  );
  return results;
}

//Calls for testing purposes
/*const result = await createUser(
  "Tim",
  "Dove",
  "123 Beat St",
  "",
  "Cornelius",
  "NC",
  "28031"
);   */

//const users = await getUsers();
//const user = await getUser(1);

//console.log(result);
