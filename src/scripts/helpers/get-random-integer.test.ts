import { getRandomInteger } from "./get-random-integer";

describe("getRandomInteger", () => {
    test("should return the max value", () => {
        Math.random = jest.fn(() => 1);
        expect(getRandomInteger(99)).toBe(99);
    });

    test("should return 99 if max is greater than it", () => {
        Math.random = jest.fn(() => 1);
        expect(getRandomInteger(100)).toBe(99);
    });

    test("should return a number rounded up to the next largest whole number", () => {
        Math.random = jest.fn(() => 0.14);
        expect(getRandomInteger(10)).toBe(2);
    });
});