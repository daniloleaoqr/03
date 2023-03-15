const person = {
  nome: "Danilo",
  lastName: "Leão"
}

//Object.key(): Criar um array com todas as chaves do objeto
//console.log(object.Keys(person))

//Object.values(): Cria um array com todos os valores do objeto
//console.log(Object.values(person))

//Object.entries(): criar um array com um array de objetos e valores
const array = Object.entries(person)

/*
 [['nome', 'Danilo'], ['lastNane', 'Leão']]
*/

const livros = {
  'livro A': 19.90,
  'livro B': 97.00,
  'livro C': 20.00
}

const values = Object.values(livros)
const sum = values.reduce((val, acc) => val + acc, 0)

console.log(sum);