import getOperator from "./get-operator";

describe("getOperator", () => {
    let location = {
        search: ""
    } as Location;

    test("should return +", () => {
        Math.random = jest.fn(() => 0);
        expect(getOperator(location.search)).toBe("+");
    });

    test("should return -", () => {
        location.search = "?multi=0"
        Math.random = jest.fn(() => 1);
        expect(getOperator(location.search)).toBe("-");
    });

    test("should return *", () => {
        location.search = "?multi=1"
        expect(getOperator(location.search)).toBe("*");
    });
});