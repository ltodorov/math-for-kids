import { getExpression, GetExpressionProps } from "./get-expression";

describe("getExpression", () => {
    let props: GetExpressionProps = {};

    beforeEach(() => {
        Math.random = jest.fn()
            .mockImplementationOnce(() => 0)
            .mockImplementationOnce(() => 0.1)
            .mockImplementationOnce(() => 0.1)
            .mockImplementation(() => 0);
    });

    afterEach(() => {
        props = {};
    });

    describe("addition", () => {
        beforeEach(() => {
            props.operatorIndex = 0;
        });

        test("should return random numbers for addition", () => {
            expect(getExpression(props)).toEqual({
                operator: "+",
                term1: 1,
                term2: 2
            });
            expect(getExpression(props)).toEqual({
                operator: "+",
                term1: 2,
                term2: 1
            });
        });

        test("should return a random number for term2 only", () => {
            props.firstTerm = 7;

            expect(getExpression(props)).toEqual({
                operator: "+",
                term1: 7,
                term2: 1
            });
            expect(getExpression(props)).toEqual({
                operator: "+",
                term1: 7,
                term2: 2
            });
        });
    });

    describe("subtraction", () => {
        beforeEach(() => {
            props.operatorIndex = 1;
        });

        test("should return random numbers for subtraction", () => {
            expect(getExpression(props)).toEqual({
                operator: "-",
                term1: 2,
                term2: 1
            });
        });

        test("should return a random value for term1 only", () => {
            props.secondTerm = 2;

            expect(getExpression(props)).toEqual({
                operator: "-",
                term1: 2,
                term2: 2
            });
            expect(getExpression(props)).toEqual({
                operator: "-",
                term1: 2,
                term2: 2
            });
        });

        test("should ignore secondTerm if firstTerm < secondTerm", () => {
            props.firstTerm = 1;
            props.secondTerm = 2;

            expect(getExpression(props)).toEqual({
                operator: "-",
                term1: 2,
                term2: 2
            });
        });
    });

    describe("multiplication", () => {
        beforeEach(() => {
            props.operatorIndex = 2;
        });

        test("should return random numbers for multiplication", () => {
            expect(getExpression(props)).toEqual({
                operator: "*",
                term1: 1,
                term2: 2
            });
            expect(getExpression(props)).toEqual({
                operator: "*",
                term1: 2,
                term2: 1
            });
        });
    });
});