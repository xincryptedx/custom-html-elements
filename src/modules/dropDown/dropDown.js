const dropDown = (passedOptions) => {
  // Options validation
  let validatedOptions;
  if (!passedOptions || typeof passedOptions !== "object") {
    validatedOptions = {};
  } else validatedOptions = passedOptions;

  const defaultOptions = {
    containerClasses: "drop-down-container",
  };

  const mergedOptions = { ...defaultOptions, ...validatedOptions };

  /* Drop down properties
  --General values--
   placeholder text
   menu data which will be [value, value, value] or {category: [value], category: [value]}

  --Functional Variations--
   autoSuggest bool
   autoComplete bool
   userSetValues bool
   required bool

  --Style Variations--
   detatched bool
   style options enum
   style
    */

  // Helper methods
  const addClasses = (classes, element) => {
    const classesToAdd = [];
    if (typeof classes === "string") {
      classesToAdd.push(classes);
    } else if (Array.isArray(classes)) {
      classes.forEach((cls) => {
        if (typeof cls === "string") {
          classesToAdd.push(cls);
        }
      });
    }

    if (classesToAdd.length > 0) {
      element.classList.add(...classesToAdd);
    }
  };

  // Create the base parent element
  const element = document.createElement("div");

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

  // Methods for altering after creation

  // Return the element and methods for altering it
  return {
    element,
  };
};

export default dropDown;
