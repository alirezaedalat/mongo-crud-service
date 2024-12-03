// src/logger.js
// Logging setup using winston for structured and file-based logging.

const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/app.log" }), // Log to file
  ],
});

module.exports = logger;
