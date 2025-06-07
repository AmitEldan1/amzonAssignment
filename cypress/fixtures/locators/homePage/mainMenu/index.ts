import "../chooseLocationModal";
import { Locators } from "../../../types";
import { getByClassName, getById } from "../../common";

export const mainMenu: Locators = {
  mainMenuOptions: `${getById("nav-xshop")} ${getByClassName("nav-a")}`,
  allButtonText: `${getById("nav-hamburger-menu")} ${getByClassName("hm-icon-label")}`,
  selectLocationButton: getById("nav-global-location-popover-link"),
  mainSearchField: getById("twotabsearchtextbox"),
  cartCountButton: getById("nav-cart-count"),
};
