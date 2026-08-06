let nome = prompt('Qual o seu nome?');
let classe = prompt('Qual sua classe?')
let number1 = prompt(`Certo ${nome}! da classe ${classe}Qual foi sua nota em Av1?`)
let number2 = prompt(`Certo ${nome}! da classe ${classe}Qual foi sua nota em Av2?`)
let number3 = prompt(`Certo ${nome}! da classe ${classe}Qual foi sua nota em Av3?`)

let Av1  = Number(number1.replace(',','.'));
let Av2 = Number(number2.replace('.','.'));
let Av3 = Number(number3.replace(',','.'));

console.log('number1:', Av1);
console.log('number2:', Av2, typeof Av2);
console.log('number3:', Av3, typeof Av3);

let imc = Nota / (number1 * number2 * number3);
let imcFormatado = imc.toFixed(1);

if (imc < 0) {
 console.log("Abaixo da media")
} else if  (imc < 7) {
console.log("Acima da media")
}
