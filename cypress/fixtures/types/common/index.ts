import { NavigationButtons } from "../homePage/mainMenu";

export type ElementsTextData = {
  locator: string;
  expectedText: string;
}[];

export type Menu = {
  navigationButtons: NavigationButtons;
  elementsText: ElementsTextData;
  menuLocator: string;
};

export type SearchData = {
  searchFieldLocator: string;
  searchResultsLocator: string;
  resultsLinksLocator?: string;
  textForSearch: string;
  expectedTargetUrl: string;
  isTimestampInUrl?: boolean;
};
