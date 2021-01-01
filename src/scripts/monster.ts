import cowardly from "@images/monsters/cowardly.svg";
import grumpy from "@images/monsters/grumpy.svg";
import happy from "@images/monsters/happy.svg";
import sweetie from "@images/monsters/sweetie.svg";

type Mood = "cowardly" | "grumpy" | "happy" | "sweetie";

const monsterSrc: string[] = [cowardly, grumpy, happy, sweetie];
const monsterSrcLength: number = monsterSrc.length;

const monsterEl = document.getElementById("monster");

export function setRandomMonster() {
    if (monsterEl instanceof HTMLImageElement) {
        const src = monsterSrc[5];
        if (typeof src !== "undefined") {
            monsterEl.src = src;
        }
    }
}