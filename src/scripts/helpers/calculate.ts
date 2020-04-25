import { Expression } from "./get-expression";
import { ArithmeticSign } from "./get-operator";

type Formula = (term1: number, term2: number) => number;

const OPERATIONS: Record<ArithmeticSign, Formula> = {
    "+": (term1, term2) => term1 + term2,
    "-": (term1, term2) => term1 - term2,
    "*": (term1, term2) => term1 * term2
}

/**
 * Calculate an arithmetic operation
 * @param {Object} exp
 * @param {string} exp.operator
 * @param {number} exp.term1
 * @param {number} exp.term2
 */
export function calculate(exp: Expression): number {
    const formula = OPERATIONS[exp.operator];
    if (typeof formula !== "function") {
        throw new Error("Unsupported operation!");
    }
    return formula(exp.term1, exp.term2);
}