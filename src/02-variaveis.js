let string = "STRING"
let number = 10
let decimal = 10.10
let boolean = true
let undef = undefined

const sum = number + number
console.log(sum)

const ovosDisponiveis = 10
if (ovosDisponiveis > 0) {
  console.log("LEVE 6 LEITES")
} else {
  console.log("LEVE 1 LEITES")
}

const resto = 10 % 3
console.log(resto)

const numero =  3
if (numero % 2 == 0){
  console.log("é par")
} else {
  console.log("é impar")
}

const numero1 = 5
if (numero1 % 2 == 0){
  console.log("é par")
} else if (numero1 % 3 == 0){
  console.log("É divisivel por 3") 
} else {
  console.log("Nenhum dos dois")
}


/*
Variaveis:
const - não muda
let - muda

comparativos:
if - se
else - senão
igual ==
diferente !=
maior >
menor <
maior ou igual >=
menor ou igual <=

toda comparacao retorna um boleano uma varievel, pro codigo, e sempre igual ao valor

so e possivel usar acentuacao dentro de string e nos comentarios

operacoes matematicas:
+ soma
- subtracao 
* mutiplicacao
/ divisao
% resto da divisao

if(condicoes){
  execucao do verdadeiro
} else {
  execucao se falso
}

*/

const senhaCorreta = '123'
let senha = '1234'
const bool = false
const num = 0 

if(bool){
	console.log("E igual")
} else {
	console.log("E deferente")
}

//Ex 1 - Verificar se o numero e divisivel por 13, ou seja, se dividir o numero por 13 da resto zero

const divisor = 13
const num1 = 13
const equacao = num1 % divisor

console.log("Equacao", equacao)

if(equacao == 0){
  console.log("E divisivel")
} else {
  console.log("Nao e divisivel")
}

//Ex 2 - Considerando que todos os meses possuim 30 dias, 
//dado uma quantidade de dias, dizer em qual mais e dia do mes esse dia vai cair.

//Obs: Usar Math.floor() para arrendodar o dia do mes Ex: Math.floor(11.20) vai retornar "11"

const dias = 70
const qtMeses = Math.floor(dias / 30)
const qtDiasTotal = qtMeses * 30
const diasPassados = dias - qtDiasTotal

console.log(diasPassados)