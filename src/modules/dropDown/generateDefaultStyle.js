const generateDefaultStyle = (styleClasses, options) => {
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
      grid-template: 32px 1.1rem / min-content;
      grid-template-areas:
        "container"
        "menuAndFeedback";

      position: relative;
    }
    :host([hidden]) { 
      display: none 
    }
  `;

  const containerStyle = `
    .${styleClasses.container} {
      grid-area: container;

      display: grid;
      position: relative;

      height: 32px;
      min-width: 20ch;
    }
  `;

  const selectionStyle = `
    .${styleClasses.selection} {

    }
  `;

  const arrowStyle = `
    .${styleClasses.arrow} {
      background-color: transparent;

      height: 30px;

      position: absolute;
      right: 5px;

      transition: 0.5s cubic-bezier(0.1,-0.28, 0.23, 1.35);
    }

    .${styleClasses.arrow}.flip {
      rotate: 180deg;
    }
  `;

  const menuAndFeedbackContainerStyle = `
    .${styleClasses.menuAndFeedbackContainer} {
      grid-area: menuAndFeedback;

      display: grid;
      grid-template: auto 1.1rem / 1fr;
      grid-template-areas:
        "menu"
        "feedback";

      position: absolute;

      width: 100%;
    }
  `;

  const menuStyle = `
    .${styleClasses.menu} {
      grid-area: menu;

      display: grid;
      grid-auto-rows: 1.1rem;

      position: relative;

      max-height: 0; 
      background-color: white;
      border: 1px solid black;

      opacity: 0;

      z-index: ${options.zIndex};

      overflow-y: scroll;
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */

      transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
    }

    .${styleClasses.menu}.show {
      max-height: 150px;
      opacity: 1;
    }

    .${styleClasses.menu}::-webkit-scrollbar {
      display: none;
    }
  `;

  const scrollbarStyle = `
    .${styleClasses.scrollbar} {
      position: absolute;
      top: 0;
      right: 0;
      width: 10px;
      height: 33%;
      background-color: black;
      border-radius: 5px;
    }
  `;

  const optgroupStyle = `
    .${styleClasses.optgroup} {

    }
  `;

  const optionStyle = `
    .${styleClasses.option} {

    }
  `;

  const dividerStyle = `
    .${styleClasses.divider} {
      border-bottom: 1px solid blue;
    }
  `;

  const feedbackStyle = `
    .${styleClasses.feedback} {
      grid-area: feedback;
    }

    .${styleClasses.menu}.show + .${styleClasses.feedback} {
      z-index: ${options.zIndex};
    }
  `;

  const styles =
    resetStyle +
    parentStyle +
    containerStyle +
    selectionStyle +
    arrowStyle +
    menuAndFeedbackContainerStyle +
    menuStyle +
    scrollbarStyle +
    optgroupStyle +
    optionStyle +
    dividerStyle +
    feedbackStyle;

  return styles;
};

export default generateDefaultStyle;
