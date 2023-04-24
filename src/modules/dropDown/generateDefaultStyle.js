const generateDefaultStyle = (styleClasses) => {
  const defaultParentStyle = `
  :host {
  background-color: grey;
}
  :host([hidden]) { 
    display: none 
  }`;

  const defaultContainerStyle = `
.${styleClasses.container} {
  background-color: green;
}`;

  const styles = defaultParentStyle + defaultContainerStyle;

  return styles;
};

export default generateDefaultStyle;
