// src/controllers/userController.js
// Controller layer to handle incoming HTTP requests and delegate to the service layer.

const logger = require("../logger");

class UserController {
  constructor(userService) {
    this.userService = userService; // Inject the service dependency
  }

  /**
   * Handle a request to create a new user.
   * @param {Object} req - The HTTP request.
   * @param {Object} res - The HTTP response.
   */
  async createUser(req, res) {
    try {
      const user = req.body;
      const id = await this.userService.createUser(user);
      logger.info("User created", { id, user });
      res.status(201).json({ id });
    } catch (error) {
      logger.error("Error creating user", { error: error.message });
      res.status(500).json({ error: error.message });
    }
  }

  /**
   * Handle a request to retrieve all users.
   * @param {Object} req - The HTTP request.
   * @param {Object} res - The HTTP response.
   */
  async getUsers(req, res) {
    try {
      const users = await this.userService.getUsers();
      logger.info("Users fetched", { count: users.length });
      res.status(200).json(users);
    } catch (error) {
      logger.error("Error fetching users", { error: error.message });
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = UserController;
