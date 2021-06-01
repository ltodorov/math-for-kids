import { Updater } from "./updater";
import { App } from "./app";
// import { gtag } from "./gtag";
import { getParsedQueryParams } from "./helpers/get-parsed-query-params";
import { getMaxNumber } from "./helpers/get-max-number";

import "@styles/main.scss";

const formNode = document.getElementById("form");
const historyNode = document.getElementById("history");
const imageNode = document.getElementById("image");
const progressNode = document.getElementById("progress");
const scoreWrongNode = document.getElementById("wrong");
const scoreCorrectNode = document.getElementById("correct");

const updater = new Updater({
    formNode,
    historyNode,
    imageNode,
    progressNode,
    scoreWrongNode,
    scoreCorrectNode
});

const {
    operator: operatorIndex,
    max
} = getParsedQueryParams(window.location.search);

const app = new App({
    updater,
    exercisesCount: (progressNode as HTMLProgressElement).max,
    operatorIndex,
    max: getMaxNumber(max)
});

formNode?.addEventListener("submit", function onSubmit(event) {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const answerNode = target.elements.namedItem("answer");
    answerNode instanceof HTMLInputElement && app.verify(answerNode.value);
}, false);

// gtag("js", new Date());
// gtag("config", "G-SZMZLZR7CZ");