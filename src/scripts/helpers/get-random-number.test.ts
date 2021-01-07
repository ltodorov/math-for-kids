import { getRandomNumber } from "./get-random-number";

describe("getRandomNumber", () => {
    test("should return the max value if Math.random() returns ~ 1", () => {
        Math.random = jest.fn(() => 0.99);
        expect(getRandomNumber(99)).toBe(99);
    });

    test("should return 1 if Math.random() returns 0", () => {
        Math.random = jest.fn(() => 0);
        expect(getRandomNumber(99)).toBe(1);
    });

    test("should return a number rounded down to the next lowest whole number + 1", () => {
        Math.random = jest.fn(() => 0.14);
        expect(getRandomNumber(10)).toBe(2);
    });
});