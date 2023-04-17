const dropDown = ((passedOptions) => {
  // Options validation
  let validatedOptions;
  if (!passedOptions || typeof passedOptions !== "object") {
    validatedOptions = {};
  } else validatedOptions = passedOptions;

  const defaultOptions = {
    param1: "a value",
  };

  const mergedOptions = { ...defaultOptions, ...validatedOptions };

  // Drop down references

  // Drop down properties

  // Construct the element and children

  // Style the element and children

  // Return the element and methods for altering it
})();

export default dropDown;
