const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Create a new user
app.post("/users", async (req, res) => {
  const { name, email, addressId } = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        addressId,
      },
    });

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating user" });
  }
});

// Update an existing user
app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, addressId } = req.body;
  try {
    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: {
        name,
        email,
        addressId,
      },
    });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "User could not be updated", data: error });
  }
});

// Delete a user
app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.delete({
      where: { id: Number(id) },
    });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "User could not be deleted", data: error });
  }
});

// Get all users
app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        address: true,
      },
    });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not fetch users", data: error });
  }
});

// Get a specific user by ID
app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
      include: {
        address: true,
      },
    });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not fetch user", data: error });
  }
});

// Create a new address
app.post("/addresses", async (req, res) => {
  const { street, city, state, zip, type, address1 } = req.body;
  try {
    const address = await prisma.address.create({
      data: {
        street,
        city,
        state,
        type,
        address1,
        zip,
      },
    });
    res.json(address);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Address could not be created", data: error });
  }
});

// Update an existing address
app.put("/addresses/:id", async (req, res) => {
  const { id } = req.params;
  const { street, city, state, zip, type, address1 } = req.body;
  try {
    const address = await prisma.address.update({
      where: { id: Number(id) },
      data: {
        street,
        city,
        state,
        zip,
        type,
        address1,
      },
    });
    res.json(address);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Address could not be updated", data: error });
  }
});

// Delete an address
app.delete("/addresses/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const address = await prisma.address.delete({
      where: { id: Number(id) },
    });
    res.json(address);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Address could not be deleted", data: error });
  }
});

// Get all addresses
app.get("/addresses", async (req, res) => {
  try {
    const addresses = await prisma.address.findMany();
    res.json(addresses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not fetch addresses", data: error });
  }
});

// Get a specific address by ID
app.get("/addresses/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const address = await prisma.address.findUnique({
      where: { id: Number(id) },
    });
    res.json(address);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not fetch address", data: error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
