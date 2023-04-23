import validateMenuData from "./validateMenuData";
import arrowSvg from "./arrow.svg";
import randomUniqueString from "../../randomUniqueString";

const dropDown = (menuData, allowUserSetValues, type) => {
  // #region Properties
  // Public Properties
  const parentClasses = "drop-down";
  const containerClasses = "drop-down-container";
  const labelClasses = "drop-down-label";
  const selectionClasses = "drop-down-selection";
  const arrowClasses = "drop-down-arrow";
  const menuClasses = "drop-down-menu";
  const scrollBarClasses = "drop-down-scroll-bar";
  const optGroupClasses = "drop-down-optgroup";
  const optionClasses = "drop-down-option";
  const dividerClasses = "drop-down-divider";
  const feedbackClasses = "drop-down-feedback";

  const inputIdPrefix = "drop-down-input-";

  const placeholderText = "--Select--";

  // Menu Data
  const defaultData = ["Invalid", "Or", "Missing", "Menu", "Data"];

  // Validate passed data with sub module
  const validatedData = validateMenuData(defaultData, menuData);

  // --Functional Variations--
  let autoSuggest = false;
  let autoComplete = false;
  const userSetValues =
    typeof allowUserSetValues === "boolean" ? allowUserSetValues : false;
  // Set initial states based on params
  switch (type) {
    case "autoSuggest":
      autoSuggest = true;
      break;
    case "autoComplete":
      autoComplete = true;
      break;
    default:
      autoComplete = false;
      autoSuggest = false;
      break;
  }

  // Input required in forms?
  const required = false;

  // --Style Variations--
  /* detatched bool
   style options enum
   style */

  // Private Properties
  // Sytyling classes
  const stylePrefix = "CEDDS";

  const getClassNamesWithPrefix = (prefix) => {
    const elements = document.querySelectorAll("[class]");
    const classNames = [];

    for (let i = 0; i < elements.length; i += 1) {
      const elementClassList = elements[i].classList;

      for (let j = 0; j < elementClassList.length; j += 1) {
        const className = elementClassList[j];
        if (className.startsWith(prefix)) {
          classNames.push(className);
        }
      }
    }

    return classNames;
  };

  const generateStyleClassName = () => {
    const existingNames = getClassNamesWithPrefix(stylePrefix);
  };

  const styleClasses = {
    parent: "drop-down",
    container: "drop-down-container",
    label: "drop-down-label",
    selection: "drop-down-selection",
    arrow: "drop-down-arrow",
    menu: "drop-down-menu",
    scrollBar: "drop-down-scroll-bar",
    optGroup: "drop-down-optgroup",
    option: "drop-down-option",
    divider: "drop-down-divider",
    feedback: "drop-down-feedback",
  };

  // #endregion

  // #region HTML Creation Helper methods
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
    `[id^="${inputIdPrefix}"],
     [for^="${inputIdPrefix}"]`
  );

  // Generate a unique id for an input and its label
  const generateId = () => {
    let randomizedString = Math.random().toString(36).substring(2, 32);
    let newId = `${inputIdPrefix}${randomizedString}`;

    for (let i = 0; i < generatedIds.length; i += 1) {
      if (generatedIds[i].id === newId) {
        randomizedString = Math.random().toString(36).substring(2, 32);
        newId = `${inputIdPrefix}${randomizedString}`;
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
        addClasses(optGroupClasses, optgroup);
        optgroup.textContent = validatedData[i];
        menuElement.appendChild(optgroup);
      } // Divider
      else if (validatedData[i] === "_") {
        const divider = document.createElement("div");
        addClasses(dividerClasses, divider);
        menuElement.appendChild(divider);
      } // Option
      else {
        const option = document.createElement("p");
        addClasses(optionClasses, option);
        option.textContent = validatedData[i];
        menuElement.appendChild(option);
      }
    }
  };

  // #endregion

  // #region Create the html
  const createHTML = () => {
    // Parent
    const element = document.createElement("div");
    addClasses(parentClasses, element);

    // Label
    const inputId = generateId();
    const label = document.createElement("label");
    addClasses(labelClasses, label);
    label.setAttribute("for", inputId);
    element.appendChild(label);

    // Container
    const container = document.createElement("div");
    addClasses(containerClasses, container);
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
    addClasses(selectionClasses, selection);
    container.appendChild(selection);

    // Arrow
    const arrow = document.createElement("img");
    arrow.src = arrowSvg;
    addClasses(arrowClasses, arrow);
    container.appendChild(arrow);

    // Dropdown menu
    const menu = document.createElement("div");
    addClasses(menuClasses, menu);
    element.appendChild(menu);

    // Scroll bar
    const scrollBar = document.createElement("div");
    addClasses(scrollBarClasses, scrollBar);
    menu.appendChild(scrollBar);

    // Menu items, cagetgories, and dividers created from menu data
    createMenu(menu);

    // feedback text
    const feedback = document.createElement("p");
    addClasses(feedbackClasses, feedback);
    element.appendChild(feedback);

    return element;
  };
  // #endregion

  // Create the elements
  const parent = createHTML();

  // Methods for altering after creation

  return {
    parent,
  };
};

export default dropDown;
