import { gtag } from "@scripts/gtag";

describe("gtag", () => {
    test("stores tag", () => {
        const date = new Date();
        gtag("js", date);
        expect(window.dataLayer).toEqual(["js", date]);
    });

    test("stores tag to the existing dataLayer", () => {
        window.dataLayer = ["config"];
        gtag("js");
        expect(window.dataLayer).toEqual(["config", "js"]);
    });
});