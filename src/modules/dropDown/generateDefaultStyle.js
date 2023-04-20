const generateDefaultStyle = (validatedOptions) => {
  // Default styles based on variable class names
  const defaultStyles = `
  .${validatedOptions.parentClasses.toString()} {
  margin: 0;
  padding: 0;
  background-color: grey;
}`;

  // If default styles tag doesn't exist, create it and add rules for this drop down
  // If it does exist, just append the rules
  let defaultStylesTag = document.querySelector("#default-drop-down-styles");
  if (!defaultStylesTag) {
    defaultStylesTag = document.createElement("style");
    defaultStylesTag.id = "default-drop-down-styles";
    defaultStylesTag.innerHTML = defaultStyles;

    document.body.appendChild(defaultStylesTag);
  } else {
    defaultStylesTag.innerHTML += defaultStyles;
  }
};

export default generateDefaultStyle;
