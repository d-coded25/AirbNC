// Property types formatter:
const formatPropertyTypes = function (propertyTypesData) {
  const formattedPropertyTypes = propertyTypesData.map((property) => {
    return [property.property_type, property.description];
  });
  return formattedPropertyTypes;
};
