import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Insert Users
  const user1 = await prisma.user.create({
    data: {
      firstName: "Jack",
      lastName: "Done",
      addr1: "123 Main St",
      addr2: "Apt 4",
      state: "NY",
      zip: "10001",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      firstName: "Jill",
      lastName: "Undone",
      addr1: "456 Elm St",
      addr2: "Suite 5",
      state: "CA",
      zip: "90001",
    },
  });

  // Insert Tanks for each User
  const tank1 = await prisma.tank.create({
    data: {
      name: "Aquarium A",
      picId: 1,
      description: "Freshwater aquarium",
      size: "Medium",
      userId: user1.id,
    },
  });

  const tank2 = await prisma.tank.create({
    data: {
      name: "Aquarium B",
      picId: 2,
      description: "Saltwater aquarium",
      size: "Large",
      userId: user2.id,
    },
  });

  // Insert Measures for each Tank
  await prisma.measure.createMany({
    data: [
      { type: "pH", sample: 7, tankId: tank1.id },
      { type: "Temperature", sample: 24, tankId: tank1.id },
      { type: "pH", sample: 8, tankId: tank2.id },
      { type: "Temperature", sample: 26, tankId: tank2.id },
    ],
  });

  console.log("Test data inserted successfully.");
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
