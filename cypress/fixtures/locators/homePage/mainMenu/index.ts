import { Locators } from "../../../types";
import { getByClassName, getById } from "../../common";

export const mainMenu: Locators = {
  mainMenuOptions: `${getById("nav-xshop")} ${getByClassName('nav-a')}`,
  allButtonText:`${getById("nav-hamburger-menu")} ${getByClassName('hm-icon-label')}`
};
