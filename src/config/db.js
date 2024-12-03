// src/config/db.js
// MongoDB connection configuration supporting both Docker and Localhost

const { MongoClient } = require("mongodb");

// Determine if the app should use Docker or Localhost MongoDB
const isDocker = process.env.USE_DOCKER === "true";
const uri = isDocker
  ? process.env.MONGO_URI || "mongodb://mongo:27017/testdb" // Docker MongoDB
  : process.env.MONGO_URI || "mongodb://localhost:27017/testdb"; // Local MongoDB

const client = new MongoClient(uri);
let db;

/**
 * Connect to the MongoDB database.
 * Automatically selects Docker or Localhost based on the environment variable.
 */
const connectToDB = async () => {
  if (!db) {
    await client.connect();
    db = client.db("testdb");
    console.log(`Connected to MongoDB at ${uri}`);
  }
  return db;
};

module.exports = connectToDB;
