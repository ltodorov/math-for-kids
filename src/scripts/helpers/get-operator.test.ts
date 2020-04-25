import { getOperator } from "./get-operator";

describe("getOperator", () => {
    describe("based on an index", () => {
        test("should return +", () => {
            Math.random = jest.fn(() => 1);
            expect(getOperator(0)).toBe("+");
        });

        test("should return -", () => {
            expect(getOperator(1)).toBe("-");
        });

        test("should return *", () => {
            expect(getOperator(2)).toBe("*");
            expect(getOperator(3)).toBe("*");
        });
    });

    describe("based on a random value", () => {
        test("should return +", () => {
            Math.random = jest.fn(() => 0);
            expect(getOperator()).toBe("+");
        });

        test("should return -", () => {
            Math.random = jest.fn(() => 1);
            expect(getOperator()).toBe("-");
        });
    });
});