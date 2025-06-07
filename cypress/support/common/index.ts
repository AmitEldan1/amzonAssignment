import "./checks";
import "./menu";
import "./searching";

Cypress.Commands.add("openWebsiteInEngish", () => {
  cy.visit("/", {
    onBeforeLoad(win) {
      Object.defineProperty(win.navigator, "language", { value: "en-US" });
      Object.defineProperty(win.navigator, "languages", {
        value: ["en-US", "en"],
      });
    },
  });
});

Cypress.Commands.add("clickElement", (locator: string) => {
  cy.get(locator).click({ force: true });
});

Cypress.Commands.add(
  "filterElementByEqualText",
  (locator: string, expectedText: string) => {
    cy.get(locator).filter(
      (index, currentElement) => currentElement.textContent === expectedText,
    );
  },
);

Cypress.Commands.add(
  "filterElementByincludedText",
  (locator: string, expectedText: string) => {
    cy.get(locator).filter((index, currentElement) =>
      currentElement.textContent.includes(expectedText),
    );
  },
);
