import getParsedQueryString from "./get-parsed-query-string";

/**
 * Standard arithmetic operators
 */
export type ArithmeticSign = "+" | "-" | "*";

const OPERATORS: ArithmeticSign[] = ["+", "-"];

/**
 * Get a random arithmetic operator
 * @param search {string} a search string also known as a query string
 */
function getOperator(search: string) {
    const parsedQuery = getParsedQueryString(search);
    const isMiltiplication: boolean = parsedQuery["multi"] ? true : false;
    if (isMiltiplication) {
        // TODO: Add division and use random also for multiplication
        return "*";
    } else {
        return OPERATORS[Math.round(Math.random())];
    }
}

export default getOperator;