// Database seed function:
const seedDatabase = require('./db-seed');

// Import database data:
const data = require('./data/test/index');

// Database seed function invocation:
seedDatabase(data);
