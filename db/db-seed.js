// Import database connections:
const db = require('./db-connections');

// Import create database tables function:
const createDbTables = require('./create-db-tables');

// Import insert database data function:
const insertDbData = require('./insert-db-data');

// Database seed function:
const seedDatabase = async function (data) {
  createDbTables();
  // Invoke createDbTables function ????
  // Invoke insertDbData function with passed in data ????
};

// Export seed database function:
module.exports = seedDatabase;

// 1. Table deletion
// 2. Table creation
// 3. Table insertion
