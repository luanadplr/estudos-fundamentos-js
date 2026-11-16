/*

Exercício 4 - Closure

Crie uma função createCounter() que retorna outra função

Cada vez que a função retornada for executada, o contador deverá aumentar 1.

*/

function createCounter() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}

const contador = createCounter();
console.log(contador());
console.log(contador());
console.log(contador());
