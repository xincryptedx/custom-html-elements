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

  // #region Properties
  // --General values--
  // placeholder text
  // menu data which will be [value, value, value] or {category: [value], category: [value]}

  // --Functional Variations--
  const autoSuggest = mergedOptions.autoSuggest === true;
  const autoComplete = mergedOptions.autoComplete === true;
  const userSetValues = mergedOptions.userSetValues === true;
  // Requred bool

  // --Style Variations--
  /* detatched bool
   style options enum
   style */

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
    `[id^="${mergedOptions.inputIdPrefix}"],
     [for^="${mergedOptions.inputIdPrefix}"]`
  );

  const generateId = () => {
    let randomizedString = Math.random().toString(36).substring(2, 32);
    let newId = `${mergedOptions.inputIdPrefix}${randomizedString}`;

    for (let i = 0; i < generatedIds.length; i += 1) {
      if (generatedIds[i].id === newId) {
        randomizedString = Math.random().toString(36).substring(2, 32);
        newId = `${mergedOptions.inputIdPrefix}${randomizedString}`;
        i = -1;
      }
    }

    return newId;
  };

  // #endregion

  // Create the base parent element
  const element = document.createElement("div");
  addClasses(mergedOptions.parentClasses, element);

  // Label
  const inputId = generateId();
  const label = document.createElement("label");
  addClasses(mergedOptions.labelClasses, label);
  label.setAttribute("for", inputId);
  element.appendChild(label);

  // Container
  const container = document.createElement("div");
  addClasses(mergedOptions.containerClasses, container);
  element.appendChild(container);

  // Either a p if standard or text input if autoSuggest, autoComplete, or userSetValues are true
  let selectedItemText;
  if (autoSuggest || autoComplete || userSetValues) {
    selectedItemText = document.createElement("input");
    selectedItemText.setAttribute("type", "text");
  } else {
    selectedItemText = document.createElement("p");
  }
  selectedItemText.setAttribute("id", inputId);
  element.appendChild(selectedItemText);

  //   arrow
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
