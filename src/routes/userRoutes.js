const express = require("express");

const userRoutes = (userController) => {
  const router = express.Router();

  router.post("/users", (req, res) => userController.createUser(req, res));
  router.get("/users", (req, res) => userController.getUsers(req, res));

  return router;
};

module.exports = userRoutes;
