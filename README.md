# 1º dia - Revisão dos Fundamentos de Javascript

### Conceitos aprendidos

- var, let, const
- Tipos primitivos e tipos de referência
- Operadores de comparação e lógico
- Escopo global, função e bloco
- Hoisting
- Clousures
- Function Declaration x Function Expression x Arrow Functions

## Perguntas e Respostas

```bash
# Qual a diferença entre const e let?

A diferença é que o let permite reatribuição e o const não permite após sua inicialização. Ambos possuem escopo de bloco.

# Porque devemos evitar utilizar var?

var possui escopo de função e pode ser redeclarada no mesmo escopo do código o que pode gerar conflitos e quebras de funcionalidades. Sofre hoisting gerando um valor undefined na inicialização.

# Qual a diferença entre tipos primitivos e tipos de referência?

Tipos primitivos quando atribuidos numa variável se tornam independente uma da outra, se uma variável receber a outra, se esta segunda for alterada, não afetará a variável original.

Tipos de referência (Arrays e Objetos) quando recebem o mesmo objeto ou array, recebem a referência desse objeto, ou seja, duas variáveis com o mesmo objeto serão alteradas mesmo que apenas uma seja modificada.

# O que acontece quando duas variáveis apontam o mesmo objeto?

As duas variações sofreram alterações simultaneamente.

# Qual a diferença entre escopo global, de função e de bloco?

Escopo global é toda a área do código. Uma variável declarada globalmente pode ser lida em todo o código, independente dos fechamentos.

Escopo de função é a área limitada a uma função (function), desde o seu ínicio ao seu fechamento.

Escopo de bloco é toda a área "cercada" por um fechamento, isso independente de funções, como if/else, try/catch.

# O que é hoisting?

É a capacidade do Javascript de ler variáveis e funções antes delas serem declaradas. O hoisting funciona em funções declaradas e variáveis declaradas com var. let e const não recebem o mesmo tratamento.

# O que é Temporal Dead Zone?

TDZ é o período entre a entrada no escopo da variável e sua declaração efetiva no código.

# Qual a diferença entre Function Declaration e Function Expression?

A 1º são funções declaradas no momento de sua criação, elas possuem um nome e não estão atribuídas a uma variável. A 2º são criadas associadas a uma variável.

# Porque arrow functions não possuem this próprio?

Porque arrow functions utilizam o this dentro do ambiente léxico em que foram criadas.

# O que é uma closure e onde ela pode ser utilizada?

Closures são fechamentos no Javascript, o termo é dado a função que "lembra" do contexto onde ela foi criada, o ambiente léxico de sua criação, mesmo quando executada fora desse ambiente.

Pode ser utilizada em middlewares configuravéis, funções de validação, controle de estado privado, cache e etc.

```

## Exercícios realizados no 1º dia

1. Verificação de idade
2. Calculadora
3. Controle de Estoque
4. Contador com Clousure

### Complementares - Clousures

1. Configuração de desconto
2. Validador de Cargo

### Mini projeto

1. Gerenciador de usuários
