/**
 * dbCleaner.js
 * This script cleans the database by deleting all data from the user and address tables.
 */

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    // Delete all users
    await prisma.user.deleteMany({});
    console.log("All users deleted.");

    // Delete all addresses
    await prisma.address.deleteMany({});
    console.log("All addresses deleted.");

    console.log("Database cleaned successfully.");
  } catch (error) {
    console.error("Error cleaning database:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
