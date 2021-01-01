// import { setMonster } from "./monster";

describe.only("monster", () => {
    let monster: HTMLDivElement;

    beforeEach(() => {
        monster = document.createElement("div");
        monster.id = "monster";
        document.body.appendChild(monster);
    });

    afterEach(() => {
        document.body.removeChild(monster);
    });

    test("should set different monster mood", () => {
        expect(monster.className).toBe("");
    });
});