import Calculadora from "../model";

describe("Intentos de test de calculadora", () => {
  test("Calculadora", () => {
    const calculador = new Calculadora();
    calculador.set("1");
    calculador.set_operator("+");
    calculador.set("2");
    const result = calculador.operate();
    expect(result).toBe("3");
  });

  test("Si nomes retorna un sol valor", () => {
    const calculador = new Calculadora();
    calculador.set("1");
    const result = calculador.operate();
    expect(result).toBe("1");
  });

  test("Si no hi ha un sol operador, ajuntar els operadors", () => {
    const calculador = new Calculadora();
    calculador.set("1");
    calculador.set("");
    calculador.set("2");
    const result = calculador.operate();
    expect(result).toBe("12");
  });

  test("Si no hi ha valors, tornar error", () => {
    const calculador = new Calculadora();
    const result = calculador.operate();
    expect(result).toBe("Error");
  });

  test("Si hi ha un '.' davant de un valor, s'entendra com a decimal", () => {
    const calculador = new Calculadora();
    calculador.set_point();
    calculador.set(2);
    expect(calculador.value1).toBe("0.2");
    expect(calculador.operator).toBe(undefined);
    expect(calculador.value2).toBe(undefined);
  });

  test("La opcio de 'clear' ha de borrar els valors", () => {
    const calculador = new Calculadora();
    calculador.set(2);
    calculador.operator = "+";
    calculador.set(3);
    calculador.clear();
    expect(calculador.value1).toBe(undefined);
    expect(calculador.operator).toBe(undefined);
    expect(calculador.value2).toBe(undefined);
  });

  test("Si s'afageix un altre valor, sha de ajuntar am el següent", () => {
    const calculador = new Calculadora();
    calculador.set(1);
    calculador.set(1);
    expect(calculador.value1).toBe("11");
    expect(calculador.operator).toBe(undefined);
    expect(calculador.value2).toBe(undefined);
  });
});