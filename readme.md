# postgres-prisma-dem

## Steps to run the project

### Clone the repository

```bash
git clone https://github.com/irahuldutta02/postgres-prisma-demo
cd postgres-prisma-demo
```

### install the dependencies and start the server

```bash
npm install
npm run dev
```

### Create a .env file in the root directory and add the following content

```
DATABASE_URL="postgresql://postgres:password@localhost:5432/postgresPrismaDemoDb"
PORT=3000
```

### Set up the database

```bash
npx prisma db push
```

