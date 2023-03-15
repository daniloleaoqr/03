const num = 10
const array = [10, 20]

const pessoa = {
  nome: "Jose",
  idade: 20,
  casado: true,
  notas: [5, 8, 100],
  endereco: {
    rua: "Rua xyz",
    numero: 10
  }
}

console.log(pessoa["nome"])
console.log(pessoa.nome)//outra opção
console.log(pessoa["idade"])
console.log(pessoa["casado"])
console.log(pessoa["notas"][2])
console.log(pessoa.notas[2])//outra opção
console.log(pessoa["endereco"]["rua"])
console.log(pessoa.endereco.rua)//outra opção