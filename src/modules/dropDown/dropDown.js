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
  // const required = false;

  const styleOptions = {
    zIndex: 2,
  };
  /* detatched bool
   style options enum
   style 
   animated bool */

  const styleClasses = {
    container: "container",
    selection: "selection",
    arrow: "arrow",
    menu: "menu",
    scrollContainer: "scrollContainer",
    scrollbar: "scrollbar",
    optgroup: "optgroup",
    option: "option",
    divider: "divider",
    feedback: "feedback",
    menuAndFeedbackContainer: "menuAndFeedbackContainer",
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
        addClasses(styleClasses.optgroup, optgroup);
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

  const dropDownClicked = (menu, arrow) => {
    menu.classList.toggle("show");
    if (menu.classList.contains("show")) arrow.classList.add("flip");
    else arrow.classList.remove("flip");
    document.addEventListener(
      "mouseup",
      () => {
        if (menu.classList.contains("show")) {
          menu.classList.toggle("show");
          arrow.classList.remove("flip");
        }
      },
      { once: true }
    );
  };

  const arrowClicked = (menu, arrow) => {
    if (menu.classList.contains("show")) {
      menu.classList.toggle("show");
      arrow.classList.remove("flip");
    } else {
      dropDownClicked(menu, arrow);
    }
  };

  const updateScrollBar = (menu, scrollbar) => {
    const { scrollTop } = menu;
    const { scrollHeight } = menu;
    const wrapperHeight = menu.offsetHeight;
    const maxScroll = Math.floor(scrollHeight - wrapperHeight);
    const scrolledAmount = Math.min(Math.max(scrollTop / maxScroll, 0), 1);

    const scrollbarHeightRatio = wrapperHeight / scrollHeight;
    const hiddenAreaHeight = scrollHeight - wrapperHeight;
    const visibleScrollbarHeight = hiddenAreaHeight * scrollbarHeightRatio;
    scrollbar.style.height = `${visibleScrollbarHeight}px`;

    console.log(
      `scrHeightRatio: ${scrollbarHeightRatio}, hiddenHeight: ${hiddenAreaHeight}, visibleHeight: ${visibleScrollbarHeight}`
    );
    console.log(wrapperHeight);
  };

  // #endregion

  // #region Create the html
  const createHTML = () => {
    // Parent
    const element = document.createElement("div");
    addClasses(parentClasses, element);

    // Attatch shadow root to encapsulate children and style
    const shadowRoot = element.attachShadow({ mode: "open" });

    // Container
    const container = document.createElement("div");
    addClasses(styleClasses.container, container);
    shadowRoot.appendChild(container);

    // Either a p if standard or text input if autoSuggest, autoComplete, or userSetValues are true
    const selection = document.createElement("input");
    selection.setAttribute("type", "text");
    selection.placeholder = placeholderText;
    selection.textContent = placeholderText;

    if (autoSuggest || autoComplete || userSetValues) {
      selection.readOnly = false;
    } else {
      selection.readOnly = true;
    }

    const inputId = "selection";
    selection.setAttribute("id", inputId);
    addClasses(styleClasses.selection, selection);
    container.appendChild(selection);

    // Arrow
    const arrow = document.createElement("img");
    arrow.src = arrowSvg;
    addClasses(styleClasses.arrow, arrow);
    container.appendChild(arrow);

    // Div that holds menu and feedback so they can both expand over top of other elements
    const menuAndFeedbackContainer = document.createElement("div");
    addClasses(styleClasses.menuAndFeedbackContainer, menuAndFeedbackContainer);
    shadowRoot.appendChild(menuAndFeedbackContainer);

    // Dropdown menu
    const menu = document.createElement("div");
    addClasses(styleClasses.menu, menu);
    menuAndFeedbackContainer.appendChild(menu);

    // Scroll container
    const scrollContainer = document.createElement("div");
    addClasses(styleClasses.scrollContainer, scrollContainer);
    menuAndFeedbackContainer.appendChild(scrollContainer);

    // Scroll bar
    const scrollbar = document.createElement("div");
    addClasses(styleClasses.scrollbar, scrollbar);
    scrollContainer.appendChild(scrollbar);

    // Menu items, cagetgories, and dividers created from menu data
    createMenu(menu);

    // feedback text
    const feedback = document.createElement("p");
    addClasses(styleClasses.feedback, feedback);
    menuAndFeedbackContainer.appendChild(feedback);

    // Add event listeners for toggling menu show class
    selection.addEventListener("click", () => {
      dropDownClicked(menu, arrow);
    });
    arrow.addEventListener("mouseup", (e) => {
      e.stopPropagation();
      arrowClicked(menu, arrow);
    });

    // Event listener for updating scrollbar
    menu.addEventListener("scroll", () => {
      updateScrollBar(menu, scrollbar);
    });

    return element;
  };
  // #endregion

  // Create the elements
  const parent = createHTML();

  // Create style element
  const shadowStyles = document.createElement("style");
  parent.shadowRoot.appendChild(shadowStyles);

  // Methods for altering after creation
  const setShadowStyle = () => {
    shadowStyles.innerHTML = generateDefaultStyle(styleClasses, styleOptions);
  };

  // Style the elements
  setShadowStyle();

  return {
    parent,
    get zIndex() {
      return styleOptions.zIndex;
    },
    set zIndex(value) {
      if (Number.isInteger(value)) styleOptions.zIndex = value;
      setShadowStyle();
    },
  };
};

export default dropDown;
