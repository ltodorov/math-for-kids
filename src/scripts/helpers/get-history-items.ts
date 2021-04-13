import { Exercise } from "@scripts/models/exercise";
import { HistoryItem, HistoryItemStatus } from "@scripts/models/updater";

interface HistoryItemResultOptions {
    userAnswer: number;
    result: number;
    isCorrect: boolean;
}

interface HistoryItemsOptions extends Exercise, HistoryItemResultOptions { }

function getHistoryItems({ term1, operator, term2, ...rest }: HistoryItemsOptions): HistoryItem[] {
    return [
        getHistoryItem(term1.toString()),
        getHistoryItem(operator),
        getHistoryItem(term2.toString()),
        getHistoryItem("="),
        ...getHistoryItemResult(rest)
    ];
}

function getHistoryItem(value: string, status?: HistoryItemStatus): HistoryItem {
    return {
        value,
        status
    };
}

function getHistoryItemResult({ result, userAnswer, isCorrect }: HistoryItemResultOptions): HistoryItem[] {
    return isCorrect ? [
        getHistoryItem(result.toString(), "correct")
    ] : [
        getHistoryItem(userAnswer.toString(), "wrong"),
        getHistoryItem(`(${result.toString()})`, "correct")
    ];
}

export {
    getHistoryItems
};