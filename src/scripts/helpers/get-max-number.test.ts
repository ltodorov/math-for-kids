import getMaxNumber from "./get-max-number";

describe("getMaxNumber", () => {
    const location = {
        search: ""
    } as Location;

    test("should return default max number if location.search is empty", () => {
        location.search = "";
        expect(getMaxNumber(location.search)).toBe(10);
    });

    test("should return default max number if location.search is incomplete", () => {
        location.search = "?max";
        expect(getMaxNumber(location.search)).toBe(10);
    });

    test("should return the parsed max number", () => {
        location.search = "?max=20";
        expect(getMaxNumber(location.search)).toBe(20);
    });

    test("should return cached object", () => {
        location.search = "?max=20";
        expect(getMaxNumber(location.search)).toBe(20);
        expect(getMaxNumber(location.search)).toBe(20);
    });
});