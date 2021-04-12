import { setDisabled } from "./set-disabled";

describe("setDisabled", () => {
    it("should disable input element", () => {
        const input = document.createElement("input");
        setDisabled(input);

        expect(input.disabled).toBe(true);
    });

    it("should disable button element", () => {
        const button = document.createElement("button");
        setDisabled(button);

        expect(button.disabled).toBe(true);
    });

    it("should not disable other elements", () => {
        const element = document.createElement("div");
        setDisabled(element);

        expect(element.hasAttribute("disabled")).toBe(false);
    });
});