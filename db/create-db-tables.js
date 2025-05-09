// Import database connections:
const db = require('./db-connections');

// Import queries:
const {
  dropPropertyTypes,
  dropUsers,
  dropProperties,
  dropReviews,
  createPropertyTypes,
  createUsers,
  createProperties,
  createReviews,
} = require('./db-queries');

// Database table creation:
const createDbTables = async function () {
  try {
    await db.query(dropReviews);
    await db.query(dropProperties);
    await db.query(dropPropertyTypes);
    await db.query(dropUsers);

    await db.query(createPropertyTypes);
    await db.query(createUsers);
    await db.query(createProperties);
    await db.query(createReviews);

    console.log('Resolved!');
  } catch (err) {
    console.log('Rejected:', err.message);
  }

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
