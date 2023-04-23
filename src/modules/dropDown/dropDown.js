import validateMenuData from "./validateMenuData";
import arrowSvg from "./arrow.svg";

const dropDown = (passedData) => {
  // #region Default options and data
  const defaultOptions = {
    // Classes
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

  // Menu Data
  const defaultData = ["Invalid", "Or", "Missing", "Menu", "Data"];

  // Validate passed data with sub module
  const validatedData = validateMenuData(defaultData, passedData);

  // #endregion

  // #region Properties
  // --General values--
  // placeholder text
  // menu data which will be [value, value, value] or {category: [value], category: [value]}

  // --Functional Variations--
  const autoSuggest = defaultOptions.autoSuggest === true;
  const autoComplete = defaultOptions.autoComplete === true;
  const userSetValues = defaultOptions.userSetValues === true;
  // Requred bool

  // --Style Variations--
  /* detatched bool
   style options enum
   style */

  // #endregion

  // #region Helper methods
  // Add classes to html element
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

  // All the unique ids used by drop down inputs and labels
  const generatedIds = document.querySelectorAll(
    `[id^="${defaultOptions.inputIdPrefix}"],
     [for^="${defaultOptions.inputIdPrefix}"]`
  );

  // Generate a unique id for an input and its label
  const generateId = () => {
    let randomizedString = Math.random().toString(36).substring(2, 32);
    let newId = `${defaultOptions.inputIdPrefix}${randomizedString}`;

    for (let i = 0; i < generatedIds.length; i += 1) {
      if (generatedIds[i].id === newId) {
        randomizedString = Math.random().toString(36).substring(2, 32);
        newId = `${defaultOptions.inputIdPrefix}${randomizedString}`;
        i = -1;
      }
    }

    return newId;
  };

  // Create menu html elements
  const createMenu = (menuElement) => {
    for (let i = 0; i < validatedData.length; i += 1) {
      // Option Group
      if (validatedData[i].startsWith("#")) {
        const optgroup = document.createElement("p");
        addClasses(defaultOptions.optGroupClasses, optgroup);
        optgroup.textContent = validatedData[i];
        menuElement.appendChild(optgroup);
      } // Divider
      else if (validatedData[i] === "_") {
        const divider = document.createElement("div");
        addClasses(defaultOptions.dividerClasses, divider);
        menuElement.appendChild(divider);
      } // Option
      else {
        const option = document.createElement("p");
        addClasses(defaultOptions.optionClasses, option);
        option.textContent = validatedData[i];
        menuElement.appendChild(option);
      }
    }
  };

  // #endregion

  // #region Create the html
  // Parent
  const element = document.createElement("div");
  addClasses(defaultOptions.parentClasses, element);

  // Label
  const inputId = generateId();
  const label = document.createElement("label");
  addClasses(defaultOptions.labelClasses, label);
  label.setAttribute("for", inputId);
  element.appendChild(label);

  // Container
  const container = document.createElement("div");
  addClasses(defaultOptions.containerClasses, container);
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
  addClasses(defaultOptions.selectionClasses, selection);
  container.appendChild(selection);

  // Arrow
  const arrow = document.createElement("img");
  arrow.src = arrowSvg;
  addClasses(defaultOptions.arrowClasses, arrow);
  container.appendChild(arrow);

  // Dropdown menu
  const menu = document.createElement("div");
  addClasses(defaultOptions.menuClasses, menu);
  element.appendChild(menu);

  // Scroll bar
  const scrollBar = document.createElement("div");
  addClasses(defaultOptions.scrollBarClasses, scrollBar);
  menu.appendChild(scrollBar);

  // Menu items, cagetgories, and dividers created from menu data
  createMenu(menu);

  // feedback text
  const feedback = document.createElement("p");
  addClasses(defaultOptions.feedbackClasses, feedback);
  element.appendChild(feedback);

  // #endregion

  // Methods for altering after creation

  return {
    element,
  };
};

export default dropDown;
