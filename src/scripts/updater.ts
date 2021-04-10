import { FormOptions, HistoryItem, IUpdater, UpdaterOptions } from "./models/updater";
import { DOMNode } from "./models/dom";
import { setInputValue } from "./helpers/set-input-value";
import { setTextContent } from "./helpers/set-text-content";
import { getNumberImage } from "./helpers/get-number-image";

class Updater implements IUpdater {
    private formNode: DOMNode;
    private historyNode: DOMNode;
    private imageNode: DOMNode;
    private progressNode: DOMNode;

    constructor(options: UpdaterOptions) {
        this.formNode = options.formNode;
        this.historyNode = options.historyNode;
        this.imageNode = options.imageNode;
        this.progressNode = options.progressNode;
    }

    updateForm(options: FormOptions) {
        if (this.formNode instanceof HTMLFormElement) {
            const elements = this.formNode.elements;
            setInputValue(elements.namedItem("term-1"), options.term1.toString());
            setTextContent(this.formNode.querySelector(".operator"), options.operator);
            setInputValue(elements.namedItem("term-2"), options.term2.toString());
            setInputValue(elements.namedItem("answer"), "");
        }
    }

    updateHistory(items: HistoryItem[]) {
        if (this.historyNode) {
            const rowNode = document.createElement("p");
            rowNode.className = "history__row";
            const templateNode = document.createElement("span");
            const historyItemClassName = "history__item";

            items.forEach(item => {
                const modifier = item.modifier ? ` ${historyItemClassName}--${item.modifier}` : "";
                const itemNode = <HTMLSpanElement>templateNode.cloneNode();
                itemNode.className = `${historyItemClassName}${modifier}`;
                setTextContent(itemNode, item.value);
                rowNode.appendChild(itemNode);
            });
            this.historyNode.appendChild(rowNode);
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

    updateScore(isCorrect: boolean) {

    }
}

export {
    Updater
};