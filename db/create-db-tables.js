// Import database connections:
const db = require('./db-connections');

// Import table queries:
const { propertyTypes, users, properties, reviews } = require('./db-queries');

// Database table creation:
const createDbTables = async function () {
  // Create property types table:
  await db.query(propertyTypes);

  // Create users table:
  // Create properties table:
  // Create reviews table:
};

// Export create tables function:
module.exports = createDbTables;

// Tables:
// 1. Property types
// 2. Users
// 3. Properties
// 4. Reviews
