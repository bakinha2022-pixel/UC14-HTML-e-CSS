
// =========================================
// FOREST WATCH - SISTEMA PRINCIPAL
// =========================================


// =========================================
// ELEMENTOS DO HTML
// =========================================

const office = document.getElementById("office");
const cameraScreen = document.getElementById("cameraScreen");
const endScreen = document.getElementById("endScreen");

const cameraName = document.getElementById("cameraName");
const cameraView = document.getElementById("cameraView");
const intruder = document.getElementById("intruder");

const towerEnemy = document.getElementById("towerEnemy");

const clockDisplay = document.getElementById("clock");
const statusDisplay = document.getElementById("status");
const seedDisplay = document.getElementById("seedCount");
const expelledDisplay = document.getElementById("expelledCount");
const energyDisplay = document.getElementById("energyDisplay");

const endTitle = document.getElementById("endTitle");
const endMessage = document.getElementById("endMessage");


// =========================================
// CONFIGURAÇÕES GERAIS
// =========================================

let gameOver = false;

let currentCamera = 0;

let gameMinutes = 0;

let seeds = 100;
let expelled = 0;


// =========================================
// SISTEMA DE ENERGIA
// =========================================

const MAX_ENERGY = 300;
let energy = MAX_ENERGY;

let powerOut = false;
let powerOutTimer = null;


// =========================================
// INIMIGO DAS CÂMERAS
// =========================================

let intruderCamera = -1;
let intruderPosition = 0;


// =========================================
// INIMIGO DA TORRE
// =========================================

let towerEnemyPresent = false;
let towerEnemyTimeout = null;


// =========================================
// NOMES DAS CÂMERAS
// =========================================

const cameras = [
    "CAM 01 - FLORESTA",
    "CAM 02 - LAGO",
    "CAM 03 - DEPÓSITO",
    "CAM 04 - PLANTAÇÃO"
];


// =========================================
// ALTERNAR ENTRE TORRE E CÂMERAS
// =========================================

function openCameras() {

    if (gameOver || powerOut) return;

    office.classList.remove("active");
    cameraScreen.classList.add("active");

    updateCamera();

}


function closeCameras() {

    if (gameOver || powerOut) return;

    cameraScreen.classList.remove("active");
    office.classList.add("active");

}


// =========================================
// TROCAR DE CÂMERA
// =========================================

function changeCamera(number) {

    if (gameOver || powerOut) return;

    currentCamera = number;

    updateCamera();

}


// =========================================
// ATUALIZAR CÂMERA
// =========================================

function updateCamera() {

    cameraName.textContent = cameras[currentCamera];

    cameraView.className = "camera-view scene-" + currentCamera;


    // MOSTRAR INVASOR

    if (intruderCamera === currentCamera) {

        intruder.classList.add("visible");

    } else {

        intruder.classList.remove("visible");

    }


    // DESTACAR BOTÃO SELECIONADO

    for (let i = 0; i < cameras.length; i++) {

        const button = document.getElementById("camBtn" + i);

        button.classList.remove("selected");

        if (i === currentCamera) {

            button.classList.add("selected");

        }

    }

}


// =========================================
// LANTERNA DAS CÂMERAS
// =========================================

function useFlash() {

    if (gameOver || powerOut) return;

    if (!cameraScreen.classList.contains("active")) return;

    if (energy < 4) return;


    // CONSUMIR ENERGIA

    energy -= 4;

    updateEnergyDisplay();


    // VERIFICAR INVASOR

    if (intruderCamera === currentCamera) {

        expelled++;

        intruderCamera = -1;

        intruderPosition = 0;

        expelledDisplay.textContent = expelled;

        statusDisplay.textContent = "INVASOR EXPULSO";

        updateCamera();

    } else {

        statusDisplay.textContent = "NENHUM INVASOR";

    }


    // EFEITO DA LANTERNA

    cameraView.style.filter = "brightness(2)";

    setTimeout(() => {

        cameraView.style.filter = "";

    }, 250);

}


// =========================================
// INIMIGO DAS CÂMERAS
// =========================================

function spawnIntruder() {

    if (gameOver || powerOut) return;

    if (intruderCamera !== -1) return;


    // ESCOLHER CÂMERA ALEATÓRIA

    intruderCamera = Math.floor(Math.random() * cameras.length);

    intruderPosition = 0;

    statusDisplay.textContent = "MOVIMENTO DETECTADO";

    updateCamera();

}


function moveIntruder() {

    if (gameOver || powerOut) return;

    if (intruderCamera === -1) return;


    intruderPosition++;


    // O INVASOR CONSEGUIU ROUBAR SEMENTES

    if (intruderPosition >= 4) {

        seeds -= 20;

        if (seeds < 0) {
            seeds = 0;
        }

        seedDisplay.textContent = seeds + "%";

        intruderCamera = -1;

        intruderPosition = 0;

        updateCamera();

        statusDisplay.textContent = "SEMENTES ROUBADAS";


        if (seeds <= 0) {

            finishGame(
                "FLORESTA PERDIDA",
                "Os invasores conseguiram roubar todas as sementes!"
            );

        }

        return;

    }


    // O INVASOR MUDA DE CÂMERA

    intruderCamera = (intruderCamera + 1) % cameras.length;

    updateCamera();

}


// =========================================
// INIMIGO DA TORRE
// =========================================

function spawnTowerEnemy() {

    if (gameOver || powerOut) return;

    if (towerEnemyPresent) return;


    towerEnemyPresent = true;

    towerEnemy.classList.add("visible");

    statusDisplay.textContent = "INVASOR NA TORRE!";


    // TEMPO PARA AFASTAR O INVASOR

    towerEnemyTimeout = setTimeout(() => {

        if (towerEnemyPresent && !gameOver) {

            finishGame(
                "TORRE INVADIDA",
                "Você demorou demais para afastar o invasor da janela!"
            );

        }

    }, 8000);

}


// =========================================
// AFASTAR INIMIGO DA TORRE
// =========================================

function repelTowerEnemy() {

    if (gameOver || powerOut) return;

    if (!office.classList.contains("active")) return;

    if (!towerEnemyPresent) return;

    if (energy < 5) return;


    // CONSUMIR ENERGIA

    energy -= 5;

    updateEnergyDisplay();


    // AFASTAR INVASOR

    towerEnemyPresent = false;

    clearTimeout(towerEnemyTimeout);

    towerEnemy.classList.add("flashed");

    expelled++;

    expelledDisplay.textContent = expelled;

    statusDisplay.textContent = "TORRE SEGURA";


    setTimeout(() => {

        towerEnemy.classList.remove("visible");

        towerEnemy.classList.remove("flashed");

    }, 500);

}


// =========================================
// SISTEMA DE ENERGIA
// =========================================

function updateEnergy() {

    if (gameOver || powerOut) return;


    // CONSUMO NA TORRE

    if (cameraScreen.classList.contains("active")) {

        energy -= 1.2;

    } else {

        energy -= 0.3;

    }


    if (energy < 0) {

        energy = 0;

    }


    updateEnergyDisplay();


    // ENERGIA ACABOU

    if (energy <= 0) {

        activatePowerOut();

    }

}


// =========================================
// ATUALIZAR VISUAL DA ENERGIA
// =========================================

function updateEnergyDisplay() {

    energyDisplay.textContent = Math.ceil(energy) + "%";

    energyDisplay.classList.remove("low", "critical");


    if (energy <= MAX_ENERGY * 0.3 && energy > MAX_ENERGY * 0.1) {

        energyDisplay.classList.add("low");

    }


    if (energy <= MAX_ENERGY * 0.1) {

        energyDisplay.classList.add("critical");

    }

}


// =========================================
// FALTA DE ENERGIA
// =========================================

function activatePowerOut() {

    if (powerOut || gameOver) return;

    powerOut = true;

    energy = 0;

    updateEnergyDisplay();

    document.body.classList.add("power-out");


    // DESLIGAR EQUIPAMENTOS

    cameraScreen.classList.remove("active");

    office.classList.add("active");


    // CANCELAR INVASORES DAS CÂMERAS

    intruderCamera = -1;

    intruder.classList.remove("visible");


    // ATUALIZAR STATUS

    statusDisplay.textContent = "SEM ENERGIA!";


    // APÓS 15 SEGUNDOS, PERDE

    powerOutTimer = setTimeout(() => {

        finishGame(
            "FALTA DE ENERGIA",
            "Os equipamentos desligaram e você não conseguiu proteger a torre!"
        );

    }, 15000);

}


// =========================================
// RELÓGIO DO JOGO
// =========================================

function updateClock() {

    if (gameOver) return;

    if (powerOut) return;


    gameMinutes++;


    let hours = Math.floor(gameMinutes / 60);

    let minutes = gameMinutes % 60;


    let hourText = String(hours).padStart(2, "0");

    let minuteText = String(minutes).padStart(2, "0");


    clockDisplay.textContent = hourText + ":" + minuteText;


    // VITÓRIA ÀS 06:00

    if (gameMinutes >= 360) {

        finishGame(
            "06:00 - TURNO CONCLUÍDO",
            "Você conseguiu proteger a floresta durante toda a noite!"
        );

    }

}


// =========================================
// FINALIZAR PARTIDA
// =========================================

function finishGame(title, message) {

    if (gameOver) return;

    gameOver = true;


    // PARAR TEMPORIZADORES

    clearInterval(clockTimer);

    clearInterval(intruderSpawnTimer);

    clearInterval(intruderMoveTimer);

    clearInterval(towerSpawnTimer);

    clearInterval(energyTimer);


    // CANCELAR CONTAGENS

    clearTimeout(towerEnemyTimeout);

    clearTimeout(powerOutTimer);


    // ESCONDER TELAS ANTERIORES

    office.classList.remove("active");

    cameraScreen.classList.remove("active");


    // MOSTRAR RESULTADO

    endScreen.classList.add("active");

    endTitle.textContent = title;

    endMessage.textContent = message;


    statusDisplay.textContent = "TURNO ENCERRADO";

}


// =========================================
// CONTROLES PELO TECLADO
// =========================================

document.addEventListener("keydown", function(event) {

    if (gameOver) return;

    if (event.repeat) return;


    const key = event.key.toLowerCase();


    // Q = ENTRAR OU SAIR DAS CÂMERAS

    if (key === "q") {

        if (cameraScreen.classList.contains("active")) {

            closeCameras();

        } else {

            openCameras();

        }

    }


    // F = AFASTAR INIMIGO DA TORRE

    if (key === "f") {

        repelTowerEnemy();

    }


    // OS PRÓXIMOS COMANDOS SÓ FUNCIONAM NAS CÂMERAS

    if (!cameraScreen.classList.contains("active")) {

        return;

    }


    // A = CÂMERA ANTERIOR

    if (key === "a") {

        let previous =
            (currentCamera - 1 + cameras.length) % cameras.length;

        changeCamera(previous);

    }


    // D = PRÓXIMA CÂMERA

    if (key === "d") {

        let next =
            (currentCamera + 1) % cameras.length;

        changeCamera(next);

    }


    // E = LANTERNA

    if (key === "e") {

        useFlash();

    }

});


// =========================================
// TEMPORIZADORES
// =========================================


// RELÓGIO
// 1 minuto de jogo a cada 250ms.

const clockTimer = setInterval(updateClock, 250);


// INVASOR DAS CÂMERAS
// Aparece a cada 5 segundos.

const intruderSpawnTimer = setInterval(spawnIntruder, 5000);


// MOVIMENTAÇÃO DOS INVASORES
// A cada 2 segundos.

const intruderMoveTimer = setInterval(moveIntruder, 2000);


// INVASOR DA TORRE
// Pode aparecer a cada 20 segundos.

const towerSpawnTimer = setInterval(spawnTowerEnemy, 20000);


// CONSUMO DE ENERGIA
// Atualiza a cada segundo.

const energyTimer = setInterval(updateEnergy, 1000);


// =========================================
// INICIALIZAÇÃO
// =========================================

updateCamera();

updateEnergyDisplay();

clockDisplay.textContent = "00:00";

seedDisplay.textContent = "100%";

expelledDisplay.textContent = "0";

statusDisplay.textContent = "SEGURO";
