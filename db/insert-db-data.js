// Import database connections:
const db = require('./db-connections');

// Import postgres format:
const format = require('pg-format');

// Import data queries:
const {
  insertPropertyTypesQuery,
  insertUsersQuery,
  insertPropertiesQuery,
  insertReviewsQuery,
} = require('./db-queries');
console.log();

// Import format data function:
const {
  formatPropertyTypes,
  formatUsers,
  formatProperties,
  formatReviews,
} = require('./db-query-formatter');

// Database insert data:
const insertDbData = async function (data) {
  const {
    bookingsData,
    favouritesData,
    imagesData,
    propertiesData,
    propertyTypesData,
    reviewsData,
    usersData,
  } = data;

  try {
    const propertyTypesResponse = await db.query(
      format(insertPropertyTypesQuery, formatPropertyTypes(propertyTypesData))
    );
    const usersResponse = await db.query(
      format(insertUsersQuery, formatUsers(usersData))
    );
    const propertiesResponse = await db.query(
      format(
        insertPropertiesQuery,
        formatProperties(propertiesData, usersResponse)
      )
    );
    const reviewsResponse = await db.query(
      format(
        insertReviewsQuery,
        formatReviews(reviewsData, usersResponse, propertiesResponse)
      )
    );

    // console.log('Property types response:', propertyTypesResponse.rows);
    // console.log('Users response:', usersResponse.rows);
    // console.log('Properties response:', propertiesResponse.rows);
    // console.log('Reviews response:', reviewsResponse.rows);

    console.log('Resolved Insert Data!');
  } catch (err) {
    console.log('Rejected Insert Data:', err.message);
  }
};

// Export insert data function:
module.exports = insertDbData;
