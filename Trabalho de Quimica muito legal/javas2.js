const questions = [
    {
        question: "Qual é o símbolo químico do Oxigênio?",
        answers: ["O", "Ox", "Og", "O2"],
        correct: "O"
    },

    {
        question: "Qual é o número atômico do Hidrogênio?",
        answers: ["1", "2", "8", "10"],
        correct: "1"
    },

    {
        question: "Qual elemento possui o símbolo Fe?",
        answers: ["Flúor", "Ferro", "Fósforo", "Frâncio"],
        correct: "Ferro"
    },

    {
        question: "Qual é o símbolo químico do Ouro?",
        answers: ["Go", "Ou", "Au", "Ag"],
        correct: "Au"
    },

    {
        question: "Qual elemento possui o número atômico 6?",
        answers: ["Carbono", "Oxigênio", "Nitrogênio", "Boro"],
        correct: "Carbono"
    },

    {
        question: "Qual destes elementos é um gás nobre?",
        answers: ["Sódio", "Hélio", "Cloro", "Ferro"],
        correct: "Hélio"
    },

    {
        question: "Qual é o símbolo químico do Sódio?",
        answers: ["So", "Sd", "Na", "S"],
        correct: "Na"
    },

    {
        question: "Qual destes elementos é um metal?",
        answers: ["Oxigênio", "Cloro", "Ferro", "Hélio"],
        correct: "Ferro"
    },

    {
        question: "Qual elemento possui o símbolo C?",
        answers: ["Cálcio", "Carbono", "Cloro", "Cobre"],
        correct: "Carbono"
    },

    {
        question: "Qual é o número atômico do Oxigênio?",
        answers: ["6", "7", "8", "9"],
        correct: "8"
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-button");
const questionNumber = document.getElementById("question-number");
const scoreElement = document.getElementById("score");
const progressElement = document.getElementById("progress");

const quizElement = document.getElementById("quiz");
const resultElement = document.getElementById("result");
const finalScore = document.getElementById("final-score");
const message = document.getElementById("message");
const restartButton = document.getElementById("restart-button");

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function startQuiz() {
    currentQuestion = 0;
    score = 0;

    quizElement.classList.remove("hidden");
    resultElement.classList.add("hidden");

    scoreElement.textContent = "Pontos: 0";

    showQuestion();
}

function showQuestion() {
    answered = false;

    const question = questions[currentQuestion];

    questionElement.textContent = question.question;

    questionNumber.textContent =
        `Questão ${currentQuestion + 1} de ${questions.length}`;

    progressElement.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    answersElement.innerHTML = "";

    const shuffledAnswers = shuffle([...question.answers]);

    shuffledAnswers.forEach(answer => {

        const button = document.createElement("button");

        button.classList.add("answer");
        button.textContent = answer;

        button.addEventListener("click", () => {
            selectAnswer(button, answer);
        });

        answersElement.appendChild(button);
    });

    nextButton.style.display = "none";
}

function selectAnswer(button, answer) {

    if (answered) {
        return;
    }

    answered = true;

    const correctAnswer = questions[currentQuestion].correct;

    const allButtons = document.querySelectorAll(".answer");

    allButtons.forEach(btn => {
        btn.disabled = true;

        if (btn.textContent === correctAnswer) {
            btn.classList.add("correct");
        }
    });

    if (answer === correctAnswer) {
        button.classList.add("correct");
        score++;

        scoreElement.textContent = `Pontos: ${score}`;
    } else {
        button.classList.add("wrong");
    }

    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {

    quizElement.classList.add("hidden");
    resultElement.classList.remove("hidden");

    finalScore.textContent =
        `Você acertou ${score} de ${questions.length} questões!`;

    const percentage = (score / questions.length) * 100;

    if (percentage === 100) {
        message.textContent =
            "⚛️ Perfeito! Você domina a Tabela Periódica!";
    } else if (percentage >= 80) {
        message.textContent =
            "🔥 Muito bem! Você conhece bastante Química!";
    } else if (percentage >= 60) {
        message.textContent =
            "👍 Bom trabalho! Continue estudando!";
    } else if (percentage >= 40) {
        message.textContent =
            "📚 Você já sabe algumas coisas, mas ainda pode melhorar!";
    } else {
        message.textContent =
            "🧪 Hora de revisar a Tabela Periódica e tentar novamente!";
    }
}

restartButton.addEventListener("click", startQuiz);

startQuiz();