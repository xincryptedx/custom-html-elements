import validateOptions from "./validateOptions";

const dropDown = (passedOptions) => {
  // #region Options
  const defaultOptions = {
    // Classes
    parentClasses: "drop-down",
    containerClasses: "drop-down-container",
    labelClasses: "drop-down-label",
    selectionClasses: "drop-down-selection",

    // IDs
    inputIdPrefix: "drop-down-input-",
  };

  const validatedOptions = validateOptions(defaultOptions, passedOptions);

  // #endregion

  // #region Properties
  // --General values--
  // placeholder text
  // menu data which will be [value, value, value] or {category: [value], category: [value]}

  // --Functional Variations--
  const autoSuggest = validatedOptions.autoSuggest === true;
  const autoComplete = validatedOptions.autoComplete === true;
  const userSetValues = validatedOptions.userSetValues === true;
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
    `[id^="${validatedOptions.inputIdPrefix}"],
     [for^="${validatedOptions.inputIdPrefix}"]`
  );

  const generateId = () => {
    let randomizedString = Math.random().toString(36).substring(2, 32);
    let newId = `${validatedOptions.inputIdPrefix}${randomizedString}`;

    for (let i = 0; i < generatedIds.length; i += 1) {
      if (generatedIds[i].id === newId) {
        randomizedString = Math.random().toString(36).substring(2, 32);
        newId = `${validatedOptions.inputIdPrefix}${randomizedString}`;
        i = -1;
      }
    }

    return newId;
  };

  // #endregion

  // Create the base parent element
  const element = document.createElement("div");
  addClasses(validatedOptions.parentClasses, element);

  // Label
  const inputId = generateId();
  const label = document.createElement("label");
  addClasses(validatedOptions.labelClasses, label);
  label.setAttribute("for", inputId);
  element.appendChild(label);

  // Container
  const container = document.createElement("div");
  addClasses(validatedOptions.containerClasses, container);
  element.appendChild(container);

  // Either a p if standard or text input if autoSuggest, autoComplete, or userSetValues are true
  let selection;
  if (autoSuggest || autoComplete || userSetValues) {
    selection = document.createElement("input");
    selection.setAttribute("type", "text");
  } else {
    selection = document.createElement("p");
  }
  selection.setAttribute("id", inputId);
  addClasses(validatedOptions.selectionClasses, selection);
  element.appendChild(selection);

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
