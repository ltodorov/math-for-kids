/**
 * Standard arithmetic operators
 */
type ArithmeticSign = "+" | "-" | "*" | "/";

interface Exercise {
    /**
     * Arithmetic operator
     */
    operator: ArithmeticSign;

    /**
     * First number of the expression
     */
    term1: number;

    /**
     * Second number of the expression
     */
    term2: number;
}

export {
    ArithmeticSign,
    Exercise
};