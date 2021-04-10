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
        ...getItemResult(rest)
    ];
}

function getHistoryItem(value: string, modifier?: HistoryItemStatus): HistoryItem {
    return {
        value,
        status: modifier
    };
}

function getItemResult({ result, userAnswer, isCorrect }: HistoryItemResultOptions): HistoryItem[] {
    return isCorrect ? [
        getHistoryItem(result.toString(), "positive")
    ] : [
        getHistoryItem(userAnswer.toString(), "negative"),
        getHistoryItem(result.toString(), "positive")
    ];
}

export {
    getHistoryItems
};