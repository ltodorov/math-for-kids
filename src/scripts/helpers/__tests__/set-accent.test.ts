import type { Accent } from "@scripts/models/accent";
import { getAccent } from "../get-accent";
import { setAccent } from "../set-accent";

describe("setAccent", () => {
    let accentGen: Generator<Accent, Accent, Accent>;
    let imageNode: HTMLElement | null;
    let accentNode: HTMLElement | null;

    beforeEach(() => {
        accentGen = getAccent();
    });

    afterEach(() => {
        imageNode = null;
        accentNode = null;
    });

    test("sets accent color and image", () => {
        imageNode = document.createElement("img");
        imageNode.id = "image";
        accentNode = document.body;
        accentNode.id = "nav";
        setAccent({
            imageNode,
            accentNode,
            value: accentGen.next().value,
        });

        expect((imageNode as HTMLImageElement).src).toBe("http://localhost/2.svg");
        expect(accentNode.style.getPropertyValue("--accent-color")).toBe("#eed8c5");
    });

    test("skips imageNode update if not HTMLImageElement", () => {
        imageNode = document.createElement("div");
        imageNode.id = "image";
        accentNode = document.body;
        setAccent({
            imageNode,
            accentNode,
            value: accentGen.next().value,
        });

        expect((imageNode as HTMLImageElement).src).toBe(undefined);
    });

    test("skips navNode update if null", () => {
        setAccent({
            imageNode,
            accentNode,
            value: accentGen.next().value,
        });

        expect(accentNode).toBe(null);
    });
});
