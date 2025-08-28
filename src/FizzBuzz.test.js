const fizzbuzz = require("../src/fizzbuzz");

test("debería devolver '1' cuando el número es 1", () => {
expect(fizzbuzz(1)).toBe("1");
});

test("debería devolver '2' cuando el número es 2", () => {
expect(fizzbuzz(2)).toBe("2");
});

test("debería devolver 'Fizz' cuando el numero es multiplo de 3", () => {
expect(fizzbuzz(3)).toBe("Fizz");
});

test("debería devolver 'Buzz' cuando el numero es múltiplo de 5", () => {
expect(fizzbuzz(5)).toBe("Buzz");
});
