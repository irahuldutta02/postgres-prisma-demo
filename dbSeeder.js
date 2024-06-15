/** 
 * dbSeeder.js
 * This script seeds the database with demo data.
 */

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const addresses = [];
  const users = [];

  const addressData = [
    {
      street: "12 MG Road",
      city: "Bangalore",
      state: "Karnataka",
      type: "HOME",
      zip: "560001",
    },
    {
      street: "45 FC Road",
      city: "Pune",
      state: "Maharashtra",
      type: "OFFICE",
      zip: "411016",
    },
    {
      street: "78 Linking Road",
      city: "Mumbai",
      state: "Maharashtra",
      type: "HOME",
      zip: "400050",
    },
    {
      street: "34 Park Street",
      city: "Kolkata",
      state: "West Bengal",
      type: "OFFICE",
      zip: "700016",
    },
    {
      street: "90 Anna Salai",
      city: "Chennai",
      state: "Tamil Nadu",
      type: "HOME",
      zip: "600002",
    },
    {
      street: "56 Sector 18",
      city: "Noida",
      state: "Uttar Pradesh",
      type: "OFFICE",
      zip: "201301",
    },
    {
      street: "23 Janpath",
      city: "Delhi",
      state: "Delhi",
      type: "HOME",
      zip: "110001",
    },
    {
      street: "67 MG Road",
      city: "Hyderabad",
      state: "Telangana",
      type: "OFFICE",
      zip: "500003",
    },
    {
      street: "89 Brigade Road",
      city: "Bangalore",
      state: "Karnataka",
      type: "HOME",
      zip: "560025",
    },
    {
      street: "100 Banjara Hills",
      city: "Hyderabad",
      state: "Telangana",
      type: "OFFICE",
      zip: "500034",
    },
  ];

  const userData = [
    { name: "Amit Sharma", email: "amit.sharma@example.com" },
    { name: "Priya Singh", email: "priya.singh@example.com" },
    { name: "Ravi Kumar", email: "ravi.kumar@example.com" },
    { name: "Sita Verma", email: "sita.verma@example.com" },
    { name: "Vijay Patel", email: "vijay.patel@example.com" },
    { name: "Anjali Mehta", email: "anjali.mehta@example.com" },
    { name: "Rahul Gupta", email: "rahul.gupta@example.com" },
    { name: "Sunita Rao", email: "sunita.rao@example.com" },
    { name: "Karan Joshi", email: "karan.joshi@example.com" },
    { name: "Nidhi Desai", email: "nidhi.desai@example.com" },
  ];

  for (let i = 0; i < 10; i++) {
    const address = await prisma.address.create({
      data: addressData[i],
    });
    addresses.push(address);

    const user = await prisma.user.create({
      data: {
        ...userData[i],
        addressId: address.id,
      },
    });
    users.push(user);
  }

  console.log("Demo data added successfully:", { users, addresses });
}

main()
  .catch((e) => {
    console.error("Error adding demo data:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
