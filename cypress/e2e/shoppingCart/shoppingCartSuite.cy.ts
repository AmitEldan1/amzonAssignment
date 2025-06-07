import {
  pencil,
  pencils,
  productSearchData,
  scissor,
} from "../../fixtures/data";

const countryForChoosing = "Israel";
const scissorUrl =
  "/Scissors-iBayam-Crafting-Scrapbooking-Knitting/dp/B07H3QKN2Z";
const products = [pencil, scissor];
const productsForFreeShipping = [pencils, scissor];
const productsNames = products.map(({ name }) => name);

describe("Adding Products to the Shopping Cart and Performing Various Validations", () => {
  beforeEach(() =>
    cy
      .chooseLocation(countryForChoosing)
      .addProductToCart(pencil, productSearchData)
      .addProductToCart(scissor, null, scissorUrl, true)
      .validateShoopingCard(productsNames),
  );

  it(`free shipping is not applied`, () => {
    cy.verifyFreeShipping(products);
  });

  it(`free shipping is applied`, () => {
    cy.addProductToCart(pencils, productSearchData)
      .validateShoopingCard(productsNames)
      .verifyFreeShipping(productsForFreeShipping);
  });

  it(`Cart persists after reload`, () => {
    cy.reload().validateShoopingCard(productsNames);
  });

  afterEach(() => cy.deleteAllCartItems());
});
