import getResult from "./get-result";
import { Expression } from "./get-expression";

describe("getResult", () => {
    test("should return sum", () => {
        expect(getResult({
            num1: 1,
            num2: 2,
            operator: "+"
        })).toBe(3);
    });

    test("should return difference", () => {
        expect(getResult({
            num1: 3,
            num2: 2,
            operator: "-"
        })).toBe(1);
    });

    test("should return product", () => {
        expect(getResult({
            num1: 2,
            num2: 3,
            operator: "*"
        })).toBe(6);
    });
});