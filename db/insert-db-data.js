// Import database connections:
const db = require('./db-connections');

// Import data queries:
// const {} = require('./db-queries');

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
};

// Export insert data function:
module.exports = insertDbData;
