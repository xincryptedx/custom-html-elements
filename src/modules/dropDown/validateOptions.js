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

  if (!validateClasslist(validatedOptions.parentClasses)) {
    delete validatedOptions.parentClasses;
  }

  const mergedOptions = { ...defaultOptions, ...validatedOptions };

  return mergedOptions;
};

export default validateOptions;
