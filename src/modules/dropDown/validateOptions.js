const validateOptions = (defaultOptions, passedOptions) => {
  let validatedOptions;
  if (!passedOptions || typeof passedOptions !== "object") {
    validatedOptions = {};
  } else validatedOptions = passedOptions;

  // Class list validation
  const validateClasslist = () => {
    if (
      // If a parentClasses property is passed but it's not an array or string
      validatedOptions.parentClasses &&
      !Array.isArray(validatedOptions.parentClasses) &&
      typeof validatedOptions.parentClasses !== "string"
    ) {
      delete validateOptions.parentClasses;
    }
  };

  const mergedOptions = { ...defaultOptions, ...validatedOptions };

  return mergedOptions;
};

export default validateOptions;
