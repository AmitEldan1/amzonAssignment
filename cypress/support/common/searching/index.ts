import { SearchData } from "../../../fixtures/types";

Cypress.Commands.add(
  "searchFor",
  ({ searchFieldLocator, textForSearch }: SearchData) => {
    cy.get(searchFieldLocator).clear().type(`${textForSearch}{enter}`);
  },
);

Cypress.Commands.add("getFirstResult", (searchResultsLocator: string) => {
  cy.get(searchResultsLocator).first();
});

Cypress.Commands.add(
  "getFirstResultLink",
  (searchResultsLocator: string, resultsLinksLocator: string) => {
    cy.getFirstResult(searchResultsLocator).then((firstResult) =>
      cy.wrap(firstResult).find(resultsLinksLocator).last(),
    );
  },
);

Cypress.Commands.add(
  "getAccessToProduct",
  (searchResultsLocator: string, resultsLinksLocator: string) =>
    resultsLinksLocator
      ? cy.getFirstResultLink(searchResultsLocator, resultsLinksLocator)
      : cy.getFirstResult(searchResultsLocator),
);

Cypress.Commands.add(
  "verifyFirstResultNavigation",
  (searchData: SearchData) => {
    const {
      searchResultsLocator,
      resultsLinksLocator,
      expectedTargetUrl,
      isTimestampInUrl,
    } = searchData;

    cy.getAccessToProduct(searchResultsLocator, resultsLinksLocator)
      .click()
      .checkCurrentUrl(expectedTargetUrl, isTimestampInUrl);
  },
);
