import { ExerciseOptions, getExercise } from "./helpers/get-exercise";
import { getHistoryItems } from "./helpers/get-history-items";
import { getProgress } from "./helpers/get-progress";
import { getResult } from "./helpers/get-result";
import { Exercise } from "./models/exercise";
import { Score } from "./models/score";
import { IUpdater } from "./models/updater";

interface AppOptions extends ExerciseOptions {
    updater: IUpdater;
    exercisesCount: number;
}

class App {
    updater: IUpdater;
    exercisesCount: number;
    exerciseOptions: ExerciseOptions;
    exercise!: Exercise;
    result!: number;
    userAnswer!: number;
    score: Score;

    constructor({ updater, exercisesCount, ...rest }: AppOptions) {
        this.updater = updater;
        this.exercisesCount = exercisesCount;
        this.exerciseOptions = rest;
        this.score = {
            correct: 0,
            wrong: 0
        };
        this.update();
    }

    update() {
        this.exercise = getExercise(this.exerciseOptions);
        this.result = getResult(this.exercise);
        this.updater.updateForm(this.exercise);
        this.userAnswer = 0;
    }

    verify(userAnswer: string) {
        this.userAnswer = Number(userAnswer);
        const isCorrect = this.userAnswer === this.result;
        this.setScore(isCorrect);
        this.updater.updateScore(this.score);
        const progress = getProgress(this.score);
        this.updater.updateProgress(progress);
        this.updater.updateHistory(getHistoryItems({
            ...this.exercise,
            result: this.result,
            userAnswer: this.userAnswer,
            isCorrect
        }));

        if (progress < this.exercisesCount) {
            this.update();
            this.updater.updateImage();
        } else {
            this.updater.disableSubmit();
        }

        return isCorrect;
    }

    private setScore(isCorrect: boolean) {
        if (isCorrect) {
            this.score.correct += 1;
        } else {
            this.score.wrong += 1;
        }
    }
}

export {
    App
};