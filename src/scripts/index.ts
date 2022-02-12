import { App } from "./app";
import { getAccent } from "./helpers/get-accent";
import { getParsedOperation } from "./helpers/get-parsed-operation";
import { setSelected } from "./helpers/set-selected";
import { gtag } from "./gtag";

import "@styles/index.scss";
import { setAccent } from "./helpers/set-accent";

const formNode = document.getElementById("form");
const navNode = document.getElementById("nav");
const imageNode = document.getElementById("image");
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

gtag();