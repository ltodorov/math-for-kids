import { getExerciseProps } from "../get-exercise-props";

describe("getExerciseProps", () => {
    const location = {
        hash: "",
        search: "",
    } as Location;

    test.each([
        ["addition", "#addition"],
        ["subtraction", "#subtraction"],
        ["multiplication", "#multiplication"],
        ["division", "#division"],
        ["addition", "#unknown"],
    ])("returns %s if hash %s", (expected, hash) => {
        location.hash = hash;
        expect(getExerciseProps(location).operation).toBe(expected);
    });

    test("returns addition if no hash", () => {
        location.hash = "";
        expect(getExerciseProps(location).operation).toBe("addition");
    });

    test("returns max if in search", () => {
        location.search = "?max=5";
        expect(getExerciseProps(location).max).toBe(5);
    });

    test("returns term if in search", () => {
        location.search = "?term=2";
        expect(getExerciseProps(location).term).toBe(2);
    });

    test.each([
        ["not a number", "a", "b"],
        ["0", 0, 0],
    ])("ignores max and term if %s", (_type, max, term) => {
        location.search = `?max=${max}&term=${term}`;
        expect(getExerciseProps(location).max).toBe(undefined);
        expect(getExerciseProps(location).term).toBe(undefined);
    });
});