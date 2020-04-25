/**
 * Standard arithmetic operators
 */
export type ArithmeticSign = "+" | "-" | "*";

const OPERATORS: ArithmeticSign[] = ["+", "-", "*"];

/**
 * Get an arithmetic operator
 * It returns a specific operator if we pass in argument or
 * it returns a random operator among "+" and "-"
 * If the operatorIndex is greater than OPERATORS.length it returns "*"
 * @param {number} [operatorIndex] Index of the operator in ["+", "-", "*"]
 */
export function getOperator(operatorIndex?: number): ArithmeticSign {
    const length = OPERATORS.length;
    const index = typeof operatorIndex === "number" ?
        Math.min(operatorIndex, length - 1) :
        Math.round(Math.random());
    return OPERATORS[index];
}