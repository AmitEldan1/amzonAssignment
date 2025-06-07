import { mainMenu } from "../../../locators";
import { productsList } from "../../../locators/productsList";
import {
  ElementsTextData,
  Menu,
  NavigationButtons,
  SearchData,
} from "../../../types";

const { allButtonText, mainMenuOptions, mainSearchField } = mainMenu;
const { searchResultsList } = productsList;

export const mainNavigationButtons: NavigationButtons = [
  {
    optionText: `Today's Deals`,
    targetUrl: "gp/goldbox?ref_=nav_cs_gb",
  },
  {
    optionText: "Registry",
    targetUrl: "registries?ref_=nav_cs_registry&ref_=nav_cs_registry",
  },
  {
    optionText: "Prime Video",
    targetUrl:
      "Amazon-Video/b/?ie=UTF8&node=2858778011&ref_=nav_cs_prime_video",
  },
  {
    optionText: "Gift Cards",
    targetUrl: "gift-cards/b/?ie=UTF8&node=2238192011&ref_=nav_cs_gc",
  },
  {
    optionText: "Customer Service",
    targetUrl:
      "gp/help/customer/display.html?nodeId=508510&ref_=nav_cs_customerservice",
  },
  {
    optionText: "Sell",
    targetUrl:
      "b/?_encoding=UTF8&ld=AZUSSOA-sell&node=12766669011&ref_=nav_cs_sell",
  },
];

export const allButtonDetails: ElementsTextData = [
  { locator: allButtonText, expectedText: "All" },
];

export const mainMenuDetails: Menu = {
  navigationButtons: mainNavigationButtons,
  elementsText: allButtonDetails,
  menuLocator: mainMenuOptions,
};

export const productSearchData: SearchData = {
  searchFieldLocator: mainSearchField,
  searchResultsLocator: searchResultsList,
  textForSearch:
    "Bostitch Office Personal Electric Pencil Sharpener, Powerful Stall-Free Motor, High Capacity Shavings Tray, Gray (EPS4-KTGRAY)",
  expectedTargetUrl: "Bostitch-Personal-Electric-Sharpener-EPS4-KTGRAY",
  isTimestampInUrl: true,
};
