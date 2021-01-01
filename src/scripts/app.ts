import { setRandomMonster } from "./monster";

import "../styles/main.scss";

class App {
    init() {
        setRandomMonster();
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