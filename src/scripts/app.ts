import { getExercise } from "./helpers/get-exercise";
import { setValue } from "./helpers/set-value";
import { ArithmeticOperation, Exercise } from "./models/exercise";

interface AppProps {
    formNode: Element | null;
    operation: keyof ArithmeticOperation;
}

class App {
    formNode: Element | null;
    exercise!: Exercise;

    constructor({ formNode, operation }: AppProps) {
        this.formNode = formNode;
        this.update(operation);
    }

    update(operation: keyof ArithmeticOperation): void {
        this.exercise = getExercise({
            operation,
        });

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