// Drop database tables:
const dropPropertyTypes = 'DROP TABLE property_types;';
const dropUsers = 'DROP TABLE users;';
const dropProperties = 'DROP TABLE properties;';
const dropReviews = 'DROP TABLE reviews;';

// Create database tables queries:
const createPropertyTypes = `CREATE TABLE property_types (
property_type VARCHAR NOT NULL PRIMARY KEY, 
description TEXT NOT NULL
);`;

const createUsers = `CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
first_name VARCHAR NOT NULL,
surname VARCHAR NOT NULL,
email VARCHAR NOT NULL,
phone_number VARCHAR,
is_host BOOLEAN NOT NULL,
avatar VARCHAR,
created_at TIMESTAMP default NOW()
);`;

const createProperties = `CREATE TABLE properties (
property_id SERIAL PRIMARY KEY,
host_id INT NOT NULL,
name VARCHAR NOT NULL,
location VARCHAR NOT NULL,
property_type VARCHAR NOT NULL REFERENCES property_types(property_type),
price_per_night decimal NOT NULL,
description TEXT
);`;

const createReviews = `CREATE TABLE reviews (
review_id SERIAL PRIMARY KEY,
property_id INT NOT NULL REFERENCES properties(property_id),
guest_id INT NOT NULL REFERENCES users(user_id),
rating INT NOT NULL,
comment TEXT,
created_at TIMESTAMP default NOW()
);`;

// Insert database data queries:

// Export database queries:
module.exports = {
  dropPropertyTypes,
  dropUsers,
  dropProperties,
  dropReviews,
  createPropertyTypes,
  createUsers,
  createProperties,
  createReviews,
};
