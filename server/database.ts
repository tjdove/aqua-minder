//Execute: npx tsx ./server/database.ts
//   - Don't use ts-node
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUsers() {
  const rows = await prisma.user.findMany(); //   query("SELECT * FROM user");
  return rows;
}

export async function getUser(id: number) {
  const rows = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  return rows;
}

export async function createUser(user: User) {
  const tank = await prisma.tank.create({
    User: {
      name: "Saltwater",
      picId: 1,
      description: "Salt water",
      size: "40 gallon",
      //measures: {

    }
}

// async function main() {
//   const user = await prisma.user.create({
//     data: {
//       firstName: "John",
//       lastName: "Doe",
//       addr1: "123 Main St",
//       addr2: "Apt 4B",
//       state: "CA",
//       zip: "90210",
//       // Create a tank for this user
//       tanks: {
//         create: {
//           name: "Tank A",
//           picId: 1,
//           description: "First tank",
//           size: "Large",
//           // Create a measure for this tank
//           measures: {
//             create: {
//               type: "Temperature",
//               sample: 25,
//             },
//           },
//         },
//       },
//     },
//   });

// const tank = await prisma.tank.create({
//   data: {
//     name: "Saltwater",
//     picId: 1,
//     description: "Salt water",
//     size: "40 gallon",
//     //measures: {

//   }
//   console.log(user);
// }

//const user = await prisma.user.create({
//   data: {
//     email: "elsa@prisma.io",
//     name: "Elsa Prisma",
//   },
// });

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
