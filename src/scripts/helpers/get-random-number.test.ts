import getRandomNumber from "./get-random-number";

describe("getRandomNumber", () => {
    test("should return the max value", () => {
        Math.random = jest.fn(() => 1);
        const max = 99;
        expect(getRandomNumber(max)).toBe(99);
    });

    test("should return 99 if max is greater than it", () => {
        Math.random = jest.fn(() => 1);
        const max = 100;
        expect(getRandomNumber(max)).toBe(99);
    });

    test("should return a number rounded up to the next largest whole number", () => {
        Math.random = jest.fn(() => 0.14);
        const max = 10;
        expect(getRandomNumber(max)).toBe(2);
    });
});