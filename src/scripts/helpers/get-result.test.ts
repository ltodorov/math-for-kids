import { getResult } from "./get-result";
import { ArithmeticSign } from "@scripts/models/exercise";

describe("getResult", () => {
    it("should return sum", () => {
        expect(getResult({
            term1: 1,
            term2: 2,
            operator: "+"
        })).toBe(3);
    });

    it("should return difference", () => {
        expect(getResult({
            term1: 3,
            term2: 2,
            operator: "-"
        })).toBe(1);
    });

    it("should return product", () => {
        expect(getResult({
            term1: 2,
            term2: 3,
            operator: "*"
        })).toBe(6);
    });

    it("should return quotient", () => {
        expect(getResult({
            term1: 6,
            term2: 3,
            operator: "/"
        })).toBe(2);
    });

    it("should throw an error if operation is not defined", () => {
        expect(() => getResult({
            term1: 6,
            term2: 2,
            operator: "#" as ArithmeticSign
        })).toThrow("Unsupported operation!");
    });
});