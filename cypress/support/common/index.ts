import './checks';
import './menu';
import './searching';
import { SearchData } from "../../fixtures/types";

Cypress.Commands.add("clickElement", (locator: string) => {
  cy.get(locator).click();
});


Cypress.Commands.add("searchFor", ({searchFieldLocator, textForSearch}: SearchData) => {
  cy.get(searchFieldLocator).clear().type(`${textForSearch}{enter}`);
});

Cypress.Commands.add("filterElementByEqualText", (locator: string, expectedText: string) => {
  cy.get(locator).filter((index, currentElement) =>
    currentElement.textContent === expectedText)
});