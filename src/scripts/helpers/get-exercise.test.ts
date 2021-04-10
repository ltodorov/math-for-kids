import { getExercise } from "./get-exercise";

describe("getExercise", () => {
    beforeEach(() => {
        Math.random = jest.fn()
            .mockImplementationOnce(() => 0.1)
            .mockImplementation(() => 0.2);
    });

    it("should return addition", () => {
        expect(getExercise({
            operatorIndex: 0
        })).toEqual({
            operator: "+",
            term1: 2,
            term2: 3
        });
    });

    it("should return subtraction", () => {
        expect(getExercise({
            operatorIndex: 1
        })).toEqual({
            operator: "-",
            term1: 3,
            term2: 2
        });
    });

    it("should return multiplication", () => {
        expect(getExercise({
            operatorIndex: 2
        })).toEqual({
            operator: "*",
            term1: 2,
            term2: 3
        });
    });

    it("should return division", () => {
        expect(getExercise({
            operatorIndex: 3
        })).toEqual({
            operator: "/",
            term1: 6,
            term2: 2
        });
    });
});