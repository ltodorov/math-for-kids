import { getMaxNumber } from "./get-max-number";

describe("getMaxNumber", () => {
    it("should return the default max number if no arguments", () => {
        expect(getMaxNumber()).toBe(10);
    });

    it("should return the passed in max number", () => {
        expect(getMaxNumber(20)).toBe(20);
    });

    it("should return two digits max", () => {
        expect(getMaxNumber(100)).toBe(99);
    });
});