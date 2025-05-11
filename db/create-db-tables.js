// Import database connections:
const db = require('./db-connections');

// Import queries:
const {
  dropPropertyTypesQuery,
  dropUsersQuery,
  dropPropertiesQuery,
  dropReviewsQuery,
  createPropertyTypesQuery,
  createUsersQuery,
  createPropertiesQuery,
  createReviewsQuery,
} = require('./db-queries');

// Database table creation:
const createDbTables = async function () {
  try {
    await db.query(dropReviewsQuery);
    await db.query(dropPropertiesQuery);
    await db.query(dropPropertyTypesQuery);
    await db.query(dropUsersQuery);

    await db.query(createPropertyTypesQuery);
    await db.query(createUsersQuery);
    await db.query(createPropertiesQuery);
    await db.query(createReviewsQuery);

    console.log('Resolved Create Tables!');
  } catch (err) {
    console.log('Rejected Create Tables:', err.message);
  }
};

// Export create tables function:
module.exports = createDbTables;
