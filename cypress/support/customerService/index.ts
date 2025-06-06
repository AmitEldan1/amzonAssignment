
Cypress.Commands.add("clickElement", (locator: string) => {
    cy.get(locator).click();
  });