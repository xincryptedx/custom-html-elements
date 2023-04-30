import "./styles/style.css";
import DropDown from "./modules/dropDown/dropDown";
import ImageSlider from "./modules/imageSlider/imageSlider";

const imgSources = [
  "https://drive.google.com/uc?id=18hvWeohZazFN_d8FrOEoPQLwFICyC3bl",
  "https://drive.google.com/uc?id=1EYFWnbD-GqFwi7q7Nuwa9CFs_70jHvt5",
  "https://drive.google.com/uc?id=18WJhHKkeFXzokEtcjVZewjYbTEi1_dhg",
  "https://drive.google.com/uc?id=1MlFp-syap-h1S0NlL0LjNlQA6WYppQtp",
  "https://drive.google.com/uc?id=1f0XH6oJJvnTipPTJuHlf4y57rTxIq3AG",
];

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

const slider = ImageSlider(imgSources);

document.body.appendChild(slider.parent);
