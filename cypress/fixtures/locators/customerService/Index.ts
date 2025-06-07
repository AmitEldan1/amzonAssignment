import { Locators } from "../../types";
import { getByClassName, getById } from "../common";

export const customerService: Locators = {
  searchField: getById("hubHelpSearchInput"),
  searchResults: getByClassName("help-content"),
  resultsLinks: getByClassName("same_window"),
};
