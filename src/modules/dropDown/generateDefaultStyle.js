const generateDefaultStyle = (styleClasses) => {
  const defaultParentStyle = `
    :host {
      background-color: grey;
    }
    :host([hidden]) { 
      display: none 
    }
  `;

  const containerStyle = `
    .${styleClasses.container} {
      background-color: green;
    }
  `;

  const labelStyle = `
    .${styleClasses.label} {
      background-color: red;
    }
  `;

  const selectionStyle = `
    .${styleClasses.selection} {
      background-color: blue;
    }
  `;

  const arrowStyle = `
    .${styleClasses.arrow} {
      background-color: yellow;
    }
  `;

  const menuStyle = `
    .${styleClasses.menu} {
      background-color: lightblue;
    }
  `;

  const scrollbarStyle = `
    .${styleClasses.scrollbar} {
      background-color: lightgreen;
    }
  `;

  const optgroupStyle = `
    .${styleClasses.optgroup} {
      background-color: pink;
    }
  `;

  const optionStyle = `
    .${styleClasses.option} {
      background-color: purple;
    }
  `;

  const dividerStyle = `
    .${styleClasses.divider} {
      border-bottom: 1px solid blue;
    }
  `;

  const feedbackStyle = `
    .${styleClasses.feedback} {
      background-color: grey;
    }
  `;

  const styles =
    defaultParentStyle +
    containerStyle +
    labelStyle +
    selectionStyle +
    arrowStyle +
    menuStyle +
    scrollbarStyle +
    optgroupStyle +
    optionStyle +
    dividerStyle +
    feedbackStyle;

  return styles;
};

export default generateDefaultStyle;
