const questions = [
    {
        question: "Który surowiec jest potrzebny do stworzenia diamentowego kilofa?",
        answers: [
            "3 diamenty i 2 patyki",
            "2 diamenty i 3 patyki",
            "3 sztabki żelaza i 2 patyki",
            "4 diamenty i 2 patyki"
        ],
        correct: 0,
        explanation: "Diamentowy kilof tworzy się z 3 diamentów i 2 patyków."
    },
    {
        question: "Który mob wybucha, gdy zbliży się do gracza?",
        answers: [
            "Zombie",
            "Creeper",
            "Szkielet",
            "Enderman"
        ],
        correct: 1,
        explanation: "Creeper podchodzi do gracza i po chwili wybucha."
    },
    {
        question: "Jak nazywa się wymiar, w którym można znaleźć Ender Dragona?",
        answers: [
            "Nether",
            "Overworld",
            "The End",
            "Deep Dark"
        ],
        correct: 2,
        explanation: "Ender Dragon znajduje się w wymiarze The End."
    },
    {
        question: "Czego potrzebujesz, aby rozpalić portal do Netheru?",
        answers: [
            "Redstone i złota",
            "Krzesiwa i ramy z obsydianu",
            "Diamentowego miecza",
            "Wiadra wody i piasku"
        ],
        correct: 1,
        explanation: "Portal z obsydianu można aktywować za pomocą krzesiwa."
    },
    {
        question: "Który przedmiot pozwala oswoić wilka?",
        answers: [
            "Surowa ryba",
            "Złote jabłko",
            "Pszenica",
            "Kości"
        ],
        correct: 3,
        explanation: "Wilki można oswajać, używając kości."
    },
    {
        question: "Co otrzymujesz po pokonaniu Ender Dragona po raz pierwszy?",
        answers: [
            "Jajo smoka",
            "Nether Star",
            "Trójząb",
            "Elytrę"
        ],
        correct: 0,
        explanation: "Po pierwszym pokonaniu smoka na wyjściowym portalu pojawia się jajo smoka."
    },
    {
        question: "Który blok jest odporny na zwykłe eksplozje Creepera?",
        answers: [
            "Drewno dębowe",
            "Zwykły kamień",
            "Obsydian",
            "Piasek"
        ],
        correct: 2,
        explanation: "Obsydian ma bardzo wysoką odporność na eksplozje."
    },
    {
        question: "Który mob teleportuje się i nie lubi, gdy patrzysz mu prosto w oczy?",
        answers: [
            "Enderman",
            "Wiedźma",
            "Piglin",
            "Strażnik"
        ],
        correct: 0,
        explanation: "Enderman może stać się agresywny, gdy gracz spojrzy mu prosto w oczy."
    },
    {
        question: "Jakiego przedmiotu używa się do tworzenia mikstur?",
        answers: [
            "Stołu kowalskiego",
            "Statywu alchemicznego",
            "Kamienia szlifierskiego",
            "Kompostownika"
        ],
        correct: 1,
        explanation: "Statyw alchemiczny służy do warzenia mikstur."
    },
    {
        question: "Co jest potrzebne do aktywowania portalu do Endu?",
        answers: [
            "Perły Endu i obsydian",
            "Diamenty i Blaze Rods",
            "Oczy Endera umieszczone w ramach portalu",
            "Nether Star i obsydian"
        ],
        correct: 2,
        explanation: "Portal do Endu aktywuje się, umieszczając Oczy Endera w jego ramach."
    }
];
const welcomeScreen = document.getElementById("welcomeScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");
const nextButton = document.getElementById("nextButton");
const nextButtonText = document.getElementById("nextButtonText");
const currentQuestionElement =
    document.getElementById("currentQuestion");
const totalQuestionsElement =
    document.getElementById("totalQuestions");
const questionNumberLabel =
    document.getElementById("questionNumberLabel");
const questionText =
    document.getElementById("questionText");
const answersContainer =
    document.getElementById("answersContainer");
const feedbackMessage =
    document.getElementById("feedbackMessage");
const scoreDisplay =
    document.getElementById("scoreDisplay");
const progressFill =
    document.getElementById("progressFill");
const progressTrack =
    document.getElementById("progressTrack");
const progressSparkle =
    document.querySelector(".progress-sparkle");
const finalScore =
    document.getElementById("finalScore");
const maxScore =
    document.getElementById("maxScore");
const resultTitle =
    document.getElementById("resultTitle");
const resultDescription =
    document.getElementById("resultDescription");
const resultBadge =
    document.getElementById("resultBadge");
const resultPercentage =
    document.getElementById("resultPercentage");
const resultProgressFill =
    document.getElementById("resultProgressFill");
const resultMessage =
    document.getElementById("resultMessage");
let currentIndex = 0;
let score = 0;
let answered = false;
function showScreen(screenToShow) {
    const screens = [
        welcomeScreen,
        quizScreen,
        resultScreen
    ];
    screens.forEach(screen => {
        screen.classList.remove("active");
    });
    screenToShow.classList.add("active");
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function startQuiz() {
    currentIndex = 0;
    score = 0;
    answered = false;
    scoreDisplay.textContent = score;
    totalQuestionsElement.textContent =
        questions.length.toString().padStart(2, "0");
    showScreen(quizScreen);
    loadQuestion();
}
function loadQuestion() {
    answered = false;
    const current = questions[currentIndex];
    const questionNumber = currentIndex + 1;
    currentQuestionElement.textContent =
        questionNumber.toString().padStart(2, "0");
    questionNumberLabel.textContent =
        questionNumber.toString().padStart(2, "0");
    questionText.textContent = current.question;
    answersContainer.replaceChildren();
    feedbackMessage.textContent = "";
    feedbackMessage.className = "feedback-message";
    nextButton.disabled = true;
    nextButtonText.textContent =
        currentIndex === questions.length - 1
            ? "Look at your result"
            : "Next question";
    updateProgress();
    const letters = ["A", "B", "C", "D"];
    current.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "answer-button";
        button.innerHTML = `
            <span class="answer-letter">${letters[index]}</span>
            <span class="answer-text"></span>
            <span class="answer-indicator" aria-hidden="true">✓</span>
        `;
        button.querySelector(".answer-text").textContent = answer;
        button.addEventListener("click", () => {
            selectAnswer(index, button);
        });
        answersContainer.appendChild(button);
    });
}
function selectAnswer(selectedIndex, selectedButton) {
    if (answered) {
        return;
    }
    answered = true;
    const current = questions[currentIndex];
    const allAnswerButtons =
        answersContainer.querySelectorAll(".answer-button");
    const isCorrect =
        selectedIndex === current.correct;
    allAnswerButtons.forEach((button, index) => {
        button.disabled = true;
        if (index === current.correct) {
            button.classList.add("correct");
        }
    });
    if (isCorrect) {
        score++;
        selectedButton.classList.add("correct");
        feedbackMessage.textContent =
            "✦ Świetnie! " + current.explanation;
        feedbackMessage.classList.add("success");
    } else {
        selectedButton.classList.add("incorrect");
        feedbackMessage.textContent =
            "♡ Nie tym razem! " + current.explanation;
        feedbackMessage.classList.add("error");
    }
    scoreDisplay.textContent = score;
    nextButton.disabled = false;
    nextButton.animate(
        [
            { transform: "scale(0.96)", opacity: 0.6 },
            { transform: "scale(1)", opacity: 1 }
        ],
        {
            duration: 260,
            easing: "ease-out"
        }
    );
}
function updateProgress() {
    const progress =
        (currentIndex / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressTrack.setAttribute(
        "aria-valuenow",
        Math.round(progress)
    );
    progressSparkle.style.left = `${progress}%`;
    progressSparkle.style.opacity =
        progress > 0 ? "1" : "0";
}
function nextQuestion() {
    if (!answered) {
        return;
    }
    if (currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        showResults();
    }
}
function showResults() {
    showScreen(resultScreen);
    const percentage = Math.round(
        (score / questions.length) * 100
    );
    finalScore.textContent = score;
    maxScore.textContent = questions.length;
    resultPercentage.textContent = `${percentage}%`;
    resultProgressFill.style.width = "0%";
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            resultProgressFill.style.width =
                `${percentage}%`;
        });
    });
    if (percentage === 100) {
        resultBadge.textContent = "👑";
        resultTitle.textContent = "Minecraft Master!";
        resultDescription.textContent =
            "Perfekcyjny wynik! Świat Minecraft nie ma przed Tobą tajemnic.";
        resultMessage.textContent =
            "Wszystkie odpowiedzi poprawne. Prawdziwa legenda! ✨";
    } else if (percentage >= 80) {
        resultBadge.textContent = "🏆";
        resultTitle.textContent = "Amazing job!";
        resultDescription.textContent =
            "Masz naprawdę imponującą wiedzę o Minecraft.";
        resultMessage.textContent =
            "Jesteś o krok od perfekcji. Tak trzymaj! 💜";
    } else if (percentage >= 60) {
        resultBadge.textContent = "💎";
        resultTitle.textContent = "Great explorer!";
        resultDescription.textContent =
            "Znasz już sporo sekretów tego świata.";
        resultMessage.textContent =
            "Jeszcze kilka przygód i zostaniesz ekspertem! 🌸";
    } else if (percentage >= 40) {
        resultBadge.textContent = "🌸";
        resultTitle.textContent = "Keep exploring!";
        resultDescription.textContent =
            "Każdy blok to nowa okazja do nauki.";
        resultMessage.textContent =
            "Spróbuj ponownie i zobacz, ile punktów zdobędziesz! ✨";
    } else {
        resultBadge.textContent = "🌱";
        resultTitle.textContent = "New adventure!";
        resultDescription.textContent =
            "Każdy ekspert kiedyś zaczynał.";
        resultMessage.textContent =
            "Nie poddawaj się — kolejna próba może być znacznie lepsza! 💗";
    }
}
function createParticles() {
    const particlesContainer =
        document.getElementById("particles");
    const symbols = ["✦", "✧", "·", "✴"];
    const particleCount = 24;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("span");
        particle.className = "particle";
        particle.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];
        particle.style.left =
            `${Math.random() * 100}%`;
        particle.style.animationDuration =
            `${12 + Math.random() * 18}s`;
        particle.style.animationDelay =
            `${-Math.random() * 25}s`;
        particle.style.fontSize =
            `${7 + Math.random() * 9}px`;
        fragment.appendChild(particle);
    }
    particlesContainer.appendChild(fragment);
}
const themeButtons = document.querySelectorAll("[data-theme-choice]");
const chestScene = document.getElementById("chestScene");
const treasureChest = document.getElementById("treasureChest");
const themeStorageKey = "minecraftQuizTheme";
function applyTheme(themeName) {
    const allowedThemes = ["lavender", "cherry", "ender"];
    const theme = allowedThemes.includes(themeName) ? themeName : "lavender";
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(themeStorageKey, theme);
    themeButtons.forEach(button => {
        const isSelected = button.dataset.themeChoice === theme;
        button.classList.toggle("selected", isSelected);
        button.setAttribute("aria-pressed", String(isSelected));
    });
}
themeButtons.forEach(button => {
    button.addEventListener("click", () => {
        applyTheme(button.dataset.themeChoice);
    });
});
applyTheme(localStorage.getItem(themeStorageKey) || "lavender");
startButton.addEventListener("click", () => {
    if (startButton.disabled) return;
    startButton.disabled = true;
    chestScene.classList.add("chest-opening");
    startButton.querySelector("span:first-child").textContent = "Otwieranie skarbu...";
    window.setTimeout(() => {
        chestScene.classList.remove("chest-opening");
        startButton.disabled = false;
        startButton.querySelector("span:first-child").textContent = "Rozpocznij przygodę";
        startQuiz();
    }, 850);
});
nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", startQuiz);
createParticles();
updateProgress();