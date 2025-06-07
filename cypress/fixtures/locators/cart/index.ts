import { Locators } from "../../types";
import { getByClassName, getById } from "../common";

export const cart: Locators = {
  cartItemsList: `[data-name=Active Items] [data-csa-c-type=item]`,
  titleCartProduct: getByClassName("sc-item-product-title-cont"),
  priceCartProduct: `${getByClassName("sc-item-price-block")} ${getByClassName("a-offscreen")}`,
  mainDetails: `${getByClassName("sc-grid-content-tail")}${getByClassName("responsive-grid")}`,
  quantityCartProduct: `${getByClassName("sc-quantity-stepper")} ${getByClassName("a-declarative")}`,
  deleteButton: "[data-feature-id=delete-active]",
  totalPrice: getById("sc-subtotal-amount-activecart"),
  itemsNumber: getById("sc-subtotal-label-activecart"),
  freeShippingMessage: getById("gutterCartViewForm"),
};
