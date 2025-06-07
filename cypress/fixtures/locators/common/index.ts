import { Locators } from "../../types";

export const getById = (locator: string) => `#${locator}`;
export const getByClassName = (locator: string) => `.${locator}`;

export const common: Locators = {
  pageContainer: getById("a-page"),
  successMessage: getById("NATC_SMART_WAGON_CONF_MSG_SUCCESS"),
};
