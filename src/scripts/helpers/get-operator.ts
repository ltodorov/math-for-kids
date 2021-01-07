import { ArithmeticSign } from "@scripts/types";

const operators: ArithmeticSign[] = ["+", "-", "*"];

/**
 * Get an arithmetic operator
 * It returns a specific operator if we pass in argument or
 * it returns a random operator
 * If the operatorIndex is greater than OPERATORS.length it returns "*"
 * @param {number} [operatorIndex] Index of the operator in ["+", "-", "*"]
 */
function getOperator(operatorIndex?: number): ArithmeticSign {
    const length = operators.length;
    const index = typeof operatorIndex === "number" ?
        Math.min(operatorIndex, length - 1) :
        Math.floor(Math.random() * length);
    return operators[index];
}

export {
    getOperator,
    operators
};