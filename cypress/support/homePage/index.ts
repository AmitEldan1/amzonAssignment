import { chooseLocationModal, mainMenu } from "../../fixtures/locators";

const { selectLocationButton } = mainMenu;
const {
  chooseLocationContainer,
  selectCountryButton,
  countriesList,
  doneButton,
} = chooseLocationModal;

Cypress.Commands.add("chooseLocation", (country: string) => {
  cy.clickElement(selectLocationButton)
    .wait(2000)
    .get(chooseLocationContainer)
    .find(selectCountryButton)
    .click()
    .get(countriesList)
    .contains(country)
    .click()
    .clickElement(doneButton)
    .wait(2000);
});
