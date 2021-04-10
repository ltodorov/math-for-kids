import { getHistoryItems } from "./get-history-items";

describe("getHistoryItems", () => {
    it("should return history items for correct answer", () => {
        expect(getHistoryItems({
            term1: 1,
            operator: "+",
            term2: 2,
            result: 3,
            userAnswer: 3,
            isCorrect: true
        })).toEqual([{
            value: "1"
        }, {
            value: "+"
        }, {
            value: "2"
        }, {
            value: "3",
            status: "positive"
        }]);
    });

    it("should return history items for incorrect answer", () => {
        expect(getHistoryItems({
            term1: 1,
            operator: "+",
            term2: 2,
            result: 3,
            userAnswer: 4,
            isCorrect: false
        })).toEqual([{
            value: "1"
        }, {
            value: "+"
        }, {
            value: "2"
        }, {
            value: "4",
            status: "negative"
        }, {
            value: "3",
            status: "positive"
        }]);
    });
});