import updateElement from "./update-element";

describe("setAupdateElementttributes", () => {
    let el: HTMLInputElement | null;

    const cb = jest.fn((el: HTMLInputElement) => {
        el.value = "1";
        el.disabled = true;
    });

    test("should set attributes if the element isn't null", () => {
        el = document.createElement("input");
        updateElement(el, cb);
        expect(el.value).toBe("1");
        expect(el.disabled).toBe(true);
    });

    test("shouldn't execute the callback if the element is null", () => {
        el = null;
        updateElement(el, cb);
        expect(cb).not.toHaveBeenCalled();
    });
});