import { Exercise } from "@scripts/models/exercise";
import { getOperator } from "./get-operator";
import { getRandomNumber } from "./get-random-number";

interface ExerciseOptions {
    operatorIndex?: number;
    max?: number;
}

function getExercise(options: ExerciseOptions): Exercise {
    const operator = getOperator(options.operatorIndex);
    let term1 = getRandomNumber(options.max);
    const term2 = getRandomNumber(options.max);

    if (operator === "-") {
        term1 = term1 + term2;
    }

    if (operator === "/") {
        term1 = term1 * term2;
    }

    return {
        operator,
        term1,
        term2
    };
}

export {
    getExercise,
    ExerciseOptions
};