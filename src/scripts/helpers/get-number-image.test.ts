import { getNumberImage } from "./get-number-image";

describe("getNumberImage", () => {
    it("should return a random number image [0-9]", () => {
        for (let i = 0; i < 10; i += 1) {
            Math.random = jest.fn(() => i / 10);
            expect(getNumberImage()).toBe(`${i}.svg`);
        }
    });
});