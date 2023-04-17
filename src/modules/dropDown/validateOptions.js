const validateOptions = (defaultOptions, passedOptions) => {
  let validatedOptions;
  if (!passedOptions || typeof passedOptions !== "object") {
    validatedOptions = {};
  } else validatedOptions = passedOptions;

  // Class list validation
  if (
    !(
      validatedOptions.parentClasses &&
      (Array.isArray(validatedOptions.parentClasses) ||
        typeof validatedOptions.parentClasses === "string")
    )
  ) {
    delete validateOptions.parentClasses;
  }

  const mergedOptions = { ...defaultOptions, ...validatedOptions };

  return mergedOptions;
};

export default validateOptions;
