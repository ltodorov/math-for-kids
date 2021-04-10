import { DOMNode } from "./dom";
import { Exercise } from "./exercise";

interface IUpdater {
    updateForm(options: FormOptions): void;
    updateHistory(items: HistoryItem[]): void;
    updateImage(): void;
    updateProgress(value: number): void;
    updateScore(isCorrect: boolean): void;
}

interface UpdaterOptions {
    formNode: DOMNode;
    historyNode: DOMNode;
    imageNode: DOMNode;
    progressNode: DOMNode;
    scoreNegativeNode: DOMNode;
    scorePositiveNode: DOMNode;
}

interface FormOptions extends Exercise { }

interface HistoryItem {
    value: string;
    modifier?: HistoryItemModifier;
}

type HistoryItemModifier = "positive" | "negative";

export {
    IUpdater,
    UpdaterOptions,
    FormOptions,
    HistoryItem,
    HistoryItemModifier
};