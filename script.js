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
const englishQuestionBank = {
    biomes: [
        ["In which biome are you most likely to find cacti?", ["Jungle", "Desert", "Taiga", "Swamp"], "Cacti naturally grow in deserts."],
        ["Which biome is known for tall dark oak trees and mushrooms?", ["Dark Forest", "Savanna", "Plains", "Beach"], "Dark Forests have dense canopies and large mushrooms."],
        ["Where can you find cherry trees?", ["Cherry Grove", "Badlands", "Nether Wastes", "Deep Dark"], "Cherry Grove is a biome with pink cherry trees."],
        ["Which biome usually has very tall, jagged peaks?", ["Mangrove Swamp", "Jagged Peaks", "Desert", "Birch Forest"], "Jagged Peaks are tall, rocky mountain summits."],
        ["In which biome do mangrove trees naturally grow?", ["Jungle", "Mangrove Swamp", "Taiga", "Ice Spikes"], "Mangrove trees grow in mangrove swamps."],
        ["Which biome is known for bamboo forests?", ["Jungle", "Plains", "Mushroom Fields", "Badlands"], "Bamboo jungles are a variant of the jungle biome."],
        ["Where can you find polar bears?", ["Warm Ocean", "Icy and snowy regions", "Savanna", "Badlands"], "Polar bears spawn in cold biomes."],
        ["Which biome has red sand and colorful layers of rock?", ["Badlands", "Taiga", "Meadow", "Flower Forest"], "Badlands are known for terracotta and red sand."],
        ["Which biome is especially rare and covered with mushrooms?", ["Mushroom Fields", "Oak Forest", "River", "Frozen Ocean"], "Mushroom Fields is a rare biome with mushrooms and mooshrooms."],
        ["In which biome can you often find spruce trees and wolves?", ["Taiga", "Desert", "Savanna", "Warm Ocean"], "Taiga is a cooler forest biome with spruce trees."],
    ],
    mobs: [
        ["Which mob explodes when it gets close to a player?", ["Zombie", "Creeper", "Skeleton", "Enderman"], "A Creeper approaches the player and explodes after a short delay."],
        ["Which mob teleports and reacts when you look it in the eyes?", ["Witch", "Piglin", "Enderman", "Spider"], "An Enderman can become hostile after eye contact."],
        ["What do you use to tame a wolf?", ["Wheat", "Bones", "Golden Apple", "Raw Cod"], "Wolves are tamed with bones."],
        ["Which mob trades with players in villages?", ["Villager", "Creeper", "Shulker", "Phantom"], "Villagers trade emeralds and items with players."],
        ["Which flying mob attacks players who have not slept for a long time?", ["Allay", "Phantom", "Parrot", "Bat"], "Phantoms can appear when a player has not slept for a while."],
        ["Which mob shoots arrows from a bow?", ["Skeleton", "Pig", "Cow", "Slime"], "Skeletons fight from a distance using bows."],
        ["Which mob can pick up and carry blocks?", ["Endermite", "Enderman", "Warden", "Dolphin"], "Endermen can pick up certain blocks."],
        ["Which friendly mob collects items it likes for the player?", ["Allay", "Vex", "Husk", "Stray"], "An Allay can collect matching items and bring them to the player."],
        ["Which mob guards Ancient Cities and reacts to sounds?", ["Warden", "Blaze", "Ghast", "Pillager"], "The Warden detects vibrations and sounds in the Deep Dark."],
        ["Which Nether mob resembles a floating, fireball-shooting creature?", ["Ghast", "Rabbit", "Bee", "Salmon"], "Ghasts float in the Nether and shoot fireballs."],
    ],
    resources: [
        ["Which block is highly resistant to explosions?", ["Sand", "Oak Planks", "Obsidian", "Gravel"], "Obsidian has very high blast resistance."],
        ["Which materials are needed to craft a diamond pickaxe?", ["3 diamonds and 2 sticks", "2 diamonds and 3 sticks", "3 iron ingots", "4 diamonds and 2 sticks"], "A diamond pickaxe is crafted with 3 diamonds and 2 sticks."],
        ["Which ore drops lapis lazuli?", ["Gold Ore", "Lapis Lazuli Ore", "Copper Ore", "Coal Ore"], "Lapis lazuli ore drops lapis lazuli."],
        ["What do you smelt to obtain iron ingots?", ["Iron Ore", "Sand", "Obsidian", "Red Sand"], "Iron ore can be smelted in a furnace into iron ingots."],
        ["Which resource is key to crafting torches?", ["Coal or Charcoal", "Emerald", "Quartz", "Amethyst"], "A torch is crafted from a stick and coal or charcoal."],
        ["Which crystal can be found in geodes?", ["Amethyst", "Diamond Block", "Nether Star", "Prismarine"], "Geodes contain amethyst blocks and crystal clusters."],
        ["What do you get by smelting copper ore?", ["Copper Ingots", "Ender Pearls", "Gold Ingots", "Netherite"], "Smelting copper ore produces copper ingots."],
        ["Which material upgrades diamond gear to netherite gear?", ["Quartz", "Netherite Ingot", "Lapis Lazuli", "Copper"], "Upgrading requires a netherite ingot and a smithing template."],
        ["Which block do you mine to obtain redstone?", ["Redstone Ore", "Soul Sand", "Clay", "Moss Block"], "Redstone ore drops redstone dust."],
        ["Which resource is most commonly used as currency when trading with villagers?", ["Emerald", "Amethyst", "Quartz", "Copper"], "Emeralds are the standard currency for villager trading."],
    ],
    crafting: [
        ["Which item is used to brew potions?", ["Smithing Table", "Brewing Stand", "Grindstone", "Composter"], "A brewing stand is used to brew potions."],
        ["What is needed to activate an End Portal?", ["Ender Pearls and Obsidian", "Diamonds and Blaze Rods", "Eyes of Ender in the portal frame", "Nether Star"], "Activate the portal by placing Eyes of Ender in its frame."],
        ["How many diamonds are needed for a diamond sword?", ["One", "Two", "Three", "Four"], "A diamond sword requires two diamonds and one stick."],
        ["Which table lets you apply armor trim patterns?", ["Smithing Table", "Enchanting Table", "Loom", "Stonecutter"], "A smithing table is used for upgrades and armor trimming."],
        ["What is paper made from?", ["Sugar Cane", "Sticks", "Wool", "Sand"], "Three sugar canes in a row make paper."],
        ["Which item lets you enchant equipment?", ["Enchanting Table", "Cauldron", "Shield", "Hopper"], "An enchanting table uses lapis and experience levels to enchant items."],
        ["What is needed to craft a bed?", ["3 planks and 3 wool", "2 iron ingots", "4 stone blocks", "3 leather"], "A bed is crafted from three planks and three wool blocks."],
        ["Which item repairs equipment and combines its enchantments?", ["Anvil", "Compass", "Fishing Rod", "Map"], "An anvil lets you repair items and combine enchantments."],
        ["What is needed to craft a chest?", ["8 planks", "4 gold ingots", "6 stone blocks", "2 diamonds"], "A chest is crafted from eight planks arranged around an empty center."],
        ["Which item helps you find north and the world spawn point?", ["Compass", "Clock", "Shears", "Bucket"], "A regular compass points to the world spawn point."],
    ],
    dimensions: [
        ["In which dimension can you find the Ender Dragon?", ["The Nether", "The Overworld", "The End", "The Deep Dark"], "The Ender Dragon is found in the End dimension."],
        ["What do you use to light a Nether Portal?", ["Flint and steel on an obsidian frame", "Diamond sword", "Bucket of sand", "Redstone and gold"], "An obsidian portal can be activated with flint and steel."],
        ["What appears on the exit portal after you defeat the Ender Dragon for the first time?", ["Dragon Egg", "Trident", "Elytra", "Totem of Undying"], "The Dragon Egg appears after the first victory."],
        ["Which boss guards ocean monuments?", ["Wither", "Elder Guardian", "Ender Dragon", "Warden"], "Elder Guardians are found in ocean monuments."],
        ["Which items are used to summon the Wither?", ["Soul Sand and Wither Skeleton Skulls", "Obsidian and Ender Pearls", "Gold and Apples", "Quartz and Blaze Rods"], "The Wither is summoned using soul sand or soul soil and three skulls."],
        ["Which resource is characteristic of the Nether?", ["Nether Quartz", "Emerald", "Amethyst", "Copper"], "Nether quartz ore is found in the Nether."],
        ["What is the name of the End structure where you can find elytra?", ["Bastion Remnant", "End City", "Woodland Mansion", "Nether Fortress"], "Elytra can be found on ships near End Cities."],
        ["Which mob do you need to defeat to get Blaze Rods in the Nether?", ["Blaze", "Ghast", "Piglin", "Magma Cube"], "Blazes drop Blaze Rods."],
        ["What do you need to find a stronghold with an End Portal?", ["Eye of Ender", "Recovery Compass", "Clock", "Treasure Map"], "An Eye of Ender leads you toward a stronghold."],
        ["Which dimension is home to ghasts and Nether fortresses?", ["Overworld", "Nether", "The End", "The End dimension"], "Ghasts and Nether fortresses are found in the Nether."],
    ]
};
const categoryInfo = {
    all: { pl: "Wszystko", en: "Everything", icon: "🌎" },
    biomes: { pl: "Biomy", en: "Biomes", icon: "🌿" },
    mobs: { pl: "Moby", en: "Mobs", icon: "🐲" },
    resources: { pl: "Surowce", en: "Resources", icon: "💎" },
    crafting: { pl: "Crafting", en: "Crafting", icon: "🧰" },
    dimensions: { pl: "Wymiary i bossowie", en: "Dimensions & bosses", icon: "🌌" }
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
const languageButtons = document.querySelectorAll("[data-language]");
const estimatedTime = document.getElementById("estimatedTime");
const startButtonLabel = document.getElementById("startButtonLabel");
const factText = document.getElementById("factText");
const factCounter = document.getElementById("factCounter");
const nextFactButton = document.getElementById("nextFactButton");
const resultFactText = document.getElementById("resultFactText");
const nextResultFactButton = document.getElementById("nextResultFactButton");
const languageStorageKey = "minecraftQuizLanguage";
let currentLanguage = (() => { try { return localStorage.getItem(languageStorageKey) === "en" ? "en" : "pl"; } catch (_) { return "pl"; } })();
let currentFactIndex = -1;
let lastFactIndex = -1;
let currentQuestions = [];
let selectedCategory = "all";
let selectedCount = 10;
let currentIndex = 0;
let score = 0;
let answered = false;
let lastSelectedIndex = null;
Object.keys(questionBank).forEach(category => {
    questionBank[category].forEach((question, index) => {
        const englishQuestion = englishQuestionBank[category][index];
        question.en = { question: englishQuestion[0], answers: englishQuestion[1], explanation: englishQuestion[2] };
    });
});
const uiText = {
    pl: {
        languageAria: "Wybierz język", progressAria: "Postęp quizu", status: "CZAS NA QUIZ", eyebrow: "MAGICZNA PRZYGODA W MINECRAFCIE", welcomeDescription: "Sprawdź, jak dobrze znasz swój świat!",
        themeAria: "Wybierz motyw quizu", themeTitle: "WYBIERZ SWÓJ MOTYW", themeLavender: "Lawendowa magia", themeCherry: "Kwiatowa kraina", themeEnder: "Tajemnica Endu",
        setupKicker: "TWOJA WYPRAWA, TWOJE ZASADY", categoryHeading: "Co dziś odkrywamy?", setupDescription: "Wybierz kategorię i dopasuj długość quizu do siebie.", categoryAria: "Wybierz kategorię quizu",
        catAll: "Wszystko", catAllDesc: "Miks całego Minecrafta", catBiomes: "Biomy", catBiomesDesc: "Krainy i ich sekrety", catMobs: "Moby", catMobsDesc: "Przyjazne i groźne stworzenia",
        catResources: "Surowce", catResourcesDesc: "Rudy, minerały i bloki", catCrafting: "Crafting", catCraftingDesc: "Przedmioty i receptury", catDimensions: "Wymiary i bossowie", catDimensionsDesc: "Nether, End i wielkie walki",
        countTitle: "Ile pytań?", countHint: "Wybierz tempo swojej przygody", countAria: "Liczba pytań", countQuick: "Szybki", countClassic: "Klasyczny", countExpert: "Ekspert", questionsLabel: "pytań", gameTime: "rozgrywki", levelRange: "Łatwy–Pro", levelLabel: "poziom",
        startQuiz: "Rozpocznij quiz", openingChest: "Otwieranie skarbu...", welcomeFooter: "STWORZONE Z ♥ DLA FANÓW MINECRAFTA", resultFactTitle: "Ciekawostka na koniec", resultFactAria: "Następna ciekawostka", factKicker: "MAGICZNA SKRZYNIA WIEDZY", factHeading: "Czy wiesz, że…?", nextFact: "Odkryj kolejną ciekawostkę",
        categoryLabel: "KATEGORIA", questionLabel: "PYTANIE", questionHint: "Wybierz jedną poprawną odpowiedź.", yourScore: "Twój wynik:", points: "pkt", nextQuestion: "Następne pytanie", seeResult: "Zobacz wynik",
        quizCompleted: "QUIZ UKOŃCZONY", resultScore: "TWÓJ WYNIK", correctAnswers: "Poprawne odpowiedzi", tryAgain: "Zagraj ponownie", resultFooter: "KAŻDY BLOK MA SWOJĄ HISTORIĘ ♥", footerTagline: "ROZWIJAJ SWOJĄ WIEDZĘ",
        correctStart: "✦ Świetnie! ", incorrectStart: "♡ Nie tym razem! ", resultPerfectTitle: "Mistrz Minecrafta!", resultPerfectDescription: "Perfekcyjny wynik! Ten świat nie ma przed Tobą tajemnic.", resultPerfectMessage: "Wszystkie odpowiedzi poprawne. Prawdziwa legenda! ✨",
        result80Title: "Niesamowity wynik!", result80Description: "Masz naprawdę imponującą wiedzę o Minecraft.", result80Message: "Jesteś o krok od perfekcji. Tak trzymaj! 💜",
        result60Title: "Świetny odkrywca!", result60Description: "Znasz już sporo sekretów tego świata.", result60Message: "Jeszcze kilka przygód i zostaniesz ekspertem! 🌸",
        result40Title: "Odkrywaj dalej!", result40Description: "Każdy blok to nowa okazja do nauki.", result40Message: "Spróbuj ponownie i zobacz, ile punktów zdobędziesz! ✨",
        resultLowTitle: "Nowa przygoda!", resultLowDescription: "Każdy ekspert kiedyś zaczynał.", resultLowMessage: "Nie poddawaj się — kolejna próba może być znacznie lepsza! 💗",
        countHintCategory: "Ta kategoria ma 10 unikalnych pytań", countHintAll: "Wybierz tempo swojej przygody · do 50 pytań", countDisabledTitle: "Ta kategoria ma obecnie 10 unikalnych pytań. Wybierz „Wszystko”, aby zagrać dłuższy quiz.",
        timeMinutes: n => `~${Math.max(1, Math.ceil(n * 0.3))} min`, homeAria: "Minecraft Quiz — strona główna", metaDescription: "Minecraft Quiz — sprawdź swoją wiedzę o świecie Minecraft!"
    },
    en: {
        languageAria: "Choose language", progressAria: "Quiz progress", status: "QUIZ TIME", eyebrow: "A MAGICAL MINECRAFT ADVENTURE", welcomeDescription: "Test how well you know your world!",
        themeAria: "Choose a quiz theme", themeTitle: "CHOOSE YOUR THEME", themeLavender: "Lavender magic", themeCherry: "A blossoming world", themeEnder: "Mystery of the End",
        setupKicker: "YOUR ADVENTURE, YOUR RULES", categoryHeading: "What shall we explore today?", setupDescription: "Choose a category and set the quiz length that suits you.", categoryAria: "Choose a quiz category",
        catAll: "Everything", catAllDesc: "A mix of all Minecraft", catBiomes: "Biomes", catBiomesDesc: "Landscapes and their secrets", catMobs: "Mobs", catMobsDesc: "Friendly and dangerous creatures",
        catResources: "Resources", catResourcesDesc: "Ores, minerals and blocks", catCrafting: "Crafting", catCraftingDesc: "Items and recipes", catDimensions: "Dimensions & bosses", catDimensionsDesc: "The Nether, the End and epic battles",
        countTitle: "How many questions?", countHint: "Choose the pace of your adventure", countAria: "Number of questions", countQuick: "Quick", countClassic: "Classic", countExpert: "Expert", questionsLabel: "questions", gameTime: "play time", levelRange: "Easy–Pro", levelLabel: "level",
        startQuiz: "Start quiz", openingChest: "Opening the treasure...", welcomeFooter: "MADE WITH ♥ FOR MINECRAFT FANS", resultFactTitle: "One last Minecraft fact", resultFactAria: "Next fact", factKicker: "THE MAGICAL KNOWLEDGE CHEST", factHeading: "Did you know…?", nextFact: "Discover another fact",
        categoryLabel: "CATEGORY", questionLabel: "QUESTION", questionHint: "Choose one correct answer.", yourScore: "Your score:", points: "pts", nextQuestion: "Next question", seeResult: "See results",
        quizCompleted: "QUIZ COMPLETED", resultScore: "YOUR SCORE", correctAnswers: "Correct answers", tryAgain: "Play again", resultFooter: "EVERY BLOCK HAS A STORY ♥", footerTagline: "BUILD YOUR KNOWLEDGE",
        correctStart: "✦ Great job! ", incorrectStart: "♡ Not this time! ", resultPerfectTitle: "Minecraft Master!", resultPerfectDescription: "A perfect score! This world holds no secrets from you.", resultPerfectMessage: "Every answer is correct. A true legend! ✨",
        result80Title: "Amazing score!", result80Description: "You have truly impressive Minecraft knowledge.", result80Message: "You are one step away from perfection. Keep it up! 💜",
        result60Title: "Great explorer!", result60Description: "You already know many secrets of this world.", result60Message: "A few more adventures and you'll be an expert! 🌸",
        result40Title: "Keep exploring!", result40Description: "Every block is another chance to learn.", result40Message: "Try again and see how many points you can earn! ✨",
        resultLowTitle: "A new adventure!", resultLowDescription: "Every expert started somewhere.", resultLowMessage: "Don't give up — your next attempt could be much better! 💗",
        countHintCategory: "This category has 10 unique questions", countHintAll: "Choose your pace · up to 50 questions", countDisabledTitle: "This category currently has 10 unique questions. Choose “Everything” to play a longer quiz.",
        timeMinutes: n => `~${Math.max(1, Math.ceil(n * 0.3))} min`, homeAria: "Minecraft Quiz — home", metaDescription: "Minecraft Quiz — test your knowledge of the Minecraft world!"
    }
};
const facts = [
    { pl: "Creeper powstał przez pomyłkę podczas tworzenia modelu świni — jego nietypowy kształt stał się później ikoną gry.", en: "The Creeper was created by mistake while designing a pig model — its unusual shape later became an icon of the game." },
    { pl: "Pierwsza publiczna wersja Minecrafta ukazała się 17 maja 2009 roku.", en: "The first public version of Minecraft was released on May 17, 2009." },
    { pl: "Bloki w świecie Minecrafta reprezentują sześciany o boku jednego metra.", en: "Blocks in Minecraft represent cubes that are one meter on each side." },
    { pl: "Ametystowe geody mogą kryć się pod ziemią i zawierają kryształy ametystu.", en: "Amethyst geodes can be hidden underground and contain amethyst crystals." },
    { pl: "Endermany otrzymują obrażenia, gdy dotknie ich woda.", en: "Endermen take damage when they come into contact with water." },
    { pl: "Bloki miodu spowalniają poruszające się po nich postacie i moby.", en: "Honey blocks slow down players and mobs moving across them." },
    { pl: "Bloki szlamu pozwalają odbijać się po lądowaniu, jeśli spadniesz na nie z góry.", en: "Slime blocks let entities bounce when they land on them from above." },
    { pl: "Koty potrafią odstraszać creepery, więc mogą pomóc chronić bazę.", en: "Cats can scare creepers away, so they can help protect your base." },
    { pl: "Stół rzemieślniczy pozwala tworzyć przedmioty na siatce 3×3.", en: "A crafting table lets you make items using a 3×3 crafting grid." },
    { pl: "Elytry można znaleźć na statkach w pobliżu miast Endu.", en: "Elytra can be found on ships near End Cities." },
    { pl: "Kompas połączony z magnetytem wskazuje ten konkretny blok, a nie punkt odrodzenia świata.", en: "A compass linked to a lodestone points to that specific block instead of world spawn." },
    { pl: "Trzymając dynię na głowie, możesz patrzeć na Endermany bez wywoływania ich agresji samym spojrzeniem.", en: "Wearing a carved pumpkin lets you look at Endermen without angering them through eye contact." },
    { pl: "Pszczoły zapylające uprawy mogą przyspieszać wzrost roślin.", en: "Bees pollinating crops can help plants grow faster." },
    { pl: "Woda wylana na źródło lawy może zamienić je w obsydian.", en: "Water flowing onto a lava source block can turn it into obsidian." },
    { pl: "Allay potrafi zbierać przedmioty tego samego rodzaju, co przedmiot pokazany mu przez gracza.", en: "An Allay can collect items matching the item a player gives it." },
    { pl: "Aksolotle potrafią udawać martwe, gdy walczą pod wodą.", en: "Axolotls can play dead while fighting underwater." },
    { pl: "Delfiny mogą poprowadzić gracza do pobliskich wraków statków lub ruin oceanu, jeśli nakarmi się je surową rybą.", en: "Dolphins can lead players toward nearby shipwrecks or ocean ruins when fed raw fish." },
    { pl: "Bloki dźwiękowe wydają różne dźwięki zależnie od bloku znajdującego się pod nimi.", en: "Note blocks make different sounds depending on the block underneath them." },
    { pl: "Shulkery w miastach Endu mogą upuszczać skorupy potrzebne do stworzenia shulkerowej skrzyni.", en: "Shulkers in End Cities can drop shells used to craft a shulker box." },
    { pl: "Trzcina cukrowa może rosnąć na odpowiednich blokach sąsiadujących z wodą.", en: "Sugar cane can grow on suitable blocks adjacent to water." }
];
function getLocalizedQuestion(question) {
    return currentLanguage === "en" && question.en
        ? { text: question.en.question, answers: question.en.answers, explanation: question.en.explanation }
        : { text: question[0], answers: question[1], explanation: question[3] };
}
function applyLanguage(language, rerender = true) {
    currentLanguage = language === "en" ? "en" : "pl";
    const strings = uiText[currentLanguage];
    document.documentElement.lang = currentLanguage;
    document.title = "Minecraft Quiz";
    const meta = document.getElementById("metaDescription");
    if (meta) meta.content = strings.metaDescription;
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        if (strings[key] !== undefined && typeof strings[key] !== "function") element.textContent = strings[key];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(element => {
        const key = element.dataset.i18nAria;
        if (strings[key]) element.setAttribute("aria-label", strings[key]);
    });
    if (nextResultFactButton) nextResultFactButton.setAttribute("aria-label", strings.resultFactAria);
    languageButtons.forEach(button => {
        const active = button.dataset.language === currentLanguage;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
    });
    try { localStorage.setItem(languageStorageKey, currentLanguage); } catch (_) {}
    updateCountAvailability();
    updateQuizInfo();
    renderFact(currentFactIndex < 0 ? undefined : currentFactIndex);
    if (rerender && currentQuestions.length && quizScreen.classList.contains("active")) {
        const wasAnswered = answered;
        const previousSelection = lastSelectedIndex;
        loadQuestion();
        if (wasAnswered && previousSelection !== null) restoreAnswerState(previousSelection);
    }
    if (resultScreen.classList.contains("active") && rerender) showResults();
    updateResultFact();
    if (!startButton.disabled) startButtonLabel.textContent = strings.startQuiz;
}
function renderFact(index) {
    if (!factText || !factCounter) return;
    if (typeof index !== "number" || index < 0 || index >= facts.length) {
        let next = Math.floor(Math.random() * facts.length);
        if (facts.length > 1 && next === lastFactIndex) next = (next + 1) % facts.length;
        currentFactIndex = next;
    } else currentFactIndex = index;
    lastFactIndex = currentFactIndex;
    factText.classList.remove("fact-changing");
    void factText.offsetWidth;
    factText.textContent = facts[currentFactIndex][currentLanguage];
    factCounter.textContent = `${String(currentFactIndex + 1).padStart(2, "0")} / ${String(facts.length).padStart(2, "0")}`;
    if (resultFactText) resultFactText.textContent = facts[currentFactIndex][currentLanguage];
    factText.classList.add("fact-changing");
}
function updateResultFact() {
    if (resultFactText && currentFactIndex >= 0 && facts[currentFactIndex]) {
        resultFactText.textContent = facts[currentFactIndex][currentLanguage];
    }
}
function restoreAnswerState(selectedIndex) {
    const current = currentQuestions[currentIndex];
    const localizedQuestion = getLocalizedQuestion(current);
    const buttons = [...answersContainer.querySelectorAll(".answer-button")];
    buttons.forEach((button, index) => {
        button.disabled = true;
        if (index === current[2]) button.classList.add("correct");
        if (index === selectedIndex && index !== current[2]) button.classList.add("incorrect");
    });
    answered = true;
    lastSelectedIndex = selectedIndex;
    feedbackMessage.textContent = (selectedIndex === current[2] ? uiText[currentLanguage].correctStart : uiText[currentLanguage].incorrectStart) + localizedQuestion.explanation;
    feedbackMessage.className = `feedback-message ${selectedIndex === current[2] ? "success" : "error"}`;
    nextButton.disabled = false;
}
function updateQuizInfo() {
    if (selectedQuestionCount) selectedQuestionCount.textContent = String(Math.min(selectedCount, getQuestionPool().length));
    if (estimatedTime) estimatedTime.textContent = uiText[currentLanguage].timeMinutes(Math.min(selectedCount, getQuestionPool().length));
}
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
    categoryTitle.textContent = categoryInfo[selectedCategory][currentLanguage];
    categoryIcon.textContent = categoryInfo[selectedCategory].icon;
    showScreen(quizScreen);
    loadQuestion();
}
function loadQuestion() {
    answered = false;
    lastSelectedIndex = null;
    const current = currentQuestions[currentIndex];
    const questionNumber = currentIndex + 1;
    currentQuestionElement.textContent = questionNumber.toString().padStart(2, "0");
    questionNumberLabel.textContent = questionNumber.toString().padStart(2, "0");
    const localizedQuestion = getLocalizedQuestion(current);
    questionText.textContent = localizedQuestion.text;
    answersContainer.replaceChildren();
    feedbackMessage.textContent = "";
    feedbackMessage.className = "feedback-message";
    nextButton.disabled = true;
    nextButtonText.textContent = currentIndex === currentQuestions.length - 1 ? uiText[currentLanguage].seeResult : uiText[currentLanguage].nextQuestion;
    updateProgress();
    ["A", "B", "C", "D"].forEach((letter, index) => {
        const answer = localizedQuestion.answers[index];
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
    lastSelectedIndex = selectedIndex;
    const current = currentQuestions[currentIndex];
    const localizedQuestion = getLocalizedQuestion(current);
    const allAnswerButtons = answersContainer.querySelectorAll(".answer-button");
    const isCorrect = selectedIndex === current[2];
    allAnswerButtons.forEach((button, index) => {
        button.disabled = true;
        if (index === current[2]) button.classList.add("correct");
    });
    if (isCorrect) {
        score++;
        selectedButton.classList.add("correct");
        feedbackMessage.textContent = uiText[currentLanguage].correctStart + localizedQuestion.explanation;
        feedbackMessage.classList.add("success");
    } else {
        selectedButton.classList.add("incorrect");
        feedbackMessage.textContent = uiText[currentLanguage].incorrectStart + localizedQuestion.explanation;
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
    const strings = uiText[currentLanguage];
    if (percentage === 100) {
        resultBadge.textContent = "👑"; resultTitle.textContent = strings.resultPerfectTitle;
        resultDescription.textContent = strings.resultPerfectDescription;
        resultMessage.textContent = strings.resultPerfectMessage;
    } else if (percentage >= 80) {
        resultBadge.textContent = "🏆"; resultTitle.textContent = strings.result80Title;
        resultDescription.textContent = strings.result80Description;
        resultMessage.textContent = strings.result80Message;
    } else if (percentage >= 60) {
        resultBadge.textContent = "💎"; resultTitle.textContent = strings.result60Title;
        resultDescription.textContent = strings.result60Description;
        resultMessage.textContent = strings.result60Message;
    } else if (percentage >= 40) {
        resultBadge.textContent = "🌸"; resultTitle.textContent = strings.result40Title;
        resultDescription.textContent = strings.result40Description;
        resultMessage.textContent = strings.result40Message;
    } else {
        resultBadge.textContent = "🌱"; resultTitle.textContent = strings.resultLowTitle;
        resultDescription.textContent = strings.resultLowDescription;
        resultMessage.textContent = strings.resultLowMessage;
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
    const strings = uiText[currentLanguage];
    document.querySelectorAll("[data-count]").forEach(option => {
        const unavailable = categoryOnly && Number(option.dataset.count) > 10;
        option.disabled = unavailable;
        option.title = unavailable ? strings.countDisabledTitle : "";
    });
    if (categoryOnly && selectedCount > 10) {
        selectedCount = 10;
        document.querySelectorAll("[data-count]").forEach(option => {
            const selected = Number(option.dataset.count) === selectedCount;
            option.classList.toggle("selected", selected);
            option.setAttribute("aria-pressed", String(selected));
        });
    }
    const countHint = document.querySelector(".question-count-copy span");
    if (countHint) countHint.textContent = categoryOnly ? strings.countHintCategory : strings.countHintAll;
    updateQuizInfo();
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
        updateQuizInfo();
    });
});
updateCountAvailability();
startButton.addEventListener("click", () => {
    if (startButton.disabled) return;
    startButton.disabled = true;
    chestScene.classList.add("chest-opening");
    startButtonLabel.textContent = uiText[currentLanguage].openingChest;
    window.setTimeout(() => {
        chestScene.classList.remove("chest-opening");
        startButton.disabled = false;
        startButtonLabel.textContent = uiText[currentLanguage].startQuiz;
        startQuiz();
    }, 650);
});
nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", () => showScreen(welcomeScreen));
languageButtons.forEach(button => button.addEventListener("click", () => applyLanguage(button.dataset.language)));
nextFactButton.addEventListener("click", () => renderFact());
nextResultFactButton.addEventListener("click", () => renderFact());
createParticles();
updateProgress();
applyLanguage(currentLanguage, false);
renderFact();