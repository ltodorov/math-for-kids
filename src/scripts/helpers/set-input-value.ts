function setInputValue(input: Element | RadioNodeList | null, value: string) {
    if (input instanceof HTMLInputElement) {
        input.value = value;
    }
}

export {
    setInputValue
};