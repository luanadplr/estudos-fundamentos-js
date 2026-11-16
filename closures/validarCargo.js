/*

Exercício Complementar 2 - Validar Cargo

Crie uma função `criarValidadorCargo(cargoPermitido)` que retorne uma função capaz de receber um usuário e verificar se o cargo dele corresponde ao cargo permitido.

A função interna deve utilizar o cargoPermitido recebido pela função externa.

*/

const validarCargo = criarValidadorCargo("admin");
console.log(validarCargo("funcionario"));

function criarValidadorCargo(cargoPermitido) {
  return function (cargo) {
    if (cargo != cargoPermitido) {
      return "Acesso NEGADO!";
    }

    return "Seja Bem Vindo, " + cargo;
  };
}
