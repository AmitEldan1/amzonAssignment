import { Menu } from "../../../fixtures/types";

Cypress.Commands.add(
  "navigateFromMenu",
  (menuLocator: string, pageTitle: string) => {
    cy.filterElementByEqualText(menuLocator, pageTitle).click({ force: true });
  },
);

Cypress.Commands.add(
  "validateMenuOptions",
  ({ navigationButtons, elementsText, menuLocator }: Menu) => {
    navigationButtons.forEach(({ optionText, targetUrl }) => {
      cy.navigateFromMenu(menuLocator, optionText).checkCurrentUrl(targetUrl);
    });

    cy.checkElementCount(menuLocator, navigationButtons.length);
    elementsText && cy.checkElementsText(elementsText);
  },
);
