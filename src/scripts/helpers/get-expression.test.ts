import { getExpression } from "./get-expression";
import { ParsedQuery } from "./get-parsed-query-params";

describe("getExpression", () => {
    let queryParams: ParsedQuery = {};
    let inc: number = 1;

    test("should return expression parts", () => {
        Math.random = jest.fn(() => {
            const res = (3 + inc) / 10;
            inc += 1;
            return res;
        });
        expect(getExpression(queryParams)).toEqual({
            operator: "+",
            term1: 5,
            term2: 6
        });
        expect(getExpression(queryParams)).toEqual({
            operator: "-",
            term1: 9,
            term2: 8
        });
    });

    test("shouldn't switch number values if term1 > term2", () => {
        inc = 10;
        Math.random = jest.fn(() => {
            inc -= 1;
            return inc / 10;
        });
        expect(getExpression(queryParams)).toEqual({
            operator: "-",
            term1: 8,
            term2: 7
        });
    });

    test("should return random value for the second term", () => {
        queryParams = {
            term: 7
        };
        inc = 10;
        Math.random = jest.fn(() => {
            inc -= 1;
            return inc / 10;
        });
        expect(getExpression(queryParams)).toEqual({
            operator: "-",
            term1: 7,
            term2: 6
        });
        expect(getExpression(queryParams)).toEqual({
            operator: "-",
            term1: 7,
            term2: 5
        });
    });
});