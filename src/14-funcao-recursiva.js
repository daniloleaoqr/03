/*
Crie um algoritmo para calcular o fatorial de um numeral n!.

Obs.: O fatorial de um numero e calculado pela multiplicação 
desse numero por todos os seus antecessores até chegar ao numero 1

Exemplos:
2! =  2 * 1
3! =  3 * 2 * 1 
4! =  4 * 3 * 2 * 1
*/

function fatorial (n){
  if (n <= 2) return n
  return fatorial(n - 1) * n
}

const numero = 4
const resposta = fatorial(numero)
console.log(resposta)