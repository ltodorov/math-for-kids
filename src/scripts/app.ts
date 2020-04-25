import { ParsedQuery, getParsedQueryParams } from "./helpers/get-parsed-query-params";
import { Expression, getExpression } from "./helpers/get-expression";

/**
 * Application class
 * @class
 */
export class App {
    queryParams: ParsedQuery;
    expression!: Expression;

    constructor() {
        this.queryParams = getParsedQueryParams(location.search);
        this.createExercise();
    }

    createExercise() {
        this.expression = getExpression(this.queryParams);
    }
}