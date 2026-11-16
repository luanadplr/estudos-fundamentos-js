/*

Exercício 1 - Verificação de idade

Crie uma função que receba a idade de um usuário e retorne:

* Menor de idade
* Maior de idade
* Idade inválida

*/

let idade = 27;
const ehMaior = verificarIdade(idade);
console.log(ehMaior);

function verificarIdade(idade) {
  if (typeof idade != "number" || !idade) {
    return "Idade inválida";
  }

  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}
