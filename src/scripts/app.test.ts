import { App } from "./app";

describe("App", () => {
    let app: App;
    const originalLocation = window.location;

    beforeAll(() => {
        delete window.location;
        window.location = {
            search: "?max=20&term=7"
        } as Location;
    });

    beforeEach(() => {
        app = new App();
    });

    afterAll(() => {
        window.location = originalLocation;
    });

    test("should contain an object with the URL query params", () => {
        expect(app.queryParams).toEqual({
            max: 20,
            term: 7
        });
    });

    test("should contain expression on init", () => {
        Math.random = jest.fn(() => 0);
        app.createExercise();
        expect(app.expression).toEqual({
            term1: 0,
            term2: 0,
            operator: "+"
        });
    });
});