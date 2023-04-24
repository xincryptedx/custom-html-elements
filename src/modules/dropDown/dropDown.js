import validateMenuData from "./validateMenuData";
import arrowSvg from "./arrow.svg";
import generateDefaultStyle from "./generateDefaultStyle";

const dropDown = (menuData, allowUserSetValues, type) => {
  // #region Properties
  // Public Properties
  const parentClasses = "drop-down";

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

  const styleClasses = {
    container: "container",
    label: "label",
    selection: "selection",
    arrow: "arrow",
    menu: "menu",
    scrollBar: "scrollBar",
    optGroup: "optGroup",
    option: "option",
    divider: "divider",
    feedback: "feedback",
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

  // Create menu html elements
  const createMenu = (menuElement) => {
    for (let i = 0; i < validatedData.length; i += 1) {
      // Option Group
      if (validatedData[i].startsWith("#")) {
        const optgroup = document.createElement("p");
        addClasses(styleClasses.optGroup, optgroup);
        optgroup.textContent = validatedData[i];
        menuElement.appendChild(optgroup);
      } // Divider
      else if (validatedData[i] === "_") {
        const divider = document.createElement("div");
        addClasses(styleClasses.divider, divider);
        menuElement.appendChild(divider);
      } // Option
      else {
        const option = document.createElement("p");
        addClasses(styleClasses.option, option);
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

    // Attatch shadow root to encapsulate children and style
    const shadowRoot = element.attachShadow({ mode: "open" });

    // Label
    const inputId = "selection";
    const label = document.createElement("label");
    addClasses(styleClasses.label, label);
    label.setAttribute("for", inputId);
    label.textContent = "Label";
    shadowRoot.appendChild(label);

    // Container
    const container = document.createElement("div");
    addClasses(styleClasses.container, container);
    shadowRoot.appendChild(container);

    // Either a p if standard or text input if autoSuggest, autoComplete, or userSetValues are true
    let selection;
    if (autoSuggest || autoComplete || userSetValues) {
      selection = document.createElement("input");
      selection.setAttribute("type", "text");
    } else {
      selection = document.createElement("p");
    }
    selection.setAttribute("id", inputId);
    addClasses(styleClasses.selection, selection);
    container.appendChild(selection);

    // Arrow
    const arrow = document.createElement("img");
    arrow.src = arrowSvg;
    addClasses(styleClasses.arrow, arrow);
    container.appendChild(arrow);

    // Dropdown menu
    const menu = document.createElement("div");
    addClasses(styleClasses.menu, menu);
    shadowRoot.appendChild(menu);

    // Scroll bar
    const scrollBar = document.createElement("div");
    addClasses(styleClasses.scrollBar, scrollBar);
    menu.appendChild(scrollBar);

    // Menu items, cagetgories, and dividers created from menu data
    createMenu(menu);

    // feedback text
    const feedback = document.createElement("p");
    addClasses(styleClasses.feedback, feedback);
    shadowRoot.appendChild(feedback);

    return element;
  };
  // #endregion

  // Create the elements
  const parent = createHTML();

  // Style the elements
  const shadowStyles = document.createElement("style");
  shadowStyles.innerHTML = generateDefaultStyle(styleClasses);
  parent.shadowRoot.appendChild(shadowStyles);

  // Methods for altering after creation

  return {
    parent,
  };
};

export default dropDown;
