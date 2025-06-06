import { ElementsTextData, Menu } from "../fixtures/types";
import "./e2e";

declare global {
  namespace Cypress {
    interface Chainable {
      validateMenuOptions(manu : Menu): Chainable<JQuery<HTMLElement>>;
      clickElement(locator: string): Chainable<JQuery<HTMLElement>>;
      checkCurrentUrl(url: string): Chainable<JQuery<HTMLElement>>;
      searchFor(locator: string, text: string): Chainable<JQuery<HTMLElement>>;
      navigateFromMenu(menuLocator: string, pageTitle: string): Chainable<JQuery<HTMLElement>>;
      checkElementsText(elementsTextData: ElementsTextData): Chainable<JQuery<HTMLElement>>;
      checkElementCount(locator: string, length: number): Chainable<JQuery<HTMLElement>>;
      filterElementByEqualText(locator: string, expectedText: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}
