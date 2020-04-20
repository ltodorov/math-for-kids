import getParsedQueryString from "./get-parsed-query-string";

const DEFAULT_MAX_NUMBER: number = 10;

/**
 * Get the maximum number that can be used in an expression
 * @param search {string} a search string also known as a query string
 */
function getMaxNumber(search: string): number {
    const parsedQuery = getParsedQueryString(search);
    const max = parsedQuery["max"];
    return max || DEFAULT_MAX_NUMBER;
}

export default getMaxNumber;