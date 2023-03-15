/*

1. João, um pescador, gostaria de controlar o rendimento diario de seu trabalho.

Toda vez que ele traz um peso de peixes maior que o estabelecido
pelo regulamento de pesca do estado de São Paulo (50 Kg)
deve pagar um multa de R$ 4,00 por quilo excedente.
João precisa de você faça um script que leia o peso de peixes 
de João e verifica se há ou não excesso. Se houver, 
gravar na variavel "excesso" e na variável "multa" o valor da multa
que João deverá pagar.
*/

const limete = 50 //limite em kg definido
const valorDaMulta = 4 //valor da multa em R$ definido
const pesoDePeixes = 60 //peso de peixes do João

let excesso //excesso de peso
let multa //valor da multa

if (pesoDePeixes > limete) {
  excesso = pesoDePeixes - limete
} else {
  excesso = 0
}

multa = excesso * valorDaMulta
console.log("Excesso: ", excesso)
console.log("Multa: R$", multa)

const limete1 = 50 //limite em kg definido
const valorDaMulta1 = 4 //valor da multa em R$ definido
const pesoDePeixes1 = 60 //peso de peixes do João


let excesso1 = pesoDePeixes1 > limete1 ? pesoDePeixes1 - limete1 : 0 
let multa1 = excesso1 * valorDaMulta1

console.log("Excesso: ", excesso1)
console.log("Multa: R$", multa1)