import { getParsedQueryParams } from "./get-parsed-query-params";

describe("getParsedQueryParams", () => {
    const location = {
        search: ""
    } as Location;

    it("should return an empty object if search is an empty string", () => {
        expect(getParsedQueryParams(location.search)).toEqual({});
    });

    it("should return an object with number values", () => {
        location.search = "?max=20&numStr=1a&str=abc&bool=true&empty=&und";
        expect(getParsedQueryParams(location.search)).toEqual({
            max: 20,
            numStr: 1,
            str: NaN,
            bool: NaN,
            empty: NaN,
            und: NaN
        });
    });
});