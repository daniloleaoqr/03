/*
Elabore um algoritmo que dada a idade de um nadador
classifique-o em uma das seguintes categorias:

Infantil A = 3 a 7 anos
Infantil B = 8 a 11 anos
Juvenil A = 12 a 13 anos 
Juvenil B = 14 a 17 anos
Adultos = Maiores de 18 anos

Operdadores logicos:
OU = || a condição é verdadeira se UM ou OUTRO for verdadeiro
E = && a condição é verdadeiro se TODOS forem verdadeiros
*/

const idade = 12

if (idade >= 5 && idade <= 7) console.log("Infatil A")
else if (idade >= 8 && idade <= 11) console.log("Infantil B")
else if (idade >= 12 && idade <= 13) console.log("Juvenil A")
else if (idade >= 14 && idade <= 18) console.log("Juvenil B")
else if (idade >= 18) console.log("Adultos")


