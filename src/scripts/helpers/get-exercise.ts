import type { ArithmeticOperation, Formula, Exercise, ExerciseProps } from "@scripts/models/exercise";
import { getRandomNumber } from "./get-random-number";
import { isArithmeticOperation } from "./is-arithmetic-operation";

const formulas: {
    [P in keyof ArithmeticOperation]: Formula;
} = {
    addition: (term1, term2) => term1 + term2,
    subtraction: (term1, term2) => term1 - term2,
    multiplication: (term1, term2) => term1 * term2,
    division: (term1, term2) => term1 / term2,
};

const operators: ArithmeticOperation = {
    addition: "+",
    subtraction: "-",
    multiplication: "*",
    division: "/",
};

/**
 * Gets an exercise based on provided argument
 * @param param0 Exercise configuration object
 * @returns Exercise
 */
function getExercise({ operation, term, max }: ExerciseProps): Exercise {
    if (!isArithmeticOperation(operation)) {
        throw new Error(`Unsupported arithmetical operation ${operation}`);
    }

    const operator = operators[operation];
    let term1 = getRandomNumber(max);
    const term2 = term || getRandomNumber(max);

    if (operator === "-") {
        term1 = term1 + term2;
    } else if (operator === "/") {
        term1 = term1 * term2;
    }

    const result = formulas[operation](term1, term2);

    return {
        operation,
        operator,
        term1,
        term2,
        result,
    };
}

export {
    getExercise,
};
