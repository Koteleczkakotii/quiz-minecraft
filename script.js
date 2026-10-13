const questionBank = {
    biomes: [
        ["W którym biomie najczęściej spotkasz kaktusy?", ["Dżungla", "Pustynia", "Tajga", "Bagno"], 1, "Kaktusy naturalnie rosną na pustyni."],
        ["Który biom słynie z wysokich, ciemnych dębów i grzybów?", ["Mroczny las", "Sawanna", "Równiny", "Plaża"], 0, "Mroczny las ma gęste korony i duże grzyby."],
        ["Gdzie można znaleźć drzewa wiśniowe?", ["Cherry Grove", "Badlands", "Nether Wastes", "Deep Dark"], 0, "Cherry Grove to biom z różowymi drzewami wiśniowymi."],
        ["Który biom ma zwykle bardzo wysokie, poszarpane szczyty?", ["Bagno namorzynowe", "Góry / Jagged Peaks", "Pustynia", "Las brzozowy"], 1, "Jagged Peaks to wysokie, skaliste górskie szczyty."],
        ["W jakim biomie naturalnie rosną drzewa namorzynowe?", ["Dżungla", "Bagno namorzynowe", "Tajga", "Lodowe kolce"], 1, "Drzewa namorzynowe rosną w mangrove swamp."],
        ["Który biom jest charakterystyczny dla bambusowych lasów?", ["Dżungla", "Równiny", "Pola grzybowe", "Pustkowia"], 0, "Bambusowe dżungle są wariantem dżungli."],
        ["Gdzie można spotkać niedźwiedzie polarne?", ["Ciepły ocean", "Lodowe i śnieżne rejony", "Sawanna", "Badlands"], 1, "Niedźwiedzie polarne pojawiają się w zimnych biomach."],
        ["Który biom ma podłoże z czerwonego piasku i kolorowe warstwy skał?", ["Badlands", "Tajga", "Łąka", "Las kwiatowy"], 0, "Badlands wyróżniają się terakotą i czerwonym piaskiem."],
        ["Który biom jest szczególnie rzadki i porośnięty grzybami?", ["Pola grzybowe", "Las dębowy", "Rzeka", "Zamarznięty ocean"], 0, "Mushroom Fields to rzadki biom z grzybami i grzybowymi krowami."],
        ["W jakim biomie często znajdziesz świerki i wilki?", ["Tajga", "Pustynia", "Sawanna", "Ciepły ocean"], 0, "Tajga to zimniejszy, leśny biom ze świerkami."],
    ],
    mobs: [
        ["Który mob wybucha, gdy zbliży się do gracza?", ["Zombie", "Creeper", "Szkielet", "Enderman"], 1, "Creeper podchodzi do gracza i po chwili wybucha."],
        ["Który mob teleportuje się i reaguje na patrzenie mu w oczy?", ["Wiedźma", "Piglin", "Enderman", "Pająk"], 2, "Enderman może stać się agresywny po kontakcie wzrokowym."],
        ["Czym oswaja się wilka?", ["Pszenicą", "Kośćmi", "Złotym jabłkiem", "Surowym dorszem"], 1, "Wilki oswaja się kośćmi."],
        ["Który mob handluje z graczem w wiosce?", ["Wieśniak", "Creeper", "Shulker", "Phantom"], 0, "Wieśniacy oferują handel za szmaragdy i przedmioty."],
        ["Który latający mob atakuje graczy, którzy długo nie śpią?", ["Allay", "Phantom", "Papuga", "Nietoperz"], 1, "Phantomy mogą pojawić się, gdy gracz długo nie śpi."],
        ["Który mob strzela strzałami z łuku?", ["Szkielet", "Świnia", "Krowa", "Slime"], 0, "Szkielety walczą na dystans, używając łuków."],
        ["Który mob może podnosić i przenosić bloki?", ["Endermite", "Enderman", "Warden", "Delfin"], 1, "Endermany potrafią podnosić wybrane bloki."],
        ["Który przyjazny mob zbiera dla gracza przedmioty, które mu się podobają?", ["Allay", "Vex", "Husk", "Stray"], 0, "Allay może zbierać podobne przedmioty i przynosić je graczowi."],
        ["Który mob pilnuje starożytnych miast i reaguje na dźwięki?", ["Warden", "Blaze", "Ghast", "Pillager"], 0, "Warden wykrywa drgania i dźwięki w Deep Dark."],
        ["Który mob przypomina eksplodującą kulę ognia w Netherze?", ["Ghast", "Zając", "Pszczoła", "Łosoś"], 0, "Ghasty unoszą się w Netherze i strzelają ognistymi pociskami."],
    ],
    resources: [
        ["Który blok jest bardzo odporny na eksplozje?", ["Piasek", "Deski dębowe", "Obsydian", "Żwir"], 2, "Obsydian ma bardzo wysoką odporność na eksplozje."],
        ["Jaki surowiec jest potrzebny do stworzenia diamentowego kilofa?", ["3 diamenty i 2 patyki", "2 diamenty i 3 patyki", "3 sztabki żelaza", "4 diamenty i 2 patyki"], 0, "Diamentowy kilof tworzy się z 3 diamentów i 2 patyków."],
        ["Która ruda dostarcza lapis lazuli?", ["Ruda złota", "Ruda lapisu", "Ruda miedzi", "Ruda węgla"], 1, "Ruda lapisu daje lapis lazuli."],
        ["Z czego otrzymasz sztabki żelaza po przetopieniu?", ["Rudy żelaza", "Piasku", "Obsydianu", "Czerwonego piasku"], 0, "Rudę żelaza można przetopić w piecu na sztabki."],
        ["Który surowiec jest kluczowy do wytwarzania pochodni?", ["Węgiel lub węgiel drzewny", "Szmaragd", "Kwarc", "Ametyst"], 0, "Pochodnia powstaje z patyka i węgla albo węgla drzewnego."],
        ["Który kryształ można znaleźć w geodach?", ["Ametyst", "Diamentowy blok", "Nether Star", "Prismarine"], 0, "Geody zawierają bloki ametystu i skupiska kryształów."],
        ["Co otrzymuje się z rudy miedzi po przetopieniu?", ["Sztabki miedzi", "Perły Endu", "Sztabki złota", "Netherite"], 0, "Ruda miedzi po przetopieniu daje sztabki miedzi."],
        ["Który materiał służy do ulepszania diamentowego wyposażenia na netheritowe?", ["Kwarc", "Sztabka netherytu", "Lapis lazuli", "Miedź"], 1, "Do ulepszenia potrzebna jest sztabka netherytu i szablon kowalski."],
        ["Z jakiego bloku wydobywa się redstone?", ["Ruda redstone", "Piasek dusz", "Glina", "Blok mchu"], 0, "Ruda redstone daje pył redstone."],
        ["Który surowiec jest najczęściej używany jako waluta w handlu z wieśniakami?", ["Szmaragd", "Ametyst", "Kwarc", "Miedź"], 0, "Szmaragdy są standardową walutą handlu z wieśniakami."],
    ],
    crafting: [
        ["Jakiego przedmiotu używa się do warzenia mikstur?", ["Stołu kowalskiego", "Statywu alchemicznego", "Kamienia szlifierskiego", "Kompostownika"], 1, "Statyw alchemiczny służy do warzenia mikstur."],
        ["Co jest potrzebne do aktywowania portalu do Endu?", ["Perły Endu i obsydian", "Diamenty i Blaze Rods", "Oczy Endera w ramach portalu", "Nether Star"], 2, "Portal aktywuje się, umieszczając Oczy Endera w ramach."],
        ["Ile diamentów potrzeba na diamentowy miecz?", ["Jeden", "Dwa", "Trzy", "Cztery"], 1, "Diamentowy miecz wymaga dwóch diamentów i patyka."],
        ["Który stół pozwala tworzyć przedmioty z wzorami na zbroję?", ["Stół kowalski", "Stół do zaklęć", "Krosno", "Kamieniarz"], 0, "Stół kowalski służy m.in. do ulepszania i wykańczania zbroi."],
        ["Z czego robi się papier?", ["Z trzciny cukrowej", "Z patyków", "Z wełny", "Z piasku"], 0, "Trzy trzciny cukrowe w rzędzie tworzą papier."],
        ["Który przedmiot pozwala zaczarować wyposażenie?", ["Stół do zaklęć", "Kocioł", "Tarcza", "Lej"], 0, "Stół do zaklęć pozwala nakładać zaklęcia przy użyciu lapisu i poziomów."],
        ["Co jest potrzebne do stworzenia łóżka?", ["3 deski i 3 wełny", "2 sztabki żelaza", "4 kamienie", "3 skóry"], 0, "Łóżko powstaje z trzech desek i trzech bloków wełny."],
        ["Który przedmiot służy do naprawiania i łączenia zaklęć na wyposażeniu?", ["Kowadło", "Kompas", "Wędka", "Mapa"], 0, "Kowadło pozwala naprawiać przedmioty i łączyć zaklęcia."],
        ["Co jest potrzebne do stworzenia skrzyni?", ["8 desek", "4 sztabki złota", "6 kamieni", "2 diamenty"], 0, "Skrzynia powstaje z ośmiu desek ułożonych wokół pustego środka."],
        ["Który przedmiot pomaga znaleźć kierunek północny i miejsce odrodzenia świata?", ["Kompas", "Zegar", "Nożyce", "Wiadro"], 0, "Zwykły kompas wskazuje punkt odrodzenia świata."],
    ],
    dimensions: [
        ["W którym wymiarze można znaleźć Ender Dragona?", ["Nether", "Overworld", "The End", "Deep Dark"], 2, "Ender Dragon znajduje się w wymiarze The End."],
        ["Czego używa się do rozpalenia portalu do Netheru?", ["Krzesiwa na ramie z obsydianu", "Diamentowego miecza", "Wiadra z piaskiem", "Redstone i złota"], 0, "Portal z obsydianu można aktywować krzesiwem."],
        ["Co pojawia się na portalu wyjściowym po pierwszym pokonaniu Ender Dragona?", ["Jajo smoka", "Trójząb", "Elytra", "Totem nieśmiertelności"], 0, "Po pierwszym zwycięstwie pojawia się jajo smoka."],
        ["Który boss strzeże oceanu w starożytnych monumentach?", ["Wither", "Starszy strażnik", "Ender Dragon", "Warden"], 1, "Starszy strażnik występuje w oceanicznych monumentach."],
        ["Z jakich przedmiotów przyzywa się Withera?", ["Piasku dusz i czaszek witherowych szkieletów", "Obsydianu i pereł Endu", "Złota i jabłek", "Kwarcu i blaze rodów"], 0, "Withera przyzywa się z piasku lub ziemi dusz i trzech czaszek."],
        ["Który surowiec jest charakterystyczny dla Netheru?", ["Kwarc netherowy", "Szmaragd", "Ametyst", "Miedź"], 0, "Kwarc netherowy występuje w rudzie w Netherze."],
        ["Jak nazywa się forteca w Endzie, gdzie można znaleźć elytry?", ["Bastion", "End City", "Leśna posiadłość", "Twierdza Netheru"], 1, "Elytry można znaleźć na statkach w End City."],
        ["Który mob jest potrzebny do zdobycia płomiennych różdżek w Netherze?", ["Blaze", "Ghast", "Piglin", "Magma Cube"], 0, "Blaze upuszcza Blaze Rods."],
        ["Co jest potrzebne, by znaleźć twierdzę z portalem do Endu?", ["Oko Endera", "Kompas odzysku", "Zegar", "Mapa skarbów"], 0, "Oko Endera prowadzi w kierunku twierdzy."],
        ["Który wymiar jest domem dla ghastów i fortec Netheru?", ["Overworld", "Nether", "The End", "Wymiar Kresu"], 1, "Ghasty i fortece Netheru znajdują się w Netherze."],
    ]
};
const categoryInfo = {
    all: { title: "Wszystko", icon: "🌎" }, biomes: { title: "Biomy", icon: "🌿" },
    mobs: { title: "Moby", icon: "🐲" }, resources: { title: "Surowce", icon: "💎" },
    crafting: { title: "Crafting", icon: "🧰" }, dimensions: { title: "Wymiary i bossowie", icon: "🌌" }
};
const welcomeScreen = document.getElementById("welcomeScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");
const nextButton = document.getElementById("nextButton");
const nextButtonText = document.getElementById("nextButtonText");
const currentQuestionElement = document.getElementById("currentQuestion");
const totalQuestionsElement = document.getElementById("totalQuestions");
const questionNumberLabel = document.getElementById("questionNumberLabel");
const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answersContainer");
const feedbackMessage = document.getElementById("feedbackMessage");
const scoreDisplay = document.getElementById("scoreDisplay");
const progressFill = document.getElementById("progressFill");
const progressTrack = document.getElementById("progressTrack");
const progressSparkle = document.querySelector(".progress-sparkle");
const finalScore = document.getElementById("finalScore");
const maxScore = document.getElementById("maxScore");
const resultTitle = document.getElementById("resultTitle");
const resultDescription = document.getElementById("resultDescription");
const resultBadge = document.getElementById("resultBadge");
const resultPercentage = document.getElementById("resultPercentage");
const resultProgressFill = document.getElementById("resultProgressFill");
const resultMessage = document.getElementById("resultMessage");
const categoryTitle = document.querySelector(".quiz-category strong");
const categoryIcon = document.querySelector(".quiz-category .category-icon");
const selectedQuestionCount = document.getElementById("selectedQuestionCount");
let currentQuestions = [];
let selectedCategory = "all";
let selectedCount = 10;
let currentIndex = 0;
let score = 0;
let answered = false;
function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}
function getQuestionPool() {
    return selectedCategory === "all"
        ? Object.values(questionBank).flat()
        : questionBank[selectedCategory];
}
function showScreen(screenToShow) {
    [welcomeScreen, quizScreen, resultScreen].forEach(screen => screen.classList.remove("active"));
    screenToShow.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
}
function startQuiz() {
    const pool = getQuestionPool();
    currentQuestions = shuffle(pool).slice(0, Math.min(selectedCount, pool.length));
    // The mixed quiz has 50 unique questions; category quizzes currently have 10 unique questions each.
    currentIndex = 0;
    score = 0;
    answered = false;
    scoreDisplay.textContent = score;
    totalQuestionsElement.textContent = currentQuestions.length.toString().padStart(2, "0");
    categoryTitle.textContent = categoryInfo[selectedCategory].title;
    categoryIcon.textContent = categoryInfo[selectedCategory].icon;
    showScreen(quizScreen);
    loadQuestion();
}
function loadQuestion() {
    answered = false;
    const current = currentQuestions[currentIndex];
    const questionNumber = currentIndex + 1;
    currentQuestionElement.textContent = questionNumber.toString().padStart(2, "0");
    questionNumberLabel.textContent = questionNumber.toString().padStart(2, "0");
    questionText.textContent = current[0];
    answersContainer.replaceChildren();
    feedbackMessage.textContent = "";
    feedbackMessage.className = "feedback-message";
    nextButton.disabled = true;
    nextButtonText.textContent = currentIndex === currentQuestions.length - 1 ? "Zobacz wynik" : "Następne pytanie";
    updateProgress();
    ["A", "B", "C", "D"].forEach((letter, index) => {
        const answer = current[1][index];
        const button = document.createElement("button");
        button.type = "button";
        button.className = "answer-button";
        button.innerHTML = `<span class="answer-letter">${letter}</span><span class="answer-text"></span><span class="answer-indicator" aria-hidden="true">✓</span>`;
        button.querySelector(".answer-text").textContent = answer;
        button.addEventListener("click", () => selectAnswer(index, button));
        answersContainer.appendChild(button);
    });
}
function selectAnswer(selectedIndex, selectedButton) {
    if (answered) return;
    answered = true;
    const current = currentQuestions[currentIndex];
    const allAnswerButtons = answersContainer.querySelectorAll(".answer-button");
    const isCorrect = selectedIndex === current[2];
    allAnswerButtons.forEach((button, index) => {
        button.disabled = true;
        if (index === current[2]) button.classList.add("correct");
    });
    if (isCorrect) {
        score++;
        selectedButton.classList.add("correct");
        feedbackMessage.textContent = "✦ Świetnie! " + current[3];
        feedbackMessage.classList.add("success");
    } else {
        selectedButton.classList.add("incorrect");
        feedbackMessage.textContent = "♡ Nie tym razem! " + current[3];
        feedbackMessage.classList.add("error");
    }
    scoreDisplay.textContent = score;
    nextButton.disabled = false;
    nextButton.animate([{ transform: "scale(0.96)", opacity: 0.6 }, { transform: "scale(1)", opacity: 1 }], { duration: 260, easing: "ease-out" });
}
function updateProgress() {
    const progress = currentQuestions.length ? (currentIndex / currentQuestions.length) * 100 : 0;
    progressFill.style.width = `${progress}%`;
    progressTrack.setAttribute("aria-valuenow", Math.round(progress));
    progressSparkle.style.left = `${progress}%`;
    progressSparkle.style.opacity = progress > 0 ? "1" : "0";
}
function nextQuestion() {
    if (!answered) return;
    if (currentIndex < currentQuestions.length - 1) {
        currentIndex++;
        loadQuestion();
    } else showResults();
}
function showResults() {
    showScreen(resultScreen);
    const percentage = Math.round((score / currentQuestions.length) * 100);
    finalScore.textContent = score;
    maxScore.textContent = currentQuestions.length;
    resultPercentage.textContent = `${percentage}%`;
    resultProgressFill.style.width = "0%";
    requestAnimationFrame(() => requestAnimationFrame(() => { resultProgressFill.style.width = `${percentage}%`; }));
    if (percentage === 100) {
        resultBadge.textContent = "👑"; resultTitle.textContent = "Mistrz Minecrafta!";
        resultDescription.textContent = "Perfekcyjny wynik! Ten świat nie ma przed Tobą tajemnic.";
        resultMessage.textContent = "Wszystkie odpowiedzi poprawne. Prawdziwa legenda! ✨";
    } else if (percentage >= 80) {
        resultBadge.textContent = "🏆"; resultTitle.textContent = "Niesamowity wynik!";
        resultDescription.textContent = "Masz naprawdę imponującą wiedzę o Minecraft.";
        resultMessage.textContent = "Jesteś o krok od perfekcji. Tak trzymaj! 💜";
    } else if (percentage >= 60) {
        resultBadge.textContent = "💎"; resultTitle.textContent = "Świetny odkrywca!";
        resultDescription.textContent = "Znasz już sporo sekretów tego świata.";
        resultMessage.textContent = "Jeszcze kilka przygód i zostaniesz ekspertem! 🌸";
    } else if (percentage >= 40) {
        resultBadge.textContent = "🌸"; resultTitle.textContent = "Odkrywaj dalej!";
        resultDescription.textContent = "Każdy blok to nowa okazja do nauki.";
        resultMessage.textContent = "Spróbuj ponownie i zobacz, ile punktów zdobędziesz! ✨";
    } else {
        resultBadge.textContent = "🌱"; resultTitle.textContent = "Nowa przygoda!";
        resultDescription.textContent = "Każdy ekspert kiedyś zaczynał.";
        resultMessage.textContent = "Nie poddawaj się — kolejna próba może być znacznie lepsza! 💗";
    }
}
function createParticles() {
    const container = document.getElementById("particles");
    const symbols = ["✦", "✧", "·", "✴"];
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 24; i++) {
        const particle = document.createElement("span");
        particle.className = "particle";
        particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${12 + Math.random() * 18}s`;
        particle.style.animationDelay = `${-Math.random() * 25}s`;
        particle.style.fontSize = `${7 + Math.random() * 9}px`;
        fragment.appendChild(particle);
    }
    container.appendChild(fragment);
}
const themeButtons = document.querySelectorAll("[data-theme-choice]");
const chestScene = document.getElementById("chestScene");
const themeStorageKey = "minecraftQuizTheme";
function applyTheme(themeName) {
    const allowedThemes = ["lavender", "cherry", "ender"];
    const theme = allowedThemes.includes(themeName) ? themeName : "lavender";
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem(themeStorageKey, theme); } catch (_) {}
    themeButtons.forEach(button => {
        const isSelected = button.dataset.themeChoice === theme;
        button.classList.toggle("selected", isSelected);
        button.setAttribute("aria-pressed", String(isSelected));
    });
}
themeButtons.forEach(button => button.addEventListener("click", () => applyTheme(button.dataset.themeChoice)));
applyTheme((() => { try { return localStorage.getItem(themeStorageKey) || "lavender"; } catch (_) { return "lavender"; } })());
function updateCountAvailability() {
    const categoryOnly = selectedCategory !== "all";
    document.querySelectorAll("[data-count]").forEach(option => {
        const unavailable = categoryOnly && Number(option.dataset.count) > 10;
        option.disabled = unavailable;
        option.title = unavailable ? "Ta kategoria ma obecnie 10 unikalnych pytań. Wybierz „Wszystko”, aby zagrać dłuższy quiz." : "";
    });
    if (categoryOnly && selectedCount > 10) {
        selectedCount = 10;
        document.querySelectorAll("[data-count]").forEach(option => {
            const selected = Number(option.dataset.count) === selectedCount;
            option.classList.toggle("selected", selected);
            option.setAttribute("aria-pressed", String(selected));
        });
        selectedQuestionCount.textContent = selectedCount;
    }
    const countHint = document.querySelector(".question-count-copy span");
    countHint.textContent = categoryOnly ? "Ta kategoria ma 10 unikalnych pytań" : "Wybierz tempo swojej przygody · do 50 pytań";
}
document.querySelectorAll("[data-category]").forEach(button => {
    button.addEventListener("click", () => {
        selectedCategory = button.dataset.category;
        document.querySelectorAll("[data-category]").forEach(card => {
            const selected = card === button;
            card.classList.toggle("selected", selected);
            card.setAttribute("aria-pressed", String(selected));
        });
        updateCountAvailability();
    });
});
document.querySelectorAll("[data-count]").forEach(button => {
    button.addEventListener("click", () => {
        selectedCount = Number(button.dataset.count);
        document.querySelectorAll("[data-count]").forEach(option => {
            const selected = option === button;
            option.classList.toggle("selected", selected);
            option.setAttribute("aria-pressed", String(selected));
        });
        selectedQuestionCount.textContent = selectedCount;
    });
});
updateCountAvailability();
startButton.addEventListener("click", () => {
    if (startButton.disabled) return;
    startButton.disabled = true;
    chestScene.classList.add("chest-opening");
    startButton.querySelector("span:first-child").textContent = "Otwieranie skarbu...";
    window.setTimeout(() => {
        chestScene.classList.remove("chest-opening");
        startButton.disabled = false;
        startButton.querySelector("span:first-child").textContent = "Rozpoznaj quiz";
        startQuiz();
    }, 650);
});
nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", () => showScreen(welcomeScreen));
createParticles();
updateProgress();