import { HistoryItem, IUpdater, UpdaterOptions } from "./models/updater";
import { Updater } from "./updater";

describe("Updater", () => {
    const defaultOptions: UpdaterOptions = {
        formNode: null,
        historyNode: null,
        imageNode: null,
        progressNode: null,
        scoreCorrectNode: null,
        scoreWrongNode: null
    };
    let updater: IUpdater;

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
            updater.disableSubmit();

            expect(term1Node.value).toBe("");
            expect(operatorNode.textContent).toBe("");
            expect(term2Node.value).toBe("");
            expect(answerNode.value).toBe("");
            expect(answerNode.disabled).toBe(false);
            expect(submitNode.disabled).toBe(false);
        });

        it("should update form elements if formNode exists", () => {
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

        it("should disable submit if max exercises is reached", () => {
            updater = new Updater({
                ...defaultOptions,
                formNode
            });

            expect(answerNode.disabled).toBe(false);
            expect(submitNode.disabled).toBe(false);


            updater.disableSubmit();

            expect(answerNode.disabled).toBe(true);
            expect(submitNode.disabled).toBe(true);
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
                status: "correct"
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
                status: "correct"
            }];
            updater = new Updater({
                ...defaultOptions,
                historyNode
            });
            updater.updateHistory(historyItems);

            expect(historyNode).toMatchSnapshot();
            expect(historyNode.children.length).toBe(1);
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
                status: "wrong"
            }, {
                value: "(3)",
                status: "correct"
            }];
            updater = new Updater({
                ...defaultOptions,
                historyNode
            });
            updater.updateHistory(historyItems);

            expect(historyNode).toMatchSnapshot();
            expect(historyNode.children.length).toBe(2);
        });
    });

    describe("updateImage", () => {
        const defaultImgSrc = "http://localhost/0.svg";
        let imageNode: HTMLImageElement;

        beforeEach(() => {
            Math.random = jest.fn(() => 0.1);
            imageNode = document.createElement("img");
            imageNode.src = defaultImgSrc;
        });

        it("should not update image if imageNode is null", () => {
            updater = new Updater(defaultOptions);
            updater.updateImage();

            expect(imageNode.src).toBe(defaultImgSrc);
        });

        it("should update image if imageNode exists", () => {
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

        beforeEach(() => {
            progressNode = document.createElement("progress");
            progressNode.value = 0;
        });

        it("should not update progress if progressNode is null", () => {
            updater = new Updater(defaultOptions);
            updater.updateProgress(1);

            expect(progressNode.value).toBe(0);
        });

        it("should update progress if progressNode exists", () => {
            updater = new Updater({
                ...defaultOptions,
                progressNode
            });
            updater.updateProgress(1);

            expect(progressNode.value).toBe(1);
        });
    });

    describe("updateScore", () => {
        let scoreCorrectNode: HTMLElement;
        let scoreWrongNode: HTMLElement;

        beforeEach(() => {
            scoreCorrectNode = document.createElement("strong");
            scoreCorrectNode.textContent = "0";
            scoreWrongNode = document.createElement("strong");
            scoreWrongNode.textContent = "0";
        });

        it("should not update score if score nodes are null", () => {
            updater = new Updater(defaultOptions);
            updater.updateScore({
                correct: 0,
                wrong: 1
            });

            expect(scoreCorrectNode.textContent).toBe("0");
            expect(scoreWrongNode.textContent).toBe("0");
        });

        it("should update score if score nodes exist", () => {
            updater = new Updater({
                ...defaultOptions,
                scoreCorrectNode,
                scoreWrongNode
            });
            updater.updateScore({
                correct: 1,
                wrong: 0
            });

            expect(scoreCorrectNode.textContent).toBe("1");
            expect(scoreWrongNode.textContent).toBe("0");
        });
    });
});