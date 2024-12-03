// src/repositories/userRepo.js
// Repository layer for database operations. This abstracts MongoDB interactions.

class UserRepository {
  constructor(db) {
    this.collection = db.collection("users"); // Collection name is 'users'
  }

  /**
   * Create a new user in the database.
   * @param {Object} user - The user object to insert.
   * @returns {ObjectId} The inserted user's ID.
   */
  async createUser(user) {
    const result = await this.collection.insertOne(user);
    return result.insertedId;
  }

  /**
   * Retrieve all users from the database.
   * @returns {Array} List of users.
   */
  async getAllUsers() {
    return await this.collection.find({}).toArray();
  }

  /**
   * Find a user by their ID.
   * @param {ObjectId} id - The ID of the user.
   * @returns {Object|null} The user object, or null if not found.
   */
  async getUserById(id) {
    return await this.collection.findOne({ _id: id });
  }

  /**
   * Update a user's details.
   * @param {Object} filter - Query to match the user.
   * @param {Object} update - Fields to update.
   * @returns {Object} The update result.
   */
  async updateUser(filter, update) {
    return await this.collection.updateOne(filter, { $set: update });
  }

  /**
   * Delete a user from the database.
   * @param {Object} filter - Query to match the user.
   * @returns {Object} The delete result.
   */
  async deleteUser(filter) {
    return await this.collection.deleteOne(filter);
  }
}

module.exports = UserRepository;
