import { App } from "./app";
import { getAccent } from "./helpers/get-accent";
import { getParsedOperation } from "./helpers/get-parsed-operation";
import { setSelected } from "./helpers/set-selected";
import { setAccent } from "./helpers/set-accent";

import "@styles/index.scss";

const formNode = document.getElementById("form");
const navNode = document.getElementById("nav");
const imageNode = document.getElementById("image");
const skipNode = document.getElementById("skip");
const accentGen = getAccent();
const app = new App({
    formNode,
    operation: getParsedOperation(window.location),
});

setSelected(app.exercise.operation);

window.addEventListener("hashchange", onHashChange, false);

function onHashChange() {
    app.update(getParsedOperation(window.location));
    setSelected(app.exercise.operation);
}

formNode?.addEventListener("submit", onSubmit, false);

function onSubmit(event: SubmitEvent) {
    const { target } = event;

    event.preventDefault();

    if (target instanceof HTMLFormElement) {
        const answerNode = target.elements.namedItem("answer");

        if (app.verify(answerNode)) {
            app.update(app.exercise.operation);

            setAccent({
                imageNode,
                navNode,
                value: accentGen.next().value
            });
        }
    }
}

skipNode?.addEventListener("click", onSkip, false);

function onSkip() {
    app.update(app.exercise.operation);
}