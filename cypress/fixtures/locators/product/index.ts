import { Locators } from "../../types";
import { getByClassName, getById } from "../common";

export const product: Locators = {
  productTitle: getById("productTitle"),
  priceDisplay: `${getById("corePriceDisplay_desktop_feature_div")} ${getByClassName("aok-offscreen")}`,
  colorDisplay: getById("inline-twister-expanded-dimension-text-color_name"),
  sizeDisplay: getById("inline-twister-expanded-dimension-text-size_name"),
  selectOptions:
    "[data-csa-c-content-id=twister-desktop-twister-swatch-swatchAvailable] input",
  quantityButoon: getById("a-autoid-0-announce"),
  quantityDisplay: `${getById("selectQuantity")} ${getByClassName("a-dropdown-prompt")}`,
  quantityList: getById("desktop_qualifiedBuyBox"),
  addToCartButoon: getById("add-to-cart-button"),
  availabilityDisplay: `${getById("availability")} span`,
};
