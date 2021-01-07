import { getSecondTerm, GetSecondTermProps } from "./get-second-term";


describe("getSecondTerm", () => {
    let props: GetSecondTermProps;

    beforeEach(() => {
        props = {
            max: 10
        };
        Math.random = jest.fn(() => 0);
    });

    test("should return a random number if secondTerm is not defined", () => {
        expect(getSecondTerm(props)).toBe(1);
    });

    test("should return secondTerm if defined", () => {
        props.secondTerm = 2;
        expect(getSecondTerm(props)).toBe(2);
    });
});