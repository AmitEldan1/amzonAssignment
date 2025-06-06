import { mainMenu } from "../../fixtures/locators";


const pageTitle = 'Customer Service';
const { mainMenuOptions } = mainMenu;

describe("Search subtopics in Customer Service", () => {

  beforeEach(() =>
    cy.navigateFromMenu(mainMenuOptions, pageTitle)
  );

  it(``, () =>{}
    //cy
    //  .validateMainMenuOptions()
    // .verifyCustomTagSelectedCaption());
  );
});
