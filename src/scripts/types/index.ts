/**
 * HTML DOM Element type
 */
type DOMNode = HTMLElement | null;

/**
 * Standard arithmetic operators
 */
type ArithmeticSign = "+" | "-" | "*";

interface Expression {
    /**
     * First number of the expression
     */
    term1: number;
    /**
     * Second number of the expression
     */
    term2: number;
    /**
     * Arithmetic operator
     */
    operator: ArithmeticSign;
}

interface Solution {
    /**
     * Result of the arithmetic operation
     */
    result: number;
}

interface Equation extends Expression, Solution {}

export {
    DOMNode,
    ArithmeticSign,
    Expression,
    Solution,
    Equation
};