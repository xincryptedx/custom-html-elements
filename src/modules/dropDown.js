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

  /* Drop down properties
  --General values--
   placeholder text
   menu data which will be [value, value, value] or {category: [value], category: [value]}

  --Function Variations--
   autoSuggest bool
   autoComplete bool
   userSetValues bool
   required bool

  --Style Variations--
   detatched bool
   style options enum
   style
    */

  // Construct the element and children
  // Create base html element that will contain everything
  // label text
  // container
  //   arrow
  //   selected option text/placeholder text
  // dropdown menu
  //   scroll bar
  //   **menu items, cagetgories, and dividers created from menu data property**
  // feedback text

  // Style the element and children

  // Return the element and methods for altering it
})();

export default dropDown;
