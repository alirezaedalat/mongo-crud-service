// src/index.js
// Entry point for the application. Loads environment variables and starts the server.

require("dotenv").config(); // Load environment variables from .env
const express = require("express");
const connectToDB = require("./config/db");
const UserRepository = require("./repositories/userRepo");
const UserService = require("./services/userService");
const UserController = require("./controllers/userController");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

(async () => {
  const db = await connectToDB();
  const userRepository = new UserRepository(db);
  const userService = new UserService(userRepository);
  const userController = new UserController(userService);

  app.use("/api", userRoutes(userController));

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})();
