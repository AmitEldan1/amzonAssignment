import { ElementsTextData, Menu, SearchData } from "../fixtures/types";
import { Product } from "../fixtures/types/product";
import "./e2e";

declare global {
  namespace Cypress {
    interface Chainable {
      validateMenuOptions(manu: Menu): Chainable<JQuery<HTMLElement>>;
      clickElement(locator: string): Chainable<JQuery<HTMLElement>>;
      checkCurrentUrl(
        url: string,
        isTimestampInUrl?: boolean,
      ): Chainable<JQuery<HTMLElement>>;
      searchFor(searchData: SearchData): Chainable<JQuery<HTMLElement>>;
      navigateFromMenu(
        menuLocator: string,
        pageTitle: string,
      ): Chainable<JQuery<HTMLElement>>;
      checkElementsText(
        elementsTextData: ElementsTextData,
      ): Chainable<JQuery<HTMLElement>>;
      checkElementCount(
        locator: string,
        length: number,
      ): Chainable<JQuery<HTMLElement>>;
      filterElementByEqualText(
        locator: string,
        expectedText: string,
      ): Chainable<JQuery<HTMLElement>>;
      filterElementByincludedText(
        locator: string,
        expectedText: string,
      ): Chainable<JQuery<HTMLElement>>;
      getFirstResult(
        searchResultsLocator: string,
      ): Chainable<JQuery<HTMLElement>>;
      getFirstResultLink(
        searchResultsLocator: string,
        resultsLinksLocator: string,
      ): Chainable<JQuery<HTMLElement>>;
      chooseLocation(country: string): Chainable<JQuery<HTMLElement>>;
      verifyFirstResultNavigation(
        searchData: SearchData,
      ): Chainable<JQuery<HTMLElement>>;
      getAccessToProduct(
        searchResultsLocator: string,
        resultsLinksLocator: string,
      ): Chainable<JQuery<HTMLElement>>;
      updateProductQuantity(quantity: number): Chainable<JQuery<HTMLElement>>;
      updateProductColor(color: string): Chainable<JQuery<HTMLElement>>;
      isProductAvailable(): Chainable<JQuery<HTMLElement>>;
      getUpdatedProductData(
        name: string,
        withSize?: boolean,
      ): Chainable<JQuery<HTMLElement>>;
      checkContainedText(
        text: string,
        locator: string,
      ): Chainable<JQuery<HTMLElement>>;
      addProductToCart(
        product: Product,
        searchData?: SearchData,
        url?: string,
        withSize?: boolean,
      ): Chainable<JQuery<HTMLElement>>;
      openWebsiteInEngish(): Chainable<JQuery<HTMLElement>>;
      getCartItemData(productName: string): Chainable<CartData>;
      validateCartItems(itemsNames: string[]): Chainable<JQuery<HTMLElement>>;
      getTotalCartDetalis(itemsNames: string[]): Chainable<CartData>;
      validateTotalCartDetalis(
        itemsNames: string[],
      ): Chainable<JQuery<HTMLElement>>;
      validateShoopingCard(
        itemsNames: string[],
      ): Chainable<JQuery<HTMLElement>>;
      verifyFreeShipping(products: Product[]): Chainable<JQuery<HTMLElement>>;
      deleteAllCartItems(): Chainable<JQuery<HTMLElement>>;
    }
  }
}
