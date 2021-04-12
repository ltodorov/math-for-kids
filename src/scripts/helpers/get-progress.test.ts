import { getProgress } from "./get-progress";

describe("getProgress", () => {
    it("should return sum of correct and wrong answers", () => {
        expect(getProgress({
            correct: 5,
            wrong: 1
        })).toBe(6);
    });
});