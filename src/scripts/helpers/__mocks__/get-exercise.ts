import { Exercise } from "@scripts/models/exercise";

function getExercise(): Exercise {
    return {
        operator: "+",
        term1: 2,
        term2: 1
    };
}

export {
    getExercise
};