/*
Crie um algoritmo para calcular o fatorial de um numeral n!.

Obs.: O fatorial de um numero e calculado pela multiplicação 
desse numero por todos os seus antecessores até chegar ao numero 1

Exemplos:
2! =  2 * 1
3! =  3 * 2 * 1 
4! =  4 * 3 * 2 * 1
*/

function fatorial (n) {
  let i = n 
  let fatorial = 1

  while (i >= 2) {
    fatorial = fatorial * i
    i-- 
  }

  return fatorial
}

const number = 4
const resposta = fatorial(number)
console.log(resposta)

