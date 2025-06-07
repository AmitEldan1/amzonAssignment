import { productElementsData } from "../../fixtures/data";
import { product } from "../../fixtures/locators";

const { sizeDisplay } = product;

export const isproductwithSize = (withSize: boolean) =>
  withSize &&
  productElementsData.push({ element: sizeDisplay, target: "size" });
