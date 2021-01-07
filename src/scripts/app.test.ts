import { App } from "./app";

describe("App", () => {
    let app: App;

    describe("changeImage", () => {
        let img: HTMLImageElement;

        beforeEach(() => {
            img = document.createElement("img");
            document.body.appendChild(img);
        });

        afterEach(() => {
            document.body.removeChild(img);
        });

        it("should not change the header image if #image does not exist", () => {
            app = new App();
            Math.random = jest.fn(() => 0);

            app.changeImage();
            expect(img.src).toBe("");
        });

        it("should change the header image if #image exists", () => {
            img.id = "image";
            app = new App();
            Math.random = jest.fn(() => 0.1);

            app.changeImage();
            expect(img.src).toBe("http://localhost/1.svg");
        });
    });

    describe("createTask", () => {
        let form: HTMLFormElement;
        let term1: HTMLInputElement;
        let term2: HTMLInputElement;
        let answer: HTMLInputElement;
        let operator: HTMLSpanElement;

        beforeEach(() => {
            form = document.createElement("form");
            term1 = document.createElement("input");
            term1.name = "term-1";
            term1.id = "term-1";
            form.appendChild(term1);
            term2 = document.createElement("input");
            term2.name = "term-2";
            term2.id = "term-2";
            form.appendChild(term2);
            answer = document.createElement("input");
            answer.name = "answer";
            answer.id = "answer";
            form.appendChild(answer);
            operator = document.createElement("span");
            operator.id = "operator";
            document.body.appendChild(form);
            Math.random = jest.fn(() => 0);
        });

        afterEach(() => {
            document.body.removeChild(form);
        });

        it("should not create a task if #form does not exist", () => {
            app = new App();
            app.createTask();
            expect(term1.value).toBe("");
            expect(term2.value).toBe("");
            expect(answer.value).toBe("");
            expect(operator.textContent).toBe("");
        });

        it("should create a task if #form exists", () => {
            form.id = "form";
            app = new App();
            app.createTask();
            expect(term1.value).toBe("0");
            expect(term2.value).toBe("0");
            expect(answer.value).toBe("");
            expect(operator.textContent).toBe("");
        });
    });

});