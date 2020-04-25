import { calculate } from "./calculate";
import { ArithmeticSign } from "./get-operator";

describe("calculate", () => {
    test("should return sum", () => {
        expect(calculate({
            term1: 1,
            term2: 2,
            operator: "+"
        })).toBe(3);
    });

    test("should return difference", () => {
        expect(calculate({
            term1: 3,
            term2: 2,
            operator: "-"
        })).toBe(1);
    });

    test("should return product", () => {
        expect(calculate({
            term1: 2,
            term2: 3,
            operator: "*"
        })).toBe(6);
    });

    test("should throw an error if operation is not defined", () => {
        expect(() => calculate({
            term1: 6,
            term2: 2,
            operator: "/" as ArithmeticSign
        })).toThrow("Unsupported operation!");
    });
});