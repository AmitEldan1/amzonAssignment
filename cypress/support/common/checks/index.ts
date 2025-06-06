import { pageContainer } from "../../../fixtures/locators";
import { ElementsTextData } from "../../../fixtures/types";

Cypress.Commands.add("checkCurrentUrl", (url: string) => {
    cy.get(pageContainer).should('be.visible')
    cy.url().should('eq', `${Cypress.config('baseUrl')}/${url}`)
  });
  
  Cypress.Commands.add("checkElementCount", (locator: string, length: number) => {
    cy.get(locator).should('have.length', length)
  });
  
  
  Cypress.Commands.add("checkElementsText", (elementsTextData: ElementsTextData) => {
    elementsTextData.forEach(({ locator, expectedText }) =>
      cy.get(locator).should('have.text', expectedText))
  });