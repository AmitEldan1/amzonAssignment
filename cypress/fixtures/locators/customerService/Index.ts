import { Locators } from "../../types";
import { getByClassName, getById } from "../common";

export const customerService: Locators = {
    searchField: getById("helpsearch"),
    searchResults: getByClassName("a-box-inner"),
    resultsLinks : getByClassName("same_window")
};
