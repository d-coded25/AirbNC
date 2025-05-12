// User ID Lookup:
const createUsersIdLookUp = function (usersData) {
  const usersLookUp = {};

  usersData.rows.forEach((user) => {
    const fullName = `${user.first_name} ${user.surname}`;
    usersLookUp[fullName] = user.user_id;
  });

  return usersLookUp;
};

// Property ID Lookup:
const createPropertiesIdLookUp = function (propertiesData) {
  const propertiesIdLookUp = {};

  propertiesData.rows.forEach((property) => {
    propertiesIdLookUp[property.name] = property.property_id;
  });

  return propertiesIdLookUp;
};

// Property types formatter:
const formatPropertyTypes = function (propertyTypesData) {
  const formattedPropertyTypes = propertyTypesData.map((property) => {
    return [property.property_type, property.description];
  });
  return formattedPropertyTypes;
};

// Users formatter:
const formatUsers = function (usersData) {
  const formattedUsers = usersData.map((user) => {
    return [
      user.first_name,
      user.surname,
      user.email,
      user.phone_number,
      user.role === 'host' ? true : false,
      user.avatar,
    ];
  });

  return formattedUsers;
};

// Properties formatter:
const formatProperties = function (propertiesData, usersData) {
  const usersIdLookUp = createUsersIdLookUp(usersData);

  const formattedProperties = propertiesData.map((property) => {
    return [
      usersIdLookUp[property.host_name],
      property.name,
      property.location,
      property.property_type,
      property.price_per_night,
      property.description,
    ];
  });

  return formattedProperties;
};

// Reviews formatter:
const formatReviews = function (reviewsData, usersData, propertiesData) {
  const usersIdLookUp = createUsersIdLookUp(usersData);
  const propertiesIdLookUp = createPropertiesIdLookUp(propertiesData);

  const formattedReviews = reviewsData.map((review) => {
    return [
      propertiesIdLookUp[review.property_name],
      usersIdLookUp[review.guest_name],
      review.rating,
      review.comment,
    ];
  });

  return formattedReviews;
};

// Export format data function:
module.exports = {
  formatPropertyTypes,
  formatUsers,
  formatProperties,
  formatReviews,
  createUsersIdLookUp,
  createPropertiesIdLookUp,
};
