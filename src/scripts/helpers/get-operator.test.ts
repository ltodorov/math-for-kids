import { getOperator, operators } from "./get-operator";

describe("getOperator", () => {
    describe("based on an index", () => {
        test("should return +", () => {
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
        const operatorsLength: number = operators.length;

        test("should return +", () => {
            Math.random = jest.fn()
                .mockImplementationOnce(() => 0)
                .mockImplementation(() => getUnroundedPart(1 / operatorsLength));
            expect(getOperator()).toBe("+");
            expect(getOperator()).toBe("+");
        });

        test("should return -", () => {
            Math.random = jest.fn()
                .mockImplementationOnce(() => 1 / operatorsLength)
                .mockImplementation(() => getUnroundedPart(2 / operatorsLength));
            expect(getOperator()).toBe("-");
            expect(getOperator()).toBe("-");
        });

        test("should return *", () => {
            Math.random = jest.fn()
                .mockImplementationOnce(() => 2 / operatorsLength)
                .mockImplementation(() => 0.99);
            expect(getOperator()).toBe("*");
            expect(getOperator()).toBe("*");
        });
    });
});

function getUnroundedPart(part: number): number {
    const unrouded = part.toString().slice(0, 4);
    return Number(unrouded);
}