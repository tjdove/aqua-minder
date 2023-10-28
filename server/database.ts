//Execute: npx tsx ./server/database.ts
//   - Don't use ts-node
import { PrismaClient, User, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function testConnection() {
  try {
    await prisma.user.findFirst();
    console.log("Database connection successful");
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(error.code);
    }
    console.log("Database connection failed:", error);
    throw new Error();
  }
}
//getUsers: Nested 3 layers
export async function getUsers() {
  const users = await prisma.user.findMany({
    include: {
      tanks: {
        include: { measures: true },
      },
    },
  });
  return users;
}

export async function getUser(id: number): Promise<User | null> {
  const theUser = await prisma.user.findUnique({
    where: {
      id: id,
    },
    include: {
      tanks: true,
    },
  });
  return theUser;
}

// export async function getUserAuth(
//   username: string,
//   password: string
// ): Promise<User | null> {
//   const theUser = await prisma.user.findUnique({
//     where: {
//       username: username,
//       password: password,
//     },
//     include: {
//       roles: true,
//     },
//   });
//   return theUser;
// }

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
