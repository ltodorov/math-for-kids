import { ArithmeticOperation, Formula, Exercise } from "@scripts/models/exercise";
import { getRandomNumber } from "./get-random-number";
import { isArithmeticOperation } from "./is-arithmetic-operation";

interface ExerciseProps {
    operation: string;
    max?: number;
}

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

function getExercise(props: ExerciseProps): Exercise {
    const { operation } = props;

    if (!isArithmeticOperation(operation)) {
        throw new Error(`Unsupported arithmetical operation ${operation}`);
    }

    const operator = operators[operation];
    let term1 = getRandomNumber(props.max);
    const term2 = getRandomNumber(props.max);

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