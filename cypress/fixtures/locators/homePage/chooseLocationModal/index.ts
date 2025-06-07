import { Locators } from "../../../types";
import { getByClassName, getById } from "../../common";

export const chooseLocationModal: Locators = {
  chooseLocationContainer: getById("a-popover-content-1"),
  selectCountryButton: getById("GLUXCountryValue"),
  countriesList: `${getByClassName("a-lgtbox-vertical-scroll")} ${getByClassName("a-nostyle")}`,
  doneButton: "[name=glowDoneButton]",
};
