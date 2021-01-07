function setTextContent(element: HTMLElement | null, content: string) {
    if (element) {
        element.textContent = content;
    }
}

export {
    setTextContent
};