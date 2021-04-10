import { Updater } from "./updater";
import { App } from "./app";
import { gtag } from "./gtag";

import "@styles/main.scss";

const formNode = document.getElementById("form");
const historyNode = document.getElementById("history");
const imageNode = document.getElementById("image");
const progressNode = document.getElementById("progress");
const scoreNegativeNode = document.getElementById("negative");
const scorePositiveNode = document.getElementById("positive");

const updater = new Updater({
    formNode,
    historyNode,
    imageNode,
    progressNode,
    scoreNegativeNode,
    scorePositiveNode
});

const app = new App({
    updater
});

formNode?.addEventListener("submit", function onSubmit(event) {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const answerNode = target.elements.namedItem("answer");
    answerNode instanceof HTMLInputElement && app.verify(answerNode.value);
}, false);

gtag("js", new Date());
gtag("config", "G-SZMZLZR7CZ");