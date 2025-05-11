// Import create database tables function:
const createDbTables = require('./create-db-tables');

// Import insert database data function:
const insertDbData = require('./insert-db-data');

// Database seed function:
const seedDatabase = async function (data) {
  await createDbTables();
  await insertDbData(data);
};

// Export seed database function:
module.exports = seedDatabase;
