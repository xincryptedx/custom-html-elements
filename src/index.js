import "./styles/style.css";
import DropDown from "./modules/dropDown/dropDown";

const dropDownMenu = DropDown(
  {
    parentClasses: ["custom-class-1", "custom-class-2"],
    containerClasses: ["custom-class-3", "custom-class-4"],
    selectionClasses: ["custom-class-5", "custom-class-6"],
    labelClasses: ["custom-class-7", "custom-class-8"],
    arrowClasses: "custom-class-9",
    menuClasses: ["custom-class-10"],
    scrollBarClasses: ["custom-class-11", "custom-class-12"],
    feedbackClasses: "custom-class-13",
    inputIdPrefix: "custom-prefix-",
  },
  [
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
  ]
);

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
