/**
 * Sets a value to an element
 * @param element HTML element to be used
 * @param value Value to be set
 */
function setValue(element: Element | RadioNodeList | null, value: string): void {
    if (element instanceof HTMLInputElement) {
        element.value = value;
    } else if (element instanceof HTMLElement) {
        element.textContent = value;
    }
}

export {
    setValue,
};