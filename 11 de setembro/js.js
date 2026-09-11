function viajem(hotel1, passeio, alimento, passagem) {
     return (hotel1 + passeio + alimento + passagem);
}
let media1 = prompt("Qual seu nome?:");
let hotel1 = prompt("Qual o preço do hotel?");
let passeio = prompt("Qual o preço dos passeios?");
let alimento = prompt("Qual o preço dos alimentos?");
let passagem = prompt("Qual o preço da passagem?");

let media2 = viajem(hotel1, passeio, alimento, passagem);

if (media2 == 2001) {
    console.log("O preço esta entre 2000")
}
else if (media2 = 2000) {
    console.log("O preço esta entre 2000")
}
