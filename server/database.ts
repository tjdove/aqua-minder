//Execute: npx tsx ./server/database.ts
//   - Don't use ts-node
import { PrismaClient, User, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUsers() {
  const users = await prisma.user.findMany(); //   query("SELECT * FROM user");
  return users;
}

export async function getUser(id: number): Promise<User | null> {
  const theUser = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  return theUser;
}

export async function updateUser(
  id: number,
  data: Prisma.UserUpdateInput
): Promise<User> {
  const updatedUser = await prisma.user.update({
    where: {
      id: id,
    },
    data,
  });
  return updatedUser;
}

export async function createUser(user: Prisma.UserCreateInput) {
  try {
    const createdUer = await prisma.user.create({
      data: user,
    });
    return createdUer;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

export async function removeUser(id: number): Promise<void> {
  await prisma.user.delete({
    where: {
      id,
    },
  });
}

// interface CreateUserInput {
//   firstName: string;
//   lastName: string;
//   addr1: string;
//   addr2: string;
//   state: string;
//   zip: string;
//   tanks?: {
//     create?: Prisma.TankCreateWithoutUserInput[]; // Assuming you have a TankCreateWithoutUserInput type in your Prisma schema for tank creation.
//   };
// }

// async function createUser(data: User) {
//   try {
//     const user = await prisma.user.create({
//       data: {
//         firstName: data.firstName,
//         lastName: data.lastName,
//         addr1: data.addr1,
//         addr2: data.addr2,
//         state: data.state,
//         zip: data.zip,
//         // tanks: data.tanks,
//       },
//     });
//     return user;
//   } catch (error) {
//     console.error("Error creating user:", error);
//     throw error;
//   }
// }

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
