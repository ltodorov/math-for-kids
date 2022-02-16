import { ExerciseProps } from "@scripts/models/exercise";
import { isArithmeticOperation } from "./is-arithmetic-operation";

type ParsedQuery = {
    [K in string]: number;
};

/**
 * Parses the location object and returns configuration
 * @param location Location (URL) object
 * @returns Configuration object for getting a new exercise
 */
function getExerciseProps(location: Location): ExerciseProps {
    const parsedOperation = location.hash.slice(1);
    const operation = isArithmeticOperation(parsedOperation) ?
        parsedOperation :
        "addition";
    const withoutLeadingSearch = location.search.slice(1); // Remove the leading "?"
    const splitQuery = withoutLeadingSearch.split("&");
    const parsedQuery: ParsedQuery = splitQuery.reduce(
        (acc: ParsedQuery, str: string) => {
            const [key, value] = str.split("=");
            const intValue = parseInt(value, 10);

            if (!isNaN(intValue) && intValue !== 0) {
                acc[key] = intValue;
            }

            return acc;
        }, {});

    return {
        operation,
        ...parsedQuery,
    };
}

export {
    getExerciseProps,
};
