import { FormOptions, HistoryItem, IUpdater, UpdaterOptions } from "./models/updater";
import { DOMNode } from "./models/dom";
import { setValue } from "./helpers/set-value";
import { getNumberImage } from "./helpers/get-number-image";
import { Score } from "./models/score";
import { setDisabled } from "./helpers/set-disabled";

class Updater implements IUpdater {
    private formNode: DOMNode;
    private historyNode: DOMNode;
    private imageNode: DOMNode;
    private progressNode: DOMNode;
    private scoreCorrectNode: DOMNode;
    private scoreWrongNode: DOMNode;

    constructor(options: UpdaterOptions) {
        this.formNode = options.formNode;
        this.historyNode = options.historyNode;
        this.imageNode = options.imageNode;
        this.progressNode = options.progressNode;
        this.scoreCorrectNode = options.scoreCorrectNode;
        this.scoreWrongNode = options.scoreWrongNode;
    }

    updateForm(options: FormOptions) {
        if (this.formNode instanceof HTMLFormElement) {
            const elements = this.formNode.elements;
            setValue(elements.namedItem("term-1"), options.term1.toString());
            setValue(this.formNode.querySelector(".operator"), options.operator);
            setValue(elements.namedItem("term-2"), options.term2.toString());
            setValue(elements.namedItem("answer"), "");
        }
    }

    updateHistory(items: HistoryItem[]) {
        if (this.historyNode) {
            const rowNode = document.createElement("p");
            rowNode.className = "history__row";
            const templateNode = document.createElement("span");
            const historyItemClassName = "history__item";

            items.forEach(item => {
                const modifierClassName = item.status ? ` ${historyItemClassName}--${item.status}` : "";
                const itemNode = <HTMLSpanElement>templateNode.cloneNode();
                itemNode.className = `${historyItemClassName}${modifierClassName}`;
                setValue(itemNode, item.value);
                rowNode.appendChild(itemNode);
            });
            this.historyNode.insertBefore(rowNode, this.historyNode.firstChild);
        }
    }

    updateImage() {
        if (this.imageNode instanceof HTMLImageElement) {
            this.imageNode.src = getNumberImage();
        }
    }

    updateProgress(value: number) {
        if (this.progressNode instanceof HTMLProgressElement) {
            this.progressNode.value = value;
        }
    }

    updateScore(score: Score) {
        setValue(this.scoreCorrectNode, score.correct.toString());
        setValue(this.scoreWrongNode, score.wrong.toString());
    }

    disableSubmit() {
        if (this.formNode instanceof HTMLFormElement) {
            const elements = this.formNode.elements;
            setDisabled(elements.namedItem("answer"));
            setDisabled(elements.namedItem("submit"));
        }
    }
}

export {
    Updater
};