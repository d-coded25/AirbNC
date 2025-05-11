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

// Lookups:
const createUsersIdLookUp = function (usersData) {
  const usersLookUp = {};

  usersData.rows.forEach((user) => {
    const fullName = `${user.first_name} ${user.surname}`;
    usersLookUp[fullName] = user.user_id;
  });

  return usersLookUp;
};

// Properties formatter:
const formatProperties = function (propertiesData, usersData) {
  const usersIdLookup = createUsersIdLookUp(usersData);

  const formattedProperties = propertiesData.map((property) => {
    return [
      usersIdLookup[property.host_name],
      property.name,
      property.location,
      property.property_type,
      property.price_per_night,
      property.description,
    ];
  });

  return formattedProperties;
};

// Export format data function:
module.exports = {
  formatPropertyTypes,
  formatUsers,
  formatProperties,
};
