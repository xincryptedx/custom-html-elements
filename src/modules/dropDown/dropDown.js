const dropDown = (passedOptions) => {
  // #region Options validation
  let validatedOptions;
  if (!passedOptions || typeof passedOptions !== "object") {
    validatedOptions = {};
  } else validatedOptions = passedOptions;

  const defaultOptions = {
    // Classes
    parentClasses: "drop-down",
    containerClasses: "drop-down-container",
    labelClasses: "drop-down-label",

    // IDs
    inputIdPrefix: "drop-down-input-",
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

  const generatedIds = document.querySelectorAll(
    `[id^="${mergedOptions.inputIdPrefix}"]`
  );

  console.log(generatedIds);

  const generateId = () => {
    const randomizedString = Math.random().toString(36).substring(2, 32);
    const newId = `${mergedOptions.inputIdPrefix}${randomizedString}`;

    /*  while (generatedIds.includes(randomizedString)) {
      randomizedString = Math.random().toString(36).substring(2, 32);
      newId = `${mergedOptions.inputIdPrefix}${randomizedString}`;
    }

    generatedIds.push(newId); */
    console.log(generatedIds);

    return newId;
  };

  // #endregion

  // Create the base parent element
  const element = document.createElement("div");
  addClasses(mergedOptions.parentClasses, element);

  // Container
  const container = document.createElement("div");
  element.appendChild(container);
  addClasses(mergedOptions.containerClasses, container);

  // Label
  const label = document.createElement("label");
  element.appendChild(label);
  addClasses(mergedOptions.labelClasses, label);
  label.setAttribute("for", generateId());

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
