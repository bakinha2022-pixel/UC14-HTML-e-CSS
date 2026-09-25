let tarefas = [];

let totalTarefas = 0;
let totalConcluidas = 0;

function adicionarTarefa() {
    let nome = document.getElementById("Tarefa").value.trim();

    let materia = document.getElementById("materia").value.trim();

    let prioridade = document.getElementById("prioridade").value;

    let mensagem = document.getElementById("mensagem");
    if (nome === "" || materia === "" || prioridade === "") {
        mensagem.textContent = "Preencha todos os campos!";
        mensagem.style["color"] = "red";
        return;
    }
}

let duplicada = tarefas.some(function(tarefa) {
    return tarefa.nome.toLowerCase() === nome.toLowerCase();

});

if (duplicada) {
    mensagem.textContent = "Tarefa já existe!";
    mensagem.style["color"] = "red";
    return;
}

let novaTarefa = {
    nome: nome,
    materia: materia,
    prioridade: prioridade,
    concluida: false
};
{
tarefas.push(novaTarefa);
totalTarefas++;
mensagem.textContent = "Tarefa adicionada com sucesso!";
mensagem.style["color"] = "green";

atualizarContadores();
exibirTarefas();
limpasCampos();
}
function exibirTarefas() {
    let lista = document.getElementById("listaTarefas");
    lista.textContent = "tarefa";
    let titulo = document.createElement("h3");
    titulo.textContent = tarefa.nome;
    let materia = document.createElement("p");
    materia.textContent = "Matéria: " + tarefa.materia;
    let prioridade = document.createElement("p");
    prioridade.textContent = "Prioridade: " + tarefa.prioridade;

    let status = document.createElement("p");

    status.textContent = tarefa.concluida
    ? "Status: Concluida"
    : "Status: Pendente";

    card.appendChild(titulo);
    card.appendChild(materia);
    card.appendChild(prioridade);
    card.appendChild(status);

    destacarPrioridade(card, tarefa.prioridade);

    if (tarefa.concluida) {
        card.classList.add("concluida");
    } else {
        let botao = document.createElement("button");
        botao.textContent = "Concluir";
        botao.onclick = function() {
            concluirTarefa(indice);
    };
        card.appendChild(botao);
    }
    lista.appendChild(card);
   
};

function destacarPrioridade(card, prioridade) {
    if (prioridade === "Alta") {
        card.style.backgroundColor = "5px solid red";
    } else if (prioridade === "Média") {
        card.style.backgroundColor = "5px solid orange";
    } else if (prioridade === "Baixa") {
        card.style.backgroundColor = "5px solid blue";
    }
}

function concluirTarefa(indice) {
    let tarefa = tarefas[indice];
    if (tarefa.concluida) {
        return;
    }
    tarefa.concluida = true;
    totalConcuidas++;

    let mensagem = document.getElementById("mensagem");
    mensagem.textContent = "Tarefa concluída com sucesso!";
    mensagem.style.color= "green";

    atualizarContadores();
    exibirTarefas();
}

function atualizarContadores () {
document.getElementById("contador").textContent =
"Tarefas cadastradas: " + totalTarefas;
document.getElementById("contadorConcluidas").textContent =
"Tarefas concluidas: " + totalConcluidas;
}

function limparCampos () {
    document.getElementById("tarefa").value = "";
    document.getElementById("materia").value = "";
    document.getElementById("prioridade").value = "";
}

function alternarModo() {
    document.body.classList.toggle("modo-concentracao")
}