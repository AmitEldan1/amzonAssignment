import { customerService } from "../../locators/customerService/Index";
import { SearchData } from "../../types";

export const { searchField, searchResults, resultsLinks} = customerService

export const searchCustomerServiceTopicData: SearchData = {
    searchFieldLocator: searchField,
    searchResultsLocator: searchResults,
    resultsLinksLocator: resultsLinks,
    textForSearch: 'where is my stuff',
    expectedTargetUrl: 'gp/help/customer/display.html',
    isTimestampInUrl: true
}