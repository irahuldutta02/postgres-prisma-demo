// addDemoData.js

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // Create an address
  const address = await prisma.address.create({
    data: {
      street: "123 Main St",
      city: "Cityville",
      state: "ST",
      type: "HOME",
      zip: "12345",
    },
  });

  // Create a user with the addressId
  const user = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john.doe@example.com",
      addressId: address.id,
    },
  });

  console.log("Demo data added successfully:", { user, address });
}

main()
  .catch((e) => {
    console.error("Error adding demo data:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
