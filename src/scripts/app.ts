import { DOMNode } from "./types";
import { getNumberImage } from "./helpers/get-number-image";
import { getExpression } from "./helpers/get-expression";

import "@styles/main.scss";
import { getParsedQueryParams } from "./helpers/get-parsed-query-params";
import { setInputValue } from "./helpers/set-input-value";
import { setTextContent } from "./helpers/set-text-content";

interface IApp {
    changeImage(): void;
    createTask(): void;
}

class App implements IApp {
    private imageNode: DOMNode;
    formNode: DOMNode;
    operatorNode: DOMNode;

    constructor() {
        this.imageNode = document.getElementById("image");
        this.formNode = document.getElementById("form");
        this.operatorNode = document.getElementById("operator");

        this.formNode?.addEventListener("submit", event => event.preventDefault(), false);
    }

    /**
     * Change the image in the header
     */
    changeImage() {
        if (this.imageNode instanceof HTMLImageElement) {
            this.imageNode.src = getNumberImage();
        }
    }

    createTask() {
        if (this.formNode instanceof HTMLFormElement) {
            const expr = getExpression(getParsedQueryParams(window.location.search));
            const term1 = this.formNode.elements.namedItem("term-1");
            const term2 = this.formNode.elements.namedItem("term-2");

            setInputValue(term1, expr.term1.toString());
            setInputValue(term2, expr.term2.toString());
            setTextContent(this.operatorNode, expr.operator);
        }
    }



    init() {
        this.createTask();
    }
}

export {
    App
};

// import { MathTask } from "./math-task";
// import { Reporter, ReporterTaskData, ReporterStatsData } from "./reporters/reporter";
// import { ReporterTaskDom } from "./reporters/reporter-task-dom";
// import { ReporterStatsDom } from "./reporters/reporter-stats-dom";

// // import { setMonster, moods } from "./monster";
// import "../images/monsters/sweetie.svg"

// interface Reporters {
//     task: Reporter<ReporterTaskData>;
//     stats: Reporter<ReporterStatsData>;
// }

// interface AppProps {
//     task: MathTask;
//     reporters: Reporters;
// }

// interface FormElements extends HTMLFormControlsCollection {
//     term1: HTMLInputElement;
//     term2: HTMLInputElement;
//     answer: HTMLInputElement;
//     operator: HTMLInputElement;
// }

// /**
//  * Application class
//  * @class
//  */

// // TODO:
// // 1. The task instance should generate math tasks
// // 2. Reporters should render task and stats views
// // 3. The manager should manage the user input
// // 4. The app should manage the data flow
// export class App {
//     answer: string;
//     task: MathTask;
//     reporters: Reporters;
//     stats = [0, 0];

//     constructor(props: AppProps) {
//         this.answer = "";
//         this.task = props.task;
//         this.reporters = props.reporters;
//         this.reporters.task.update({
//             term1: this.task.expression.term1.toString(),
//             term2: this.task.expression.term2.toString(),
//             operator: this.task.expression.operator,
//             answer: this.answer
//         });

//         document.addEventListener("submit", this.checkTask, false);

//         // setMonster(moods[Math.round(Math.random() * 3)])
//     }

//     checkTask = (event: Event) => {
//         event.preventDefault();
//         const target = event.target as HTMLFormElement;
//         const elements = target.elements as FormElements;
//         if (this.task.checkEquality(parseInt(elements.answer.value, 10))) {
//             this.reporters.stats.update({
//                 correct: "1",
//                 wrong: "0"
//             });
//             this.task.create();
//             this.reporters.task.update({
//                 term1: this.task.expression.term1.toString(),
//                 term2: this.task.expression.term2.toString(),
//                 operator: this.task.expression.operator,
//                 answer: ""
//             });
//         } else {
//             this.reporters.stats.update({
//                 correct: "0",
//                 wrong: "1"
//             });
//         }
//     }
// }

// const app = new App({
//     task: new MathTask(),
//     reporters: {
//         task: new ReporterTaskDom(),
//         stats: new ReporterStatsDom()
//     }
// });