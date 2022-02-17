import type { Accent } from "@scripts/models/accent";
import { getAccent } from "../get-accent";
import { setAccent } from "../set-accent";

describe("setAccent", () => {
    let accentGen: Generator<Accent, Accent, Accent>;
    let imageNode: HTMLElement | null;
    let navNode: HTMLElement | null;

    beforeEach(() => {
        accentGen = getAccent();
    });

    afterEach(() => {
        imageNode = null;
        navNode = null;
    });

    test("sets accent color and image", () => {
        imageNode = document.createElement("img");
        imageNode.id = "image";
        navNode = document.createElement("nav");
        navNode.id = "nav";
        setAccent({
            imageNode,
            navNode,
            value: accentGen.next().value,
        });

        expect((imageNode as HTMLImageElement).src).toBe("http://localhost/2.svg");
        expect(navNode.style.getPropertyValue("--accent-color")).toBe("#eed8c5");
    });

    test("skips imageNode update if not HTMLImageElement", () => {
        imageNode = document.createElement("div");
        imageNode.id = "image";
        setAccent({
            imageNode,
            navNode,
            value: accentGen.next().value,
        });

        expect((imageNode as HTMLImageElement).src).toBe(undefined);
    });

    test("skips navNode update if null", () => {
        navNode = null;
        setAccent({
            imageNode,
            navNode,
            value: accentGen.next().value,
        });

        expect(navNode).toBe(null);
    });
});
