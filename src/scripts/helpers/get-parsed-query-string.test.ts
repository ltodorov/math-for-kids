import getParsedQueryString from "./get-parsed-query-string";

describe("getParsedQueryString", () => {
    const location = {
        search: ""
    } as Location;

    test("should return an empty object if empty search", () => {
        expect(getParsedQueryString(location.search)).toEqual({});
    });

    test("should return an object with URL queries key/value", () => {
        location.search = "?max=20&level=2&dummy";
        expect(getParsedQueryString(location.search)).toEqual({
            max: 20,
            level: 2,
            dummy: NaN
        });
    });
});