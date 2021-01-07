import { getFirstTerm, GetFirstTermProps } from "./get-first-term";

describe("getFirstTerm", () => {
    let props: GetFirstTermProps;

    beforeEach(() => {
        props = {
            max: 10
        };
        Math.random = jest.fn(() => 0);
    });

    test("should return a random number if terms are not defined", () => {
        expect(getFirstTerm(props)).toBe(1);
    });

    test("should return a random number if terms are defined", () => {
        props.firstTerm = 3;
        props.secondTerm = 2;
        expect(getFirstTerm(props)).toBe(1);
    });

    test("should return firstTerm if defined", () => {
        props.firstTerm = 3;
        expect(getFirstTerm(props)).toBe(3);
    });
});