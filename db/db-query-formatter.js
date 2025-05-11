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

// Export format data function:
module.exports = {
  formatPropertyTypes,
  formatUsers,
};
