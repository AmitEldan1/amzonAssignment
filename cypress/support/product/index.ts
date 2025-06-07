import {
  availabilityText,
  messages,
  productElementsData,
} from "../../fixtures/data";
import { common, product } from "../../fixtures/locators";
import { SearchData } from "../../fixtures/types";
import { Product } from "../../fixtures/types/product";
import { isproductwithSize } from "../utils";

const {
  colorDisplay,
  selectOptions,
  quantityButoon,
  quantityDisplay,
  quantityList,
  addToCartButoon,
  availabilityDisplay,
} = product;
const { successMessage } = common;

Cypress.Commands.add("updateProductQuantity", (quantity: number) =>
  cy
    .get(quantityDisplay)
    .invoke("text")
    .then(
      (quantityDisplay) =>
        quantityDisplay !== `${quantity} ` &&
        cy
          .clickElement(quantityButoon)
          .get(quantityList)
          .contains(quantity)
          .click(),
    ),
);

Cypress.Commands.add("updateProductColor", (color: string) => {
  cy.get(selectOptions).each((productOption) =>
    cy
      .get(colorDisplay)
      .invoke("text")
      .then((colorDisplay) => {
        colorDisplay.trim() !== color &&
          cy
            .wrap(productOption)
            .click({ force: true })
            .wrap(productOption)
            .should("have.attr", "aria-checked", "true")
            .wait(3000);
      }),
  );
  cy.wait(6000);
});

Cypress.Commands.add("isProductAvailable", () =>
  cy
    .get(availabilityDisplay)
    .should("exist")
    .and("have.text", availabilityText),
);

Cypress.Commands.add(
  "getUpdatedProductData",
  (productName: string, withSize?: boolean) => {
    const updatedProduct = {};

    isproductwithSize(withSize);

    productElementsData.forEach(
      ({ element, target }) =>
        element &&
        cy
          .get(element)
          .invoke("text")
          .then(
            (elementContent) =>
              (updatedProduct[target] = elementContent.trim()),
          ),
    );

    cy.wrap(updatedProduct).as(productName);
  },
);

Cypress.Commands.add(
  "addProductToCart",
  (
    product: Product,
    searchData?: SearchData,
    url?: string,
    withSize?: boolean,
  ) => {
    searchData
      ? cy.searchFor(searchData).verifyFirstResultNavigation(searchData)
      : cy.visit(url);

    cy.updateProductQuantity(product.quantity)
      .updateProductColor(product.color)
      .isProductAvailable()
      .getUpdatedProductData(product.name, withSize)
      .clickElement(addToCartButoon)
      .checkContainedText(messages.product.success, successMessage);
  },
);
