import { ArithmeticOperation } from "@scripts/models/exercise";

const allowedOperations = [
    "addition",
    "subtraction",
    "multiplication",
    "division",
];

/**
 * Checks if operation is a valid arithmetic operation
 * @param {string} operation Arithmeric operation name
 * @returns {boolean} Boolean result of the check
 */
function isArithmeticOperation(operation: string): operation is keyof ArithmeticOperation {
    return allowedOperations.includes(operation);
}

export {
    isArithmeticOperation,
};