import { getOperator } from "./get-operator";

describe("getOperator", () => {
    describe("based on an index", () => {
        it("should return '+' if index 0", () => {
            expect(getOperator(0)).toBe("+");
        });

        it("should return '-' if index 1", () => {
            expect(getOperator(1)).toBe("-");
        });

        it("should return '*' if index 2", () => {
            expect(getOperator(2)).toBe("*");
        });

        it("should return '/' if index 3", () => {
            expect(getOperator(3)).toBe("/");
        });

        it("should throw an error if index < 0 or > 3", () => {
            expect(() => getOperator(-1)).toThrowError("Operator index -1 is not in range [0-3].");
            expect(() => getOperator(4)).toThrowError("Operator index 4 is not in range [0-3].");
        });
    });

    describe("based on a random value", () => {
        it("should return +", () => {
            Math.random = jest.fn()
                .mockImplementationOnce(() => 0)
                .mockImplementation(() => 0.249);
            expect(getOperator()).toBe("+");
            expect(getOperator()).toBe("+");
        });

        it("should return -", () => {
            Math.random = jest.fn()
                .mockImplementationOnce(() => 0.25)
                .mockImplementation(() => 0.499);
            expect(getOperator()).toBe("-");
            expect(getOperator()).toBe("-");
        });

        it("should return *", () => {
            Math.random = jest.fn()
                .mockImplementationOnce(() => 0.5)
                .mockImplementation(() => 0.749);
            expect(getOperator()).toBe("*");
            expect(getOperator()).toBe("*");
        });

        it("should return /", () => {
            Math.random = jest.fn()
                .mockImplementationOnce(() => 0.75)
                .mockImplementation(() => 0.99);
            expect(getOperator()).toBe("/");
            expect(getOperator()).toBe("/");
        });
    });
});