import { DOMNode } from "./dom";
import { Exercise } from "./exercise";
import { Score } from "./score";

interface IUpdater {
    updateForm(options: FormOptions): void;
    updateHistory(items: HistoryItem[]): void;
    updateImage(): void;
    updateProgress(value: number): void;
    updateScore(score: Score): void;
    disableSubmit(): void;
}

interface UpdaterOptions {
    formNode: DOMNode;
    historyNode: DOMNode;
    imageNode: DOMNode;
    progressNode: DOMNode;
    scoreCorrectNode: DOMNode;
    scoreWrongNode: DOMNode;
}

type FormOptions = Exercise;

interface HistoryItem {
    value: string;
    status?: HistoryItemStatus;
}

type HistoryItemStatus = "correct" | "wrong";

export {
    IUpdater,
    UpdaterOptions,
    FormOptions,
    HistoryItem,
    HistoryItemStatus
};