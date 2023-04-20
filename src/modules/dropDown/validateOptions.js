const validateOptions = (defaultOptions, passedOptions) => {
  let validatedOptions;
  if (!passedOptions || typeof passedOptions !== "object") {
    validatedOptions = {};
  } else validatedOptions = passedOptions;

  // Class List Validation
  const validateClasslist = (classesToValidate) => {
    if (!classesToValidate) return false;

    // If truthy classList property is passed but it's not an array or string
    if (
      classesToValidate &&
      !Array.isArray(classesToValidate) &&
      typeof classesToValidate !== "string"
    ) {
      return false;
    }

    // If an array but doesn't contain a string return false
    if (
      Array.isArray(classesToValidate) &&
      !classesToValidate.some((entry) => typeof entry === "string")
    ) {
      return false;
    }

    return true;
  };

  // Prefix Validation
  const validatePrefix = (prefixToValidate) => {
    if (!prefixToValidate) return false;

    if (prefixToValidate && typeof prefixToValidate !== "string") return false;

    return true;
  };

  // Iterate through validated options keys and validate them by setting their value to the default
  Object.keys(validatedOptions).forEach((key) => {
    if (key.endsWith("Classes")) {
      if (!validateClasslist(validatedOptions[key])) {
        validatedOptions[key] = defaultOptions[key];
      }
    }
    if (key.endsWith("Prefix")) {
      if (!validatePrefix(validatedOptions[key])) {
        validatedOptions[key] = defaultOptions[key];
      }
    }
  });

  const mergedOptions = { ...defaultOptions, ...validatedOptions };

  return mergedOptions;
};

export default validateOptions;
