import { getAccent } from "../get-accent";

describe("getAccent", () => {
    const generator = getAccent();

    test.each([
        [2, "#eed8c5"],
        [3, "#b1bc56"],
        [4, "#d36664"],
        [5, "#be99b5"],
        [6, "#adafa8"],
        [7, "#b5ba53"],
        [8, "#ea9368"],
        [9, "#f1b363"],
        [0, "#ed9a69"],
        [1, "#ffd05e"],
        [2, "#eed8c5"],
    ])("returns %s.svg and %s", (index, color) => {
        expect(generator.next().value).toEqual([
            `${index}.svg`,
            color,
        ]);
    });
});