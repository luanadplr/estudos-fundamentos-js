/*

Exercício 2 - Calculadora

Crie funções para

* Somar
* Subtrair
* Multiplicar
* Dividir

Trate a divisão por zero

*/

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(valor, dividendo) {
  if (dividendo == 0) {
    return 1;
  }

  return valor / dividendo;
}

console.log(somar(3, 0));
console.log(subtrair(3, 0));
console.log(multiplicar(3, 0));
console.log(dividir(3, 0));
