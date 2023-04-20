import validateOptions from "./validateOptions";
import validateMenuData from "./validateMenuData";
import arrowSvg from "./arrow.svg";

const dropDown = (passedOptions, passedData) => {
  // #region Options and Data
  const defaultOptions = {
    // Classes - Key must end with "Classes" for validation
    parentClasses: "drop-down",
    containerClasses: "drop-down-container",
    labelClasses: "drop-down-label",
    selectionClasses: "drop-down-selection",
    arrowClasses: "drop-down-arrow",
    menuClasses: "drop-down-menu",
    scrollBarClasses: "drop-down-scroll-bar",
    optGroupClasses: "drop-down-optgroup",
    optionClasses: "drop-down-option",
    dividerClasses: "drop-down-divider",
    feedbackClasses: "drop-down-feedback",

    // IDs
    inputIdPrefix: "drop-down-input-",

    placeholderText: "--Select--",
  };

  const validatedOptions = validateOptions(defaultOptions, passedOptions);

  // Menu Data
  const defaultData = ["Invalid", "Or", "Missing", "Menu", "Data"];

  const validatedData = validateMenuData(defaultData, passedData);

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

  // #region Create the html
  // Method for creating menu elements
  const createMenu = (menuElement) => {
    for (let i = 0; i < validatedData.length; i += 1) {
      // Option Group
      if (validatedData[i].startsWith("#")) {
        const optgroup = document.createElement("p");
        addClasses(validatedOptions.optGroupClasses, optgroup);
        optgroup.textContent = validatedData[i];
        menuElement.appendChild(optgroup);
      } // Divider
      else if (validatedData[i] === "_") {
        const divider = document.createElement("div");
        addClasses(validatedOptions.dividerClasses, divider);
        menuElement.appendChild(divider);
      } // Option
      else {
        const option = document.createElement("p");
        addClasses(validatedOptions.optionClasses, option);
        option.textContent = validatedData[i];
        menuElement.appendChild(option);
      }
    }
  };

  // Parent
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
  container.appendChild(selection);

  // Arrow
  const arrow = document.createElement("img");
  arrow.src = arrowSvg;
  addClasses(validatedOptions.arrowClasses, arrow);
  container.appendChild(arrow);

  // Dropdown menu
  const menu = document.createElement("div");
  addClasses(validatedOptions.menuClasses, menu);
  element.appendChild(menu);

  // Scroll bar
  const scrollBar = document.createElement("div");
  addClasses(validatedOptions.scrollBarClasses, scrollBar);
  menu.appendChild(scrollBar);

  // Menu items, cagetgories, and dividers created from menu data
  createMenu(menu);

  // feedback text
  const feedback = document.createElement("p");
  addClasses(validatedOptions.feedbackClasses, feedback);
  element.appendChild(feedback);

  // #endregion

  // Methods for altering after creation

  return {
    element,
  };
};

export default dropDown;
