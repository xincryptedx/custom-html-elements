import "./styles/style.css";
import DropDown from "./modules/dropDown/dropDown";

const dropDownMenu = DropDown({
  parentClasses: ["custom-class-1", "custom-class-2"],
  containerClasses: ["custom-class-1", "custom-class-2"],
  selectionClasses: ["custom-class-1", "custom-class-2"],
  labelClasses: ["custom-class-1", "custom-class-2"],
  arrowClasses: "custom-class-1",
  menuClasses: ["custom-class-2"],
  inputIdPrefix: "custom-prefix-",
});

const invalidParamDD = DropDown({
  parentClasses: undefined,
  containerClasses: 6,
  selectionClasses: null,
  labelClasses: NaN,
  arrowClasses: { a: 17 },
  menuClasses: null,
  inputIdPrefix: 69,
});

document.body.appendChild(dropDownMenu.element);

document.body.appendChild(invalidParamDD.element);
