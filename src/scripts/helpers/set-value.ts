import { FormElement } from "@scripts/models/dom";

function setValue(element: FormElement, value: string): void {
    if (element instanceof HTMLInputElement) {
        element.value = value;
    } else if (element instanceof HTMLElement) {
        element.textContent = value;
    }
}

export {
    setValue
};