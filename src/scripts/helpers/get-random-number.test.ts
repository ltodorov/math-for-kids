import { getRandomNumber } from "./get-random-number";

describe("getRandomNumber", () => {
    it("should return the max value if Math.random() returns 0.99", () => {
        Math.random = jest.fn(() => 0.99);
        expect(getRandomNumber(99)).toBe(99);
    });

    it("should return 1 if Math.random() returns 0", () => {
        Math.random = jest.fn(() => 0);
        expect(getRandomNumber(99)).toBe(1);
    });

    it("should return a number rounded up to the next greatest whole number", () => {
        Math.random = jest.fn(() => 0.14);
        expect(getRandomNumber(30)).toBe(5);
        expect(getRandomNumber()).toBe(2);
    });
});