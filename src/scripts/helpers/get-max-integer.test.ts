import { getMaxInteger } from "./get-max-integer";

describe("getMaxInteger", () => {
    test("should return DEFAULT_MAX_INT if the argument is undefined", () => {
        expect(getMaxInteger()).toBe(10);
    });

    test("should return the passed in integer", () => {
        expect(getMaxInteger(20)).toBe(20);
    });

    test("should return max two digits", () => {
        expect(getMaxInteger(100)).toBe(99);
    });
});