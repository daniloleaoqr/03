const pessoa = {
  nome: "Danilo",
  sobrenome: "Leão",
  idade: 32
}

//const nome = pessoa.nome
//const sobrenome = pessoa.sobrenome
//const idade = pessoa.idade

const {nome, idade} = pessoa

//console.log(nome)
//console.log(idade)

/*
const pessoaComMaisDados = {
  ...pessoa
}
console.log(pessoaComMaisDados)
*/

/*
const array = [1, 2, 3, 4]
const [a, b] = array
console.log(a)
console.log(b)
*/

const array = [10, 20, 3, 4]
const [a, b] = array

const newArray = [0, ...array, 5]
console.log(newArray)