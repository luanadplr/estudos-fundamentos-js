/*

Exercício Complementar 1 - Configuração de desconto

Crie uma função criarCalculadoraDesconto(percentual) que retorne outra função. A função retornada deve receber um preço e aplicar o percentual de desconto configurado

*/

const percentual = criarCalculadoraDesconto(10);
console.log(percentual(400));

function criarCalculadoraDesconto(percentual) {
  return function (preco) {
    return preco * (1 - percentual / 100);
  };
}
