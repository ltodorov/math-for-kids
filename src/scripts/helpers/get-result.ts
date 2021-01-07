import { ERROR } from "@scripts/dicts/errors";
import { ArithmeticSign, ExpressionLeft } from "@scripts/types";

type Formula = (term1: number, term2: number) => number;

const operations: Record<ArithmeticSign, Formula> = {
    "+": (term1, term2) => term1 + term2,
    "-": (term1, term2) => term1 - term2,
    "*": (term1, term2) => term1 * term2
}

/**
 * Calculate and get the result of an arithmetic operation
 * @param {Object} exp
 * @param {string} exp.operator
 * @param {number} exp.term1
 * @param {number} exp.term2
 * @returns {number} The result of the arithmetic operation
 */
function getResult(exp: ExpressionLeft): number {
    const formula = operations[exp.operator];
    if (typeof formula !== "function") {
        throw new Error(ERROR[100]);
    }
    return formula(exp.term1, exp.term2);
}

export {
    getResult
};