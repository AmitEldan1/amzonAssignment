import { CustomerServiceTopicSearchData } from "../../fixtures/data";
import { mainMenu } from "../../fixtures/locators";

const pageTitle = "Customer Service";
const { mainMenuOptions } = mainMenu;

describe("Search topics in Customer Service", () => {
  beforeEach(() => cy.navigateFromMenu(mainMenuOptions, pageTitle));

  it(``, () =>
    cy
      .searchFor(CustomerServiceTopicSearchData)
      .verifyFirstResultNavigation(CustomerServiceTopicSearchData));
});
