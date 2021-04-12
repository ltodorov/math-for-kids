import { setValue } from "./set-value";

describe("setValue", () => {
    const value = "test";

    it("should not throw if element is null", () => {
        expect(() => setValue(null, value)).not.toThrow();
    });

    it("should set value of an input element", () => {
        const input = document.createElement("input");
        setValue(input, value);
        expect(input.value).toBe(value);
    });

    it("should set text content of an element", () => {
        const element = document.createElement("p");
        setValue(element, value);
        expect(element.textContent).toBe(value);
    });
});