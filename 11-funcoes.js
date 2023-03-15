/*
function ola () {
  return "ola"
  console.log("nao chega aqui")
}

const variavel = ola
const outraVariavel = variavel()
console.log(outraVariavel)
*/

function soma (A, B){
  return A + B
}

function subtracao (A, B){
  return A - B
}

//function multiplicacao (A, B){
//  return A * B
//}

//function divisao (A, B){
//  return A / B
//}

function calculadora (tipo){
  const A = 1
  const B = 2
  if (tipo === "soma") return soma(A, B)
  else if (tipo === "subtracao") return subtracao(A, B)
}

const resultado = calculadora("subtracao")
console.log(resultado)

/*
faça uma função para verificar se o numero e par ou não.
*/

function par (num){
  const condicao = num % 2 === 0
  return condicao
}

const ePar = par(3)
console.log(ePar)

/*
mostra os numeros pares de 0 a 100
*/

for (let i = 0; i <= 100; i++) {
  if (par(i)) console.log(i)
}
