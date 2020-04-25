import { Exercise } from "./exercise";

describe("Exercise", () => {
    let exercise: Exercise;
    const originalLocation = window.location;

    beforeAll(() => {
        delete window.location;
        window.location = {
            search: "?max=20&term=7"
        } as Location;
    });

    beforeEach(() => {
        exercise = new Exercise();
    });

    afterAll(() => {
        window.location = originalLocation;
    });

    test("should contain an object with the URL query params", () => {
        expect(exercise.queryParams).toEqual({
            max: 20,
            term: 7
        });
    });

    test("should create an expression", () => {
        Math.random = jest.fn(() => 0);
        exercise.createExercise();
        expect(exercise.expression).toEqual({
            operator: "+",
            term1: 7,
            term2: 0
        });
    });

    test("should check expression's answer", () => {
        exercise.createExercise();
        expect(exercise.checkAnswer(7)).toBe(true);
        expect(exercise.checkAnswer(0)).toBe(false);
    });
});