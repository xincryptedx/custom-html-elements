const dropDown = (passedOptions) => {
  // #region Options validation
  let validatedOptions;
  if (!passedOptions || typeof passedOptions !== "object") {
    validatedOptions = {};
  } else validatedOptions = passedOptions;

  const defaultOptions = {
    containerClasses: "drop-down-container",
  };

  const mergedOptions = { ...defaultOptions, ...validatedOptions };

  // #endregion

  // #region Drop down properties
  /* --General values--
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

  // #endregion

  // #region Helper methods
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

  // #endregion

  // Create the base parent element
  const element = document.createElement("div");
  addClasses(mergedOptions.containerClasses, element);

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

  return {
    element,
  };
};

export default dropDown;
