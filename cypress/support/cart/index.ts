import { messages } from "../../fixtures/data";
import { cart, mainMenu } from "../../fixtures/locators";
import { Product, UpdatedProduct } from "../../fixtures/types/product";

const {
  titleCartProduct,
  mainDetails,
  quantityCartProduct,
  priceCartProduct,
  cartItemsList,
  totalPrice: totalPriceLocator,
  itemsNumber: itemsNumberLocator,
  deleteButton,
  freeShippingMessage: messageLocator,
} = cart;
const { cartCountButton } = mainMenu;
const {
  cart: { freeShippingSuccessMessage, freeShippingAlertMessage },
} = messages;

Cypress.Commands.add("getCartItemData", (productName: string) => {
  cy.get<UpdatedProduct>(`@${productName}`).then((product) => {
    const totalPriceForCurrentProduct =
      parseFloat(product.price.replace("$", "")) *
      parseFloat(product.quantity.trim());

    const dataForChecking = [
      { element: titleCartProduct, dataForChecking: productName },
      {
        element: priceCartProduct,
        dataForChecking: `${totalPriceForCurrentProduct}`,
      },
      { element: mainDetails, dataForChecking: product.color },
      { element: quantityCartProduct, dataForChecking: product.quantity },
    ];

    const isproductwithSize =
      product.size &&
      dataForChecking.push({
        element: mainDetails,
        dataForChecking: product.size,
      });

    return dataForChecking;
  });
});

Cypress.Commands.add("validateCartItems", (itemsNames: string[]) => {
  itemsNames.forEach((itemName) => {
    cy.filterElementByincludedText(cartItemsList, itemName).then(
      (currentCartItem) => {
        cy.getCartItemData(itemName).then((cartItemDataForChecking) =>
          cartItemDataForChecking.forEach(({ element, dataForChecking }) =>
            cy
              .wrap(currentCartItem)
              .find(element)
              .should("contain.text", dataForChecking),
          ),
        );
      },
    );
  });
});

Cypress.Commands.add("getTotalCartDetalis", (itemsNames: string[]) => {
  let totalPrice = 0,
    totalQuantity = 0;

  itemsNames.forEach((itemName) => {
    cy.get<UpdatedProduct>(`@${itemName}`).then(({ price, quantity }) => {
      const quantityNumber = parseFloat(quantity.trim());
      totalPrice += parseFloat(price.replace("$", "")) * quantityNumber;
      totalQuantity += quantityNumber;

      return [
        { element: cartCountButton, dataForChecking: `${totalQuantity}` },
        { element: itemsNumberLocator, dataForChecking: `${totalQuantity}` },
        { element: totalPriceLocator, dataForChecking: `${totalPrice}` },
      ];
    });
  });
});

Cypress.Commands.add("validateTotalCartDetalis", (itemsNames: string[]) => {
  cy.getTotalCartDetalis(itemsNames).then((dataForChecking) =>
    dataForChecking.forEach(({ element, dataForChecking }) =>
      cy.checkContainedText(dataForChecking, element),
    ),
  );
});

Cypress.Commands.add("validateShoopingCard", (itemsNames: string[]) =>
  cy
    .clickElement(cartCountButton)
    .validateCartItems(itemsNames)
    .validateTotalCartDetalis(itemsNames),
);

Cypress.Commands.add("verifyFreeShipping", (products: Product[]) =>
  products.forEach(({ shippingFreeFrom, name: productNmae }) => {
    shippingFreeFrom &&
      cy.getCartItemData(productNmae).then((itemData) => {
        const totalProductPrice = itemData.find(
          ({ element }) => element === priceCartProduct,
        ).dataForChecking;
        const freeShippingMessage =
          parseFloat(totalProductPrice) > shippingFreeFrom
            ? freeShippingSuccessMessage
            : freeShippingAlertMessage;

        cy.checkContainedText(freeShippingMessage, messageLocator).wait(3000);
      });
  }),
);

Cypress.Commands.add("deleteAllCartItems", () =>
  cy
    .get(cartItemsList)
    .each((item) => cy.wrap(item).find(deleteButton).click()),
);
