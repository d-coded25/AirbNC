// Import database connections:
const db = require('./db-connections');

// Import create database tables function:
const createDbTables = require('./create-db-tables');

// Import insert database data function:
const insertDbData = require('./insert-db-data');

// Import database data:
const data = require('./data/test/index');

// Database seed function:
const seedDatabase = async function (data) {
  // Invoke createDbTables function ????
  // Invoke insertDbData function with passed in data ????
};

// Export seed database function:
module.exports = seedDatabase;

// 1. Table deletion
// 2. Table creation
// 3. Table insertion
