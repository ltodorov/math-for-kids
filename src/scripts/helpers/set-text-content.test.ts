import { setTextContent } from "./set-text-content";

describe("setTextContent", () => {
    test("should not throw error if the element is null", () => {
        expect(() => setTextContent(null, "")).not.toThrow();
    });

    test("should set text content", () => {
        const element = document.createElement("div");
        setTextContent(element, "test");
        expect(element.textContent).toBe("test");
    });
});