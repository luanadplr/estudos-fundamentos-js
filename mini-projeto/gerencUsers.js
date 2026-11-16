/*

Mini Projeto - Gerenciador de Usuários

Você deverá criar um programa JavaScript que:
1. Armazene usuários em um array.
2. Tenha uma função para cadastrar usuários.
3. Tenha uma função para buscar usuários pelo nome.
4. Tenha uma função para verificar se um usuário está ativo.
5. Utilize filter, find e map.
6. Utilize pelo menos uma Closure para controlar alguma informação privada.
7. Utilize const e let adequadamente.

*/

function gerenciadorUsuarios() {
  const users = [];

  return {
    cadastrarUsuarios(nome, idade, isActive) {
      const usuarioCadastrado = { nome, idade, isActive };
      users.push(usuarioCadastrado);
      return usuarioCadastrado;
    },

    buscarUsariosPeloNome(nome) {
      return users.find((user) => user.nome === nome) ?? null;
    },

    listarAtivos() {
      return users.filter((user) => user.isActive);
    },

    listarNomes() {
      return users.map((user) => user.nome);
    },
  };
}

const gerenciador = gerenciadorUsuarios();
gerenciador.cadastrarUsuarios("Luana", 27, true);
gerenciador.cadastrarUsuarios("Rodrigo", 32, false);
console.log(gerenciador.buscarUsariosPeloNome("Rodrigo"));
console.log(gerenciador.listarAtivos());
console.log(gerenciador.listarNomes());
