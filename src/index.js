import "./styles/style.css";
import DropDown from "./modules/dropDown/dropDown";

const dropDownMenu = DropDown();

document.body.appendChild(dropDownMenu.element);

for (let i = 0; i < 10; i += 1) {
  document.body.appendChild(DropDown().element);
}
