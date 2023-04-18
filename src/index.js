import "./styles/style.css";
import DropDown from "./modules/dropDown/dropDown";

const dropDownMenu = DropDown({
  parentClasses: ["custom-class-1", "custom-class-2"],
});

const invalidParamDD = DropDown({ parentClasses: null });

document.body.appendChild(dropDownMenu.element);

document.body.appendChild(invalidParamDD.element);
