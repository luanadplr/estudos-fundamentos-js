/*

Exercício 3 - Controle de Estoque

Crie uma função que receba nome de um produto, seu preço e sua quantidade

Retorne um objeto com essas informações e o valor total em estoque

*/

const produto = controleEstoque("M&M's", 5.5, 10);
console.log(produto);

function controleEstoque(nome, preco, quantidade) {
  return {
    nome,
    preco,
    quantidade,
    valorTotal: quantidade * preco,
  };
}
