import { getParsedOperation } from "../get-parsed-operation";

describe("getParsedOperation", () => {
    const location = {} as Location;

    test.each([
        ["addition", "#addition"],
        ["subtraction", "#subtraction"],
        ["multiplication", "#multiplication"],
        ["division", "#division"],
        ["addition", "#unknown"],
    ])("returns %s if hash %s", (expected, hash) => {
        location.hash = hash;
        expect(getParsedOperation(location)).toBe(expected);
    });

    test("returns addition if no hash", () => {
        location.hash = "";
        expect(getParsedOperation(location)).toBe("addition");
    });
});