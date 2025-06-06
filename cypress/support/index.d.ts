import { ElementsTextData, Menu, SearchData } from "../fixtures/types";
import "./e2e";

declare global {
  namespace Cypress {
    interface Chainable {
      validateMenuOptions(manu : Menu): Chainable<JQuery<HTMLElement>>;
      clickElement(locator: string): Chainable<JQuery<HTMLElement>>;
      checkCurrentUrl(url: string, isTimestampInUrl?: boolean): Chainable<JQuery<HTMLElement>>;
      searchFor(searchData: SearchData): Chainable<JQuery<HTMLElement>>;
      navigateFromMenu(menuLocator: string, pageTitle: string): Chainable<JQuery<HTMLElement>>;
      checkElementsText(elementsTextData: ElementsTextData): Chainable<JQuery<HTMLElement>>;
      checkElementCount(locator: string, length: number): Chainable<JQuery<HTMLElement>>;
      filterElementByEqualText(locator: string, expectedText: string): Chainable<JQuery<HTMLElement>>;
      getFirstResultLink(searchResultsLocator: string, resultsLinksLocator: string): Chainable<JQuery<HTMLElement>>;
      verifyFirstResultNavigation(searchData: SearchData): Chainable<JQuery<HTMLElement>>;
    }
  }
}
