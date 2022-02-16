import { getRandomNumber } from "../get-random-number";

describe("getRandomNumber", () => {
    const mock = jest.fn();

    test("returns the max value if Math.random() returns 0.99", () => {
        Math.random = mock.mockImplementation(() => 0.99);
        expect(getRandomNumber()).toBe(9);
        expect(getRandomNumber(20)).toBe(20);
    });

    test("returns 1 if Math.random() returns 0", () => {
        Math.random = mock.mockImplementation(() => 0);
        expect(getRandomNumber()).toBe(1);
        expect(getRandomNumber(20)).toBe(1);
    });

    test("returns a number rounded up to the next greatest whole number", () => {
        Math.random = mock
            .mockImplementationOnce(() => 0.16)
            .mockImplementation(() => 0.25);
        expect(getRandomNumber()).toBe(2);
        expect(getRandomNumber(30)).toBe(8);
    });
});
