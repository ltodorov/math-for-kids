import { App } from "./app";
import { getAccent } from "./helpers/get-accent";
import { getExerciseProps } from "./helpers/get-exercise-props";
import { setSelected } from "./helpers/set-selected";
import { setAccent } from "./helpers/set-accent";

import "@styles/index.scss";

const formNode = document.getElementById("form");
const imageNode = document.getElementById("image");
const skipNode = document.getElementById("skip");
const accentGen = getAccent();
const app = new App({
    formNode,
    ...getExerciseProps(window.location),
});

setSelected(app.exercise.operation);

window.addEventListener("hashchange", onHashChange, false);

function onHashChange() {
    app.update(getExerciseProps(window.location));
    setSelected(app.exercise.operation);
}

formNode?.addEventListener("submit", onSubmit, false);

function onSubmit(event: SubmitEvent) {
    const { target } = event;

    event.preventDefault();

    if (target instanceof HTMLFormElement) {
        const answerNode = target.elements.namedItem("answer");

        if (app.verify(answerNode)) {
            app.update({
                operation: app.exercise.operation,
                term: app.term,
                max: app.max,
            });

            setAccent({
                imageNode,
                accentNode: document.body,
                value: accentGen.next().value,
            });
        }
    }
}

skipNode?.addEventListener("click", onSkip, false);

function onSkip() {
    app.update({
        operation: app.exercise.operation,
        term: app.term,
        max: app.max,
    });
}
