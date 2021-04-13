import { FormElement } from "@scripts/models/dom";

function setDisabled(element: FormElement): void {
    if (element instanceof HTMLButtonElement || element instanceof HTMLInputElement) {
        element.disabled = true;
    }
}

export {
    setDisabled
};