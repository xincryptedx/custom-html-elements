const generateDefaultStyle = (styleClasses) => {
  // #region CSS Reset
  const resetStyle = `
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  `;
  // #endregion

  const parentStyle = `
    :host {
      display: grid;
      grid-template: 1rem 32px auto 1rem / 1fr;
      grid-template-areas:
        "label"
        "container"
        "menu"
        "feedback";

      position: relative;
    }
    :host([hidden]) { 
      display: none 
    }
  `;

  const labelStyle = `
    .${styleClasses.label} {
      background-color: red;
      grid-area: label;
    }
  `;

  const containerStyle = `
    .${styleClasses.container} {
      background-color: green;
      grid-area: container;

      display: grid;
      grid-template: 1fr / 1fr 30px;
      grid-template-areas: "selection arrow";

      height: 32px;
    }
  `;

  const selectionStyle = `
    .${styleClasses.selection} {
      background-color: blue;
      grid-area: selection;
    }
  `;

  const arrowStyle = `
    .${styleClasses.arrow} {
      background-color: transparent;
      grid-area: arrow;

      height: 30px;

      transition: 0.5s cubic-bezier(0.1,-0.28, 0.23, 1.35);
    }

    .${styleClasses.arrow}.flip {
      rotate: 180deg;
    }
  `;

  const menuStyle = `
    .${styleClasses.menu} {
      background-color: lightblue;
      grid-area: menu;

      display: grid;
      grid-auto-rows: 1.1rem;

      position: relative;
      z-index: 2;

      max-height: 0; 
      overflow: hidden;
      transition: max-height 0.5s ease-in-out;
    }

    .${styleClasses.menu}.show {
      max-height: 500px;
      overflow-y: scroll;
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }

    .${styleClasses.menu}::-webkit-scrollbar {
      display: none;
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
      grid-area: feedback;
    }
  `;

  const styles =
    resetStyle +
    parentStyle +
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
