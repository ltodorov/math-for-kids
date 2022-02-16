import { getExercise } from "./helpers/get-exercise";
import { setValue } from "./helpers/set-value";
import { Exercise, ExerciseProps } from "./models/exercise";

interface AppProps extends ExerciseProps {
    formNode: Element | null;
}

class App {
    formNode: Element | null;
    exercise!: Exercise;
    term?: number;
    max?: number;

    constructor({ formNode, ...rest }: AppProps) {
        this.formNode = formNode;
        this.max = rest.max;
        this.term = rest.term;
        this.update(rest);
    }

    update(props: ExerciseProps): void {
        this.exercise = getExercise(props);

        if (this.formNode instanceof HTMLFormElement) {
            const elements = this.formNode.elements;
            setValue(elements.namedItem("term-1"), this.exercise.term1.toString());
            setValue(document.getElementById("operator"), this.exercise.operator);
            setValue(elements.namedItem("term-2"), this.exercise.term2.toString());
            setValue(elements.namedItem("answer"), "");
        }
    }

    verify(answerNode: Element | RadioNodeList | null): boolean {
        if (answerNode instanceof HTMLInputElement &&
            Number(answerNode.value) === this.exercise.result) {
            return true;
        } else {
            return false;
        }
    }
}

export {
    App,
};
