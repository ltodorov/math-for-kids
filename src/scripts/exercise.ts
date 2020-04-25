import { Expression, getExpression } from "./helpers/get-expression";
import { ParsedQuery, getParsedQueryParams } from "./helpers/get-parsed-query-params";
import { calculate } from "./helpers/calculate";

/**
 * Exercise class
 * @class
 */
export class Exercise {

    /**
     * Parsed URL query string params
     */
    queryParams: ParsedQuery;

    /**
     * Parts of the exercise expression - terms and operator
     */
    expression!: Expression;

    /**
     * Create an instance of Exercise class
     */
    constructor() {
        this.queryParams = getParsedQueryParams(location.search);
        this.createExercise();
    }

    /**
     * Create a new exercise
     */
    createExercise() {
        this.expression = getExpression(this.queryParams);
    }

    /**
     * Check if the answer matches the expression result
     * @param {number} answer The integer that should be verified
     */
    checkAnswer(answer: number): boolean {
        return answer === calculate(this.expression);
    }
}