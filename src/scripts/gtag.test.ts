import { gtag } from "./gtag";

describe("gtag", () => {
    it("should store tag", () => {
        const date = new Date();
        gtag("js", date);
        expect(window.dataLayer).toEqual(["js", date]);
    });

    it("should store tag to existing dataLayer", () => {
        window.dataLayer = ["config"];
        gtag("js");
        expect(window.dataLayer).toEqual(["config", "js"]);
    });
});