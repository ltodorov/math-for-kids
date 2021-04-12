import { DOMNode } from "@scripts/models/dom";

function setValue(element: DOMNode | Element | RadioNodeList, value: string) {
    if (element instanceof HTMLInputElement) {
        element.value = value;
    } else if (element instanceof HTMLElement) {
        element.textContent = value;
    }
}

export {
    setValue
};