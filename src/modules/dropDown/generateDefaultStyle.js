const generateDefaultStyle = (generatedStyleClasses) => {
  // Default styles based on variable class names
  const defaultParentStyle = `
  .${generatedStyleClasses.parentClasses.toString()} {
  background-color: grey;
}`;

  const defaultContainerStyle = `
.${generatedStyleClasses.containerClasses.toString()} {
  background-color: green;
}`;

  let stylesToAdd = defaultParentStyle + defaultContainerStyle;

  /* parentClasses: "drop-down",
    containerClasses: "drop-down-container",
    labelClasses: "drop-down-label",
    selectionClasses: "drop-down-selection",
    arrowClasses: "drop-down-arrow",
    menuClasses: "drop-down-menu",
    scrollBarClasses: "drop-down-scroll-bar",
    optGroupClasses: "drop-down-optgroup",
    optionClasses: "drop-down-option",
    dividerClasses: "drop-down-divider",
    feedbackClasses: "drop-down-feedback", */

  // If default styles tag doesn't exist, create it and add rules for this drop down
  // If it does exist, just append the rules if they don't exist yet
  let defaultStylesTag = document.querySelector("#default-drop-down-styles");
  if (!defaultStylesTag) {
    defaultStylesTag = document.createElement("style");
    defaultStylesTag.id = "default-drop-down-styles";
    defaultStylesTag.innerHTML = stylesToAdd;
    document.head.appendChild(defaultStylesTag);
  } else {
    stylesToAdd = "";

    if (
      !defaultStylesTag.innerHTML.includes(
        generatedStyleClasses.parentClasses.toString()
      )
    ) {
      stylesToAdd += defaultParentStyle;
    }

    defaultStylesTag.innerHTML += stylesToAdd;
  }
};

export default generateDefaultStyle;
