import { ArithmeticSign } from "@scripts/models/exercise";

const operators: ArithmeticSign[] = ["+", "-", "*", "/"];

const length = operators.length;

/**
 * Get an arithmetic operator.
 * It returns an operator based on the provided index or
 * it returns a random operator.
 * If the operatorIndex is lower than 0 or greater than operators.length,
 * it throws an error.
 * @param {number} [operatorIndex] Index of the operator in ["+", "-", "*", "/"]
 */
function getOperator(operatorIndex?: number): ArithmeticSign {
    if (typeof operatorIndex !== "number") {
        operatorIndex = Math.floor(Math.random() * length);
    }

    const operator = operators[operatorIndex];

    if (typeof operator === "undefined") {
        throw new Error(`Operator index ${operatorIndex} is not in range [0-${length - 1}].`);
    }

    return operator;
}

export {
    getOperator
};