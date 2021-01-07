import { setInputValue } from "./set-input-value";

describe("setInputValue", () => {
    test("should not set value if not HTMLInputElement", () => {
        const input = document.createElement("div");
        setInputValue(input, "1");
        expect(input.textContent).toBe("");
    });

    test("should set value if HTMLInputElement", () => {
        const input = document.createElement("input");
        setInputValue(input, "1");
        expect(input.value).toBe("1");
    });
});