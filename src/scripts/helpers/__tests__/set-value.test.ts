import { setValue } from "../set-value";

describe("setValue", () => {
    const value = "test";

    test("does not throw if element is null", () => {
        expect(() => setValue(null, value)).not.toThrow();
    });

    test("sets value of an input element", () => {
        const input = document.createElement("input");
        setValue(input, value);
        expect(input.value).toBe(value);
    });

    test("sets text content of an element", () => {
        const element = document.createElement("p");
        setValue(element, value);
        expect(element.textContent).toBe(value);
    });
});