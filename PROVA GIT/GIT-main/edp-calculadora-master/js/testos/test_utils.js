import {calculate} from "../utils";

describe("Tests per a la funció calcular", () => {
    test("suma 1 i 2 i espera obtenir 3", () => {
        expect(calculate(1, 2, "+")).toBe(3);
    });

    test("resta 2 i 1 i espera obtenir 1", () => {
        expect(calculate(2, 1, "-")).toBe(1);
    });

    test("multiplica 2 per 2 i espera obtenir 4", () => {
        expect(calculate(2, 2, "*")).toBe(4);
    });

    test("divideix 2 entre 2 i espera obtenir 1", () => {
        expect(calculate(2, 2, "/")).toBe(1);
    });
});