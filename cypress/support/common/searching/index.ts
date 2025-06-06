import { SearchData } from "../../../fixtures/types";


Cypress.Commands.add("getFirstResultLink", (searchResultsLocator: string, resultsLinksLocator: string) => {
    cy.get(searchResultsLocator).first().find(resultsLinksLocator).last();
});

Cypress.Commands.add("verifyFirstResultNavigation", (searchData: SearchData) => {
    const { searchResultsLocator, resultsLinksLocator, expectedTargetUrl, isTimestampInUrl} = searchData

    resultsLinksLocator && cy.getFirstResultLink(searchResultsLocator, resultsLinksLocator)
        .click()

    cy.checkCurrentUrl(expectedTargetUrl, isTimestampInUrl);
});