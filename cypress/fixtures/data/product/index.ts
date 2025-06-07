import { product } from "../../locators";
import { Product, UpdatedProduct } from "../../types/product";

const {
  productTitle,
  priceDisplay,
  colorDisplay,
  sizeDisplay,
  selectOptions,
  quantityButoon,
  quantityDisplay,
  quantityList,
  addToCartButoon,
  availabilityDisplay,
} = product;

export const pencil: Product = {
  name: "Pencil",
  color: "Gray",
  quantity: 1,
  shippingFreeFrom: 49,
};

export const pencils: Product = {
  ...pencil,
  quantity: 4,
};

export const scissor: Product = {
  name: "Scissor",
  color: "Red, Black, Blue",
  quantity: 1,
};

export const productElementsData = [
  { element: productTitle, target: "title" },
  { element: colorDisplay, target: "color" },
  { element: priceDisplay, target: "price" },
  { element: quantityDisplay, target: "quantity" },
];

export const availabilityText = " In Stock ";
