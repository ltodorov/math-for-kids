import { getExpression } from "./get-expression";
import { ParsedQuery } from "./get-parsed-query-params";

describe("getExpression", () => {
    let queryParams: ParsedQuery = {};
    let inc: number = 1;

    afterEach(() => {
        inc = 1;
    });

    test("should return addition when Math.random() < 0.5", () => {
        Math.random = jest.fn(() => (1 + inc++) / 10);
        expect(getExpression(queryParams)).toEqual({
            operator: "+",
            term1: 3,
            term2: 4
        });
    });

    test("should return substraction when Math.random() >= 0.5", () => {
        Math.random = jest.fn(() => (4 + inc++) / 10);
        expect(getExpression(queryParams)).toEqual({
            operator: "-",
            term1: 7,
            term2: 6
        });
    });

    test("should return substraction without switching terms", () => {
        inc = 9;
        Math.random = jest.fn(() => inc-- / 10);
        expect(getExpression(queryParams)).toEqual({
            operator: "-",
            term1: 8,
            term2: 7
        });
    });

    test("should return a random value for term2 only", () => {
        queryParams = {
            operatorIndex: 0,
            term: 7
        };
        Math.random = jest.fn(() => 0.1);
        expect(getExpression(queryParams)).toEqual({
            operator: "+",
            term1: 7,
            term2: 1
        });
    });

    test("should return a random value for term2 equal to term1", () => {
        queryParams = {
            term: 7
        };
        Math.random = jest.fn(() => 1);
        expect(getExpression(queryParams)).toEqual({
            operator: "-",
            term1: 7,
            term2: 7
        });
    });
});