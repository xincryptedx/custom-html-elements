import "./styles/style.css";
import DropDown from "./modules/dropDown/dropDown";

const dropDownMenu = DropDown([
  "#Fruit",
  "Apples",
  "Bananas",
  "Grapes",
  "_",
  "Tomatoes",
  "Cucumbers",
  "Bell Peppers",
  "Corn",
  "#Vegetables",
  "Carrots",
  "Potatoes",
  "Lettuce",
]);

const invalidParamDD = DropDown(
  {
    parentClasses: undefined,
    containerClasses: 6,
    selectionClasses: null,
    labelClasses: NaN,
    arrowClasses: [],
    menuClasses: null,
    scrollBarClasses: [23, 24, 25],
    feedbackClasses: {},
    inputIdPrefix: 69,
  },
  [undefined, null, NaN, 0]
);

const thirdDropDown = DropDown();

document.body.appendChild(dropDownMenu.element);

document.body.appendChild(invalidParamDD.element);

document.body.appendChild(thirdDropDown.element);
