import { getExercise } from "./helpers/get-exercise";
import { getHistoryItems } from "./helpers/get-history-items";
import { getResult } from "./helpers/get-result";
import { Exercise } from "./models/exercise";
import { IUpdater } from "./models/updater";

interface AppOptions {
    updater: IUpdater;
    operatorIndex?: number;
    max?: number;
}

class App {
    updater: IUpdater;
    config: Omit<AppOptions, "updater">;
    exercise!: Exercise;
    result!: number;
    userAnswer!: number;
    progress: number;

    constructor({ updater, ...rest }: AppOptions) {
        this.updater = updater;
        this.config = rest;
        this.progress = 0;
        this.update();
    }

    update() {
        this.exercise = getExercise(this.config);
        this.result = getResult(this.exercise);
        this.updater.updateForm(this.exercise);
        this.userAnswer = 0;
    }

    verify(userAnswer: string) {
        this.userAnswer = Number(userAnswer);
        const isCorrect = this.userAnswer === this.result;

        this.progress += 1;
        this.updater.updateProgress(this.progress);
        // this.updater.updateScore(isCorrect);
        this.updater.updateHistory(getHistoryItems({
            ...this.exercise,
            result: this.result,
            userAnswer: this.userAnswer,
            isCorrect
        }));
        this.update();
        this.updater.updateImage();

        return isCorrect;
    }
}

export {
    App
};