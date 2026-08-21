
let temperatura = Number(prompt("Digite a temperatura em °C:"));


let classificacao;


if (temperatura < 15) {
    classificacao = "Está frio! 🥶";
} 
else if (temperatura <= 25) {
    classificacao = "O clima está agradável! 😊";
} 
else {
    classificacao = "Está quente! 🥵";
}

document.getElementById("temperatura").textContent =
    "Temperatura informada: " + temperatura + "°C";


document.getElementById("mensagem").textContent =
    classificacao;


console.log("Temperatura:", temperatura + "°C");
console.log("Classificação:", classificacao);