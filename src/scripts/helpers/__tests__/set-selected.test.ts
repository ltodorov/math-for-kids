import { setSelected } from "../set-selected";
import { isArithmeticOperation } from "../is-arithmetic-operation";
import { ArithmeticOperation } from "@scripts/models/exercise";

describe("setSelected", () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <nav class="nav" id="nav">
                <h2 class="nav__title visually-hidden">Navigation</h2>
                <a class="nav__item" href="#addition" title="Addition">Addition</a>
                <a class="nav__item" href="#subtraction" title="Subtraction">Subtraction</a>
                <a class="nav__item" href="#multiplication" title="Multiplication">Multiplication</a>
                <a class="nav__item" href="#division" title="Division">Division</a>
            </nav>
        `;
    });

    test.each([
        ["#addition", undefined],
        ["#addition", "addition"],
        ["#subtraction", "subtraction"],
        ["#multiplication", "multiplication"],
        ["#division", "division"],
    ])("selects a[href=\"%s\"] if operation %s", (hash, operation) => {
        const prop = operation && isArithmeticOperation(operation) ? operation : undefined;
        setSelected(prop);

        expect(document.querySelector(`[href="${hash}"]`)?.classList.contains("nav__item--selected")).toBe(true);
        expect(document.querySelectorAll(".nav__item--selected").length).toBe(1);
    });

    test("doesn't select an item if not available", () => {
        setSelected("unknown" as keyof ArithmeticOperation);
        expect(document.querySelectorAll(".nav__item--selected").length).toBe(0);
    });

    test("selects one item only", () => {
        document.querySelector(".nav__item")?.classList.add("nav__item--selected");
        expect(document.querySelectorAll(".nav__item--selected").length).toBe(1);

        setSelected("division");

        expect(document.querySelectorAll(".nav__item--selected").length).toBe(1);
    });
});
