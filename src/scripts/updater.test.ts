import { HistoryItem, IUpdater, UpdaterOptions } from "./models/updater";
import { Updater } from "./updater";

describe("Updater", () => {
    let updater: IUpdater;
    const defaultOptions: UpdaterOptions = {
        formNode: null,
        historyNode: null,
        imageNode: null,
        progressNode: null,
        scoreNegativeNode: null,
        scorePositiveNode: null
    };

    describe("updateForm", () => {
        let formNode: HTMLFormElement;
        let operatorNode: HTMLSpanElement;
        let term1Node: HTMLInputElement;
        let term2Node: HTMLInputElement;
        let answerNode: HTMLInputElement;
        let submitNode: HTMLButtonElement;

        beforeEach(() => {
            formNode = document.createElement("form");
            operatorNode = document.createElement("span");
            operatorNode.className = "operator";
            term1Node = document.createElement("input");
            term2Node = <HTMLInputElement>term1Node.cloneNode();
            answerNode = <HTMLInputElement>term1Node.cloneNode();
            term1Node.name = "term-1";
            term2Node.name = "term-2";
            answerNode.name = "answer";
            submitNode = document.createElement("button");
            submitNode.name = "submit";
            formNode.appendChild(term1Node);
            formNode.appendChild(operatorNode);
            formNode.appendChild(term2Node);
            formNode.appendChild(answerNode);
            formNode.appendChild(submitNode);
            document.body.appendChild(formNode);
        });

        afterEach(() => {
            document.body.removeChild(formNode);
        });

        it("should not update form elements if formNode is null", () => {
            updater = new Updater(defaultOptions);
            updater.updateForm({
                term1: 1,
                operator: "+",
                term2: 2
            });

            expect(term1Node.value).toBe("");
            expect(operatorNode.textContent).toBe("");
            expect(term2Node.value).toBe("");
            expect(answerNode.value).toBe("");
        });

        it("should update form elements", () => {
            updater = new Updater({
                ...defaultOptions,
                formNode
            });
            updater.updateForm({
                term1: 1,
                operator: "+",
                term2: 2
            });

            expect(term1Node.value).toBe("1");
            expect(operatorNode.textContent).toBe("+");
            expect(term2Node.value).toBe("2");
            expect(answerNode.value).toBe("");

            updater.updateForm({
                term1: 3,
                operator: "-",
                term2: 1
            });

            expect(term1Node.value).toBe("3");
            expect(operatorNode.textContent).toBe("-");
            expect(term2Node.value).toBe("1");
            expect(answerNode.value).toBe("");
        });
    });

    describe("updateHistory", () => {
        let historyNode: HTMLDivElement;
        let historyItems: HistoryItem[];

        beforeAll(() => {
            historyNode = document.createElement("div");
            document.body.appendChild(historyNode);
        });

        afterAll(() => {
            document.body.removeChild(historyNode);
        });

        it("should not add history item if historyNode is null", () => {
            historyItems = [{
                value: "1"
            }, {
                value: "+"
            }, {
                value: "2"
            }, {
                value: "3",
                modifier: "positive"
            }];
            updater = new Updater(defaultOptions);
            updater.updateHistory(historyItems);

            expect(historyNode.children.length).toBe(0);
        });

        it("should add correct history item", () => {
            historyItems = [{
                value: "1"
            }, {
                value: "+"
            }, {
                value: "2"
            }, {
                value: "3",
                modifier: "positive"
            }];
            updater = new Updater({
                ...defaultOptions,
                historyNode
            });
            updater.updateHistory(historyItems);

            expect(historyNode.children.length).toBe(1);
            expect(historyNode.children[0].className).toBe("history__row");
            expect(historyNode.children[0].querySelectorAll(".history__item").length).toBe(4);
            expect(historyNode.children[0].querySelectorAll(".history__item--positive").length).toBe(1);
        });

        it("should add wrong history item", () => {
            historyItems = [{
                value: "1"
            }, {
                value: "+"
            }, {
                value: "2"
            }, {
                value: "4",
                modifier: "negative"
            }, {
                value: "3",
                modifier: "positive"
            }];
            updater = new Updater({
                ...defaultOptions,
                historyNode
            });
            updater.updateHistory(historyItems);

            expect(historyNode.children.length).toBe(2);
            expect(historyNode.children[1].className).toBe("history__row");
            expect(historyNode.children[1].querySelectorAll(".history__item").length).toBe(5);
            expect(historyNode.children[1].querySelectorAll(".history__item--negative").length).toBe(1);
            expect(historyNode.children[1].querySelectorAll(".history__item--positive").length).toBe(1);
        });
    });

    describe("updateImage", () => {
        const defaultImgSrc = "http://localhost/0.svg";
        let imageNode: HTMLImageElement;

        beforeEach(() => {
            imageNode = document.createElement("img");
            imageNode.src = defaultImgSrc;
        });

        it("should not update image if imageNode is null", () => {
            Math.random = jest.fn(() => 0.1);
            updater = new Updater(defaultOptions);
            updater.updateImage();

            expect(imageNode.src).toBe(defaultImgSrc);
        });

        it("should update image if imageNode exists", () => {
            Math.random = jest.fn(() => 0.1);
            updater = new Updater({
                ...defaultOptions,
                imageNode
            });
            updater.updateImage();

            expect(imageNode.src).toBe("http://localhost/1.svg");
        });
    });

    describe("updateProgress", () => {
        let progressNode: HTMLProgressElement;

        it("should not update progress if progressNode is null", () => {
            progressNode = document.createElement("progress");
            progressNode.value = 0;
            updater = new Updater(defaultOptions);
            updater.updateProgress(1);

            expect(progressNode.value).toBe(0);
        });

        it("should update progress if progressNode exists", () => {
            progressNode = document.createElement("progress");
            progressNode.value = 0;
            updater = new Updater({
                ...defaultOptions,
                progressNode
            });
            updater.updateProgress(1);

            expect(progressNode.value).toBe(1);
        });
    });

    // describe("updateScore", () => {
    //     TODO
    // });
});