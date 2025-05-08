// Import node-postgres:
const pg = require('pg');

// Import dotenv:
require('dotenv').config();

// Extract pool class:
const { Pool } = pg;

// Connections instance object and connections:
const pool = new Pool();

// Export connections:
module.exports = pool;
