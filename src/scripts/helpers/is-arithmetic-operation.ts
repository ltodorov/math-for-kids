import { ArithmeticOperation } from "@scripts/models/exercise";

const allowedOperations = [
    "addition",
    "subtraction",
    "multiplication",
    "division",
];

function isArithmeticOperation(operation: string): operation is keyof ArithmeticOperation {
    return allowedOperations.includes(operation);
}

export {
    isArithmeticOperation,
};