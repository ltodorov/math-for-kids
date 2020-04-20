import getExpression from "./get-expression";

describe("getExpression", () => {
    let location = {
        search: ""
    } as Location;

    let inc: number = 1;

    test("should return expression parts", () => {
        Math.random = jest.fn(() => {
            const res = (3 + inc) / 10;
            inc += 1;
            return res;
        });
        expect(getExpression(location.search)).toEqual({
            num1: 5,
            num2: 6,
            operator: "+"
        });
        expect(getExpression(location.search)).toEqual({
            num1: 9,
            num2: 8,
            operator: "-"
        });
    });

    test("shouldn't switch number values if num1 > num2", () => {
        inc = 10;
        Math.random = jest.fn(() => {
            inc -= 1;
            return inc / 10;
        });
        expect(getExpression(location.search)).toEqual({
            num1: 8,
            num2: 7,
            operator: "-"
        });
    });
});