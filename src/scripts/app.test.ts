import { App } from "./app";
import { IUpdater } from "./models/updater";

jest.mock("./helpers/get-exercise");
jest.mock("./helpers/get-result");

describe("App", () => {
    let app: App;
    let updater: IUpdater;
    const userAnswer: number = 3;

    beforeEach(() => {
        updater = {
            updateForm: jest.fn(),
            updateHistory: jest.fn(),
            updateImage: jest.fn(),
            updateProgress: jest.fn(),
            updateScore: jest.fn()
        };
        app = new App({
            updater
        });
        app.userAnswer = userAnswer;
    });

    it("should create exercise on construct", () => {
        expect(app.exercise).toEqual({
            operator: "+",
            term1: 2,
            term2: 1
        });
        expect(app.result).toBe(3);
        expect(updater.updateForm).toBeCalledWith(app.exercise);
        expect(updater.updateHistory).not.toBeCalled();
        expect(updater.updateImage).not.toBeCalled();
        expect(updater.updateProgress).not.toBeCalled();
        expect(updater.updateScore).not.toBeCalled();
    });

    it("should update the exercise and reset user's input", () => {
        app.exercise = {
            operator: "*",
            term1: 1,
            term2: 2
        };
        app.result = 2;
        app.update();

        expect(app.exercise).toEqual({
            operator: "+",
            term1: 2,
            term2: 1
        });
        expect(app.result).toBe(3);
        expect(app.userAnswer).toBe(0);
        expect(updater.updateForm).toBeCalledWith(app.exercise);
        expect(updater.updateHistory).not.toBeCalled();
        expect(updater.updateImage).not.toBeCalled();
        expect(updater.updateProgress).not.toBeCalled();
        expect(updater.updateScore).not.toBeCalled();
    });

    it("should verify user's input", () => {
        const correct = app.verify("3");
        expect(correct).toBe(true);
        expect(updater.updateForm).toBeCalledWith(app.exercise);
        expect(updater.updateHistory).toBeCalledWith([{
            value: app.exercise.term1.toString()
        }, {
            value: app.exercise.operator
        }, {
            value: app.exercise.term2.toString()
        }, {
            value: "="
        }, {
            value: app.result.toString(),
            status: "positive"
        }]);
        expect(updater.updateImage).toBeCalledTimes(1);
        expect(updater.updateProgress).toBeCalledTimes(1);
        // expect(updater.updateScore).toBeCalledTimes(1);
        expect(app.verify("4")).toBe(false);
    });
});