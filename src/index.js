import "./styles/style.css";
import DropDown from "./modules/dropDown/dropDown";
import ImageSlider from "./modules/imageSlider/imageSlider";

const dropDownMenu = DropDown(
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
  ],
  false,
  "autoSuggest"
);
document.body.appendChild(dropDownMenu.parent);

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

const thirdDropDown = DropDown([], false, "autoComplete");

document.body.appendChild(invalidParamDD.parent);

document.body.appendChild(thirdDropDown.parent);

dropDownMenu.zIndex = 300;

const slider = ImageSlider([
  234234,
  null,
  undefined,
  false,
  "asdfa",
  "KLJDFKLJ3234kl@!#$@",
  null,
  2343,
]);

document.body.appendChild(slider.parent);
