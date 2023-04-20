// This will return true if dataToValidate is an array containing at least one string
const validateMenuData = (dataToValidate) => {
  if (!Array.isArray(dataToValidate)) return false;

  const validatedData = dataToValidate;

  // Check each entry and remove non strings
  for (let i = 0; i < validatedData.length; i += 1) {
    if (typeof validatedData[i] !== "string") {
      validatedData[i].pop();
    }
  }

  // If array is now empty return false
  if (validatedData.length === 0) return false;

  return true;
};

export default validateMenuData;
