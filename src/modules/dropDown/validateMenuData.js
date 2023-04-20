// This will return true if dataToValidate is an array containing at least one string
const validateMenuData = (defaultData, passedData) => {
  if (!Array.isArray(passedData)) return defaultData;

  const validatedData = passedData;

  // Check each entry and remove non strings
  for (let i = 0; i < validatedData.length; i += 1) {
    if (typeof validatedData[i] !== "string") {
      validatedData.pop(validatedData[i]);
      i = -1;
    }
  }

  // If array is now empty return false
  if (validatedData.length === 0) return defaultData;

  return validatedData;
};

export default validateMenuData;
