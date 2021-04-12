import { DOMNode } from "@scripts/models/dom";

function setDisabled(element: DOMNode | Element | RadioNodeList): void {
    if (element instanceof HTMLButtonElement || element instanceof HTMLInputElement) {
        element.disabled = true;
    }
}

export {
    setDisabled
};