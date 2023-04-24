const generateDefaultStyle = (styleClasses) => {
  const defaultParentStyle = `
  :host {
  background-color: grey;
}`;

  const defaultContainerStyle = `
.${styleClasses.container} {
  background-color: green;
}`;

  const styles = defaultParentStyle + defaultContainerStyle;

  return styles;
};

export default generateDefaultStyle;
