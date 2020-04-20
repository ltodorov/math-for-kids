import getOperator, { ArithmeticSign } from "./get-operator";
import getMaxNumber from "./get-max-number";
import getRandomNumber from "./get-random-number";

export interface Expression {
    /**
     * First number in the expression
     */
    num1: number;
    /**
     * Second number in the expression
     */
    num2: number;
    /**
     * Arithmetic operator
     */
    operator: ArithmeticSign;
}

/**
 * Get a random expression
 * @param search {string} a search string also known as a query string
 */
function getExpression(search: string): Expression {
    const operator = getOperator(search);
    const isSubstraction = operator === "-";
    const max = getMaxNumber(search);
    const num1 = getRandomNumber(max);
    const num2 = getRandomNumber(max);
    return {
        num1: isSubstraction ? Math.max(num1, num2) : num1,
        num2: isSubstraction ? Math.min(num1, num2) : num2,
        operator
    };
}

export default getExpression;