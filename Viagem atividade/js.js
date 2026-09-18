function mostrarnome() {
    let nome = document.getElementById("nome").value;

    document.getElementById("Resultado").textContent = "Voce escolheu " + nome + "!";
}
function mudarcor() {
    document.getElementById("Resultado").style.color = "red";
}
let contador = 10;

function aumentar() {
    contador++;
    document.getElementById("Number").textContent = contador;
}

function diminuir() {
    contador--;
    document.getElementById("Number").textContent = contador;
}