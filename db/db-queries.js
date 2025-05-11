// Drop database tables:
const dropPropertyTypesQuery = 'DROP TABLE property_types;';
const dropUsersQuery = 'DROP TABLE users;';
const dropPropertiesQuery = 'DROP TABLE properties;';
const dropReviewsQuery = 'DROP TABLE reviews;';

// Create database tables queries:
const createPropertyTypesQuery = `CREATE TABLE property_types (
property_type VARCHAR NOT NULL PRIMARY KEY, 
description TEXT NOT NULL
);`;

const createUsersQuery = `CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
first_name VARCHAR NOT NULL,
surname VARCHAR NOT NULL,
email VARCHAR NOT NULL,
phone_number VARCHAR,
is_host BOOLEAN NOT NULL,
avatar VARCHAR,
created_at TIMESTAMP default NOW()
);`;

const createPropertiesQuery = `CREATE TABLE properties (
property_id SERIAL PRIMARY KEY,
host_id INT NOT NULL,
name VARCHAR NOT NULL,
location VARCHAR NOT NULL,
property_type VARCHAR NOT NULL REFERENCES property_types(property_type),
price_per_night decimal NOT NULL,
description TEXT
);`;

const createReviewsQuery = `CREATE TABLE reviews (
review_id SERIAL PRIMARY KEY,
property_id INT NOT NULL REFERENCES properties(property_id),
guest_id INT NOT NULL REFERENCES users(user_id),
rating INT NOT NULL,
comment TEXT,
created_at TIMESTAMP default NOW()
);`;

// Insert database data queries:
const insertPropertyTypesQuery =
  'INSERT INTO property_types (property_type, description) VALUES %L RETURNING *;';
const insertUsersQuery =
  'INSERT INTO users (first_name, surname, email, phone_number, is_host, avatar) VALUES %L RETURNING *;';
const insertPropertiesQuery =
  'INSERT INTO properties (host_id, name, location, property_type, price_per_night, description) VALUES %L RETURNING *;';
const insertReviewsQuery =
  'INSERT INTO reviews (property_id, guest_id, rating, comment) VALUES %L RETURNING *;';

// Export database queries:
module.exports = {
  dropPropertyTypesQuery,
  dropUsersQuery,
  dropPropertiesQuery,
  dropReviewsQuery,
  createPropertyTypesQuery,
  createUsersQuery,
  createPropertiesQuery,
  createReviewsQuery,
  insertPropertyTypesQuery,
  insertUsersQuery,
  insertPropertiesQuery,
  insertReviewsQuery,
};
