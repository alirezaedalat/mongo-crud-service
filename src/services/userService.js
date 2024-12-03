// src/services/userService.js
// Service layer to handle business logic and validation.

const Joi = require("joi");

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository; // Inject the repository dependency
  }

  /**
   * Validate and create a new user.
   * @param {Object} user - User details.
   * @returns {ObjectId} The inserted user's ID.
   * @throws {Error} Validation error if user data is invalid.
   */
  async createUser(user) {
    const schema = Joi.object({
      name: Joi.string().min(3).required(),
      email: Joi.string().email().required(),
      age: Joi.number().min(0).required(),
    });

    const { error } = schema.validate(user);
    if (error) throw new Error(error.details[0].message);

    return await this.userRepository.createUser(user);
  }

  /**
   * Retrieve all users.
   * @returns {Array} List of users.
   */
  async getUsers() {
    return await this.userRepository.getAllUsers();
  }

  /**
   * Update a user's details.
   * @param {Object} filter - Filter to identify the user.
   * @param {Object} update - Fields to update.
   * @returns {Object} The update result.
   */
  async updateUser(filter, update) {
    return await this.userRepository.updateUser(filter, update);
  }

  /**
   * Delete a user.
   * @param {Object} filter - Filter to identify the user.
   * @returns {Object} The delete result.
   */
  async deleteUser(filter) {
    return await this.userRepository.deleteUser(filter);
  }
}

module.exports = UserService;
