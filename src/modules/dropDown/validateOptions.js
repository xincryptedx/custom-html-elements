const validateOptions = (defaultOptions, passedOptions) => {
  let validatedOptions;
  if (!passedOptions || typeof passedOptions !== "object") {
    validatedOptions = {};
  } else validatedOptions = passedOptions;

  // Class list validation
  const validateClasslist = (classesToValidate) => {
    if (!classesToValidate) return false;

    if (
      // If truthy classList property is passed but it's not an array or string
      classesToValidate &&
      !Array.isArray(classesToValidate) &&
      typeof classesToValidate !== "string"
    ) {
      return false;
    }

    return true;
  };

  Object.keys(validatedOptions).forEach((key) => {
    if (key.endsWith("Classes")) {
      if (!validateClasslist(validatedOptions[key])) {
        validatedOptions[key] = defaultOptions[key];
        console.log("Replaced invalid value with default value");
      }
    }
  });

  const mergedOptions = { ...defaultOptions, ...validatedOptions };

  return mergedOptions;
};

export default validateOptions;
