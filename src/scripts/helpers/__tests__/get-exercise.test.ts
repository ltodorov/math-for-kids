import { getExercise } from "../get-exercise";

describe("getExercise", () => {
    beforeEach(() => {
        Math.random = jest.fn()
            .mockImplementationOnce(() => 0.12)
            .mockImplementation(() => 0.23);
    });

    test.each([
        ["addition", "+", 2, 3, 5],
        ["subtraction", "-", 5, 3, 2],
        ["multiplication", "*", 2, 3, 6],
        ["division", "/", 6, 3, 2],
    ])("returns %s", (operation, operator, term1, term2, result) => {
        expect(getExercise({
            operation,
        })).toEqual({
            operation,
            operator,
            term1,
            term2,
            result,
        });
    });

    test("throws an error if unsupported operation", () => {
        expect(() => getExercise({
            operation: "unknown",
        })).toThrowError("Unsupported arithmetical operation unknown");
    });
});