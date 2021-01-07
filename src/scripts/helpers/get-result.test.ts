import { getResult } from "./get-result";
import { ArithmeticSign } from "@scripts/types";
import { ERROR } from "@scripts/dicts/errors";

describe("getResult", () => {
    test("should return sum", () => {
        expect(getResult({
            term1: 1,
            term2: 2,
            operator: "+"
        })).toBe(3);
    });

    test("should return difference", () => {
        expect(getResult({
            term1: 3,
            term2: 2,
            operator: "-"
        })).toBe(1);
    });

    test("should return product", () => {
        expect(getResult({
            term1: 2,
            term2: 3,
            operator: "*"
        })).toBe(6);
    });

    test("should throw an error if operation is not defined", () => {
        expect(() => getResult({
            term1: 6,
            term2: 2,
            operator: "/" as ArithmeticSign
        })).toThrow(ERROR[100]);
    });
});