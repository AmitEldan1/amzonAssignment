import './checks';
import './menu'
import { pageContainer } from "../../fixtures/locators";
import { ElementsTextData } from "../../fixtures/types";

Cypress.Commands.add("clickElement", (locator: string) => {
  cy.get(locator).click();
});


Cypress.Commands.add("searchFor", (locator: string, text: string) => {
  cy.get(locator).clear().type(`${text}{enter}`);
});

Cypress.Commands.add("filterElementByEqualText", (locator: string, expectedText: string) => {
  cy.get(locator).filter((index, currentElement) =>
    currentElement.textContent === expectedText)
});