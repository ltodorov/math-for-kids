import { App } from "../app";

describe("App", () => {
    let formNode: HTMLFormElement;
    let term1: HTMLInputElement;
    let term2: HTMLInputElement;
    let operator: HTMLElement;
    let answer: HTMLInputElement;
    let app: App;

    beforeEach(() => {
        Math.random = jest.fn(() => 0);
        document.body.innerHTML = `
            <form class="exercise" id="form">
                <input type="text" class="exercise__num" name="term-1" id="term-1" disabled>
                <span class="exercise__sign" id="operator">+</span>
                <input type="text" class="exercise__num" name="term-2" id="term-2" disabled>
                <input type="text" class="exercise__num" name="answer" id="answer" placeholder="?"
                    autocomplete="off" inputmode="numeric" pattern="[0-9]{1,3}" required>
            </form>
        `;
        formNode = document.getElementById("form") as HTMLFormElement;
        term1 = formNode.elements.namedItem("term-1") as HTMLInputElement;
        operator = document.getElementById("operator") as HTMLElement;
        term2 = formNode.elements.namedItem("term-2") as HTMLInputElement;
        answer = formNode.elements.namedItem("answer") as HTMLInputElement;
        app = new App({
            formNode,
            operation: "addition",
        });
    });

    test("generates an exercise", () => {
        expect(term1.value).toBe("1");
        expect(operator.textContent).toBe("+");
        expect(term2.value).toBe("1");
        expect(answer.value).toBe("");
    });

    describe("update", () => {
        test("changes the exercise", () => {
            app.update({
                operation: "division",
            });
            expect(term1.value).toBe("1");
            expect(operator.textContent).toBe("/");
            expect(term2.value).toBe("1");
            expect(answer.value).toBe("");
        });
    });

    describe("verify", () => {
        test("returns true", () => {
            answer.value = "2";
            expect(app.verify(answer)).toBe(true);
        });

        test("returns false", () => {
            answer.value = "1";
            expect(app.verify(answer)).toBe(false);
        });
    });
});
