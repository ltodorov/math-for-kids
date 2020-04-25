import { ParsedQuery } from "./get-parsed-query-params";
import { ArithmeticSign, getOperator } from "./get-operator";
import { getMaxInteger } from "./get-max-integer";
import { getRandomInteger } from "./get-random-integer";

export interface Expression {
    /**
     * First integer of the expression
     */
    term1: number;
    /**
     * Second integer of the expression
     */
    term2: number;
    /**
     * Arithmetic operator
     */
    operator: ArithmeticSign;
}

/**
 * Get a random expression
 * @param {Object.<string, number>} queryParams The parsed URL query params
 */
export function getExpression(queryParams: ParsedQuery): Expression {
    const operator = getOperator(queryParams.operatorIndex);
    const isSubstraction = operator === "-";
    const max = getMaxInteger(queryParams.term || queryParams.max);
    const term1 = typeof queryParams.term === "number" ? max : getRandomInteger(max);
    const term2 = getRandomInteger(max);
    return {
        term1: isSubstraction ? Math.max(term1, term2) : term1,
        term2: isSubstraction ? Math.min(term1, term2) : term2,
        operator
    };
}