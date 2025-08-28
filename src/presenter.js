import sumar from "./sumador";
import fizzbuzz from "./fizzbuzz";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});


function ejecutarFizzBuzz() {
  const numeroInput = document.getElementById("numero");
  const resultadoParrafo = document.getElementById("resultado");
  const n = parseInt(numeroInput.value);
  const result = [];

  if (isNaN(n) || n <= 0) {
    resultadoParrafo.textContent = "Por favor, ingrese un numero valido.";
    return;
  }

  for (let i = 1; i <= n; i++) {
    result.push(fizzbuzz(i));
  }
  resultadoParrafo.textContent = result.join(", ");
}

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("ejecutarBoton");
  boton.addEventListener("click", ejecutarFizzBuzz);
});