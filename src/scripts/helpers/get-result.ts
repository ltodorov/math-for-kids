import { Expression } from "./get-expression";
import { ArithmeticSign } from "./get-operator";

type Calculate = (num1: number, num2: number) => number;

// TODO: Default action?
const OPERATIONS: Record<ArithmeticSign, Calculate> = {
    "+": (num1, num2) => num1 + num2,
    "-": (num1, num2) => num1 - num2,
    "*": (num1, num2) => num1 * num2
}

/**
 * Get result of an arithmetic operation
 * @param exp
 * @param exp.operator {string}
 * @param exp.num1 {number}
 * @param exp.num2 {number}
 */
function getResult(exp: Expression) {
    return OPERATIONS[exp.operator](exp.num1, exp.num2);
}

export default getResult;