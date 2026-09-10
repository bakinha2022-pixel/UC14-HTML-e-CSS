console.log("Olá, Luiz! Seja bem-vindo")
console.log("Olá, Gustavo seja bem vindo")
console.log("Ola cecilia seja bem vinda")

function darboasvindas(nome) {
     console.log(`Olá, ${nome}! Seja bem-vindo`);
}
darboasvindas("Luiz")
darboasvindas("Gustavo")
darboasvindas("Cecília")

function apresentar(nome, idade) {
    console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
}
apresentar("Luiz", 25)
apresentar("Gustavo", 30)
apresentar("Cecília", 28)


function estaestudando(nome) {
    console.log(`${nome} está estudando!`);
}
estaestudando("Luiz")
estaestudando("Gustavo")
estaestudando("Cecília")

function somar(a, b) {
    return a + b;
}
somar(5, 3)

let resultado = somar(5, 3);
console.log(resultado);


function media(a, b) {
    return (a + b) / 2;
}
let mediafinal = media(7, 9);
if (mediafinal >= 7) {
    console.log(`A média final é ${mediafinal}. Parabéns, você foi aprovado!`);
} else {
    console.log(`A média final é ${mediafinal}. Infelizmente, você foi reprovado.`);
}
