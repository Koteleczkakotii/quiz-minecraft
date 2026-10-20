// Pytania w języku polskim. Każde pytanie zawiera treść, odpowiedzi, indeks poprawnej odpowiedzi i wyjaśnienie.
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
// Angielskie wersje pytań, wykorzystywane po przełączeniu języka na EN.
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

// Rozszerzona baza wskazówek — dzięki niej każda kategoria ma 30 pytań bazowych.
const dodatkoweWskazowki = {"biomes":[["Windswept Forest","Las wietrzny","Górski, nierówny las z dębami i świerkami na stromym terenie.","A hilly forest of oak and spruce trees on steep terrain."],["Basalt Deltas","Bazaltowe delty","Biom Netheru pełen bazaltowych kolumn i cząsteczek popiołu.","A Nether biome filled with basalt columns and ash particles."],["Warped Forest","Spaczony las","Niebieskozielony biom Netheru z grzybami i endermanami.","A teal Nether biome with fungi and endermen."],["Crimson Forest","Karmazynowy las","Czerwony biom Netheru z karmazynowymi grzybami i hoglinami.","A red Nether biome with crimson fungi and hoglins."],["Soul Sand Valley","Dolina piasku dusz","Biom Netheru z piaskiem dusz, bazaltem i dużą liczbą skamieniałości.","A Nether biome with soul sand, basalt, and many fossils."],["Meadow","Łąka","Wysoko położony, trawiasty biom z kwiatami i często pasącymi się zwierzętami.","A high-altitude grassy biome with flowers and often grazing animals."],["Głęboka ciemność","Deep Dark","Podziemny biom, w którym można znaleźć bloki sculk i starożytne miasta.","An underground biome with sculk blocks and Ancient Cities."],["Jaskinie naciekowe","Dripstone Caves","Jaskinie z naciekami, z których mogą powstawać stalaktyty i stalagmity.","Caves with dripstone that forms stalactites and stalagmites."],["Bujne jaskinie","Lush Caves","Podziemny biom z mchem, azaliami i świecącymi jagodami.","An underground biome with moss, azalea, and glow berries."],["Zaśnieżone równiny","Snowy Plains","Płaski, zimny biom pokryty śniegiem.","A flat, cold biome covered in snow."],["Lodowe kolce","Ice Spikes","Rzadki zimny biom z wysokimi kolumnami lodu.","A rare cold biome with tall pillars of ice."],["Sawanna","Savanna","Ciepły, suchy biom z akacjami i wysoką trawą.","A warm, dry biome with acacia trees and tall grass."],["Równiny","Plains","Otwarty biom, na którym często buduje się pierwsze schronienie.","An open biome where players often build their first shelter."],["Plaża","Beach","Biom przy brzegu, często z piaskiem i żwirem.","A shoreline biome often made of sand and gravel."],["Zamarznięty ocean","Frozen Ocean","Ocean w zimnym klimacie, na którym może pojawiać się lód.","An ocean in a cold climate where ice can form."],["Ciepły ocean","Warm Ocean","Oceaniczny biom, w którym można znaleźć rafy koralowe.","An ocean biome where coral reefs can be found."],["Rzeka","River","Wąski biom wodny, który przecina ląd.","A narrow water biome that cuts through land."],["Las brzozowy","Birch Forest","Las, w którym dominują jasne pnie brzóz.","A forest dominated by pale birch trunks."],["Sunflower Plains","Równiny słonecznikowe","Wariant równin wyróżniający się dużą liczbą słoneczników.","A plains variant distinguished by many sunflowers."],["Las kwiatowy","Flower Forest","Las z dużą liczbą różnych kwiatów.","A forest containing many different kinds of flowers."]],"mobs":[["Ravager","Niszczyciel","Duży wrogi mob pojawiający się podczas najazdów na wioski.","A large hostile mob that appears during village raids."],["Evoker","Przywoływacz","Mob najazdu, który przywołuje magiczne kły i Vexy.","A raid mob that summons fangs and Vexes."],["Vindicator","Obrońca","Wrogi illager walczący w zwarciu z żelaznym toporem.","A hostile illager that fights in melee with an iron axe."],["Pillager","Rozbójnik","Illager używający kuszy i pojawiający się w najazdach lub posterunkach.","An illager that uses a crossbow and appears in raids or outposts."],["Sniffer","Węszyciel","Starożytny mob, który wykopuje z ziemi nasiona pradawnych roślin.","An ancient mob that digs up seeds of ancient plants."],["Breeze","Bryza","Wrogi mob z komnat prób, który atakuje pociskami wiatru.","A hostile Trial Chambers mob that attacks with wind charges."],["Blaze","Blaze","Występuje w fortecach Netheru i upuszcza płomienne różdżki.","Appears in Nether Fortresses and drops blaze rods."],["Shulker","Shulker","Chroni się w skorupie i wystrzeliwuje pociski lewitacji.","Hides in a shell and fires levitation projectiles."],["Piglin","Piglin","Może wymieniać przedmioty na złoto, jeśli gracz oferuje sztabki.","Can barter when a player offers gold ingots."],["Hoglin","Hoglin","Duży, agresywny mob z Netheru, który może upuszczać wieprzowinę.","A large hostile Nether mob that can drop porkchops."],["Strider","Strider","Może chodzić po lawie i da się na nim jeździć.","Can walk on lava and be ridden."],["Żółw","Turtle","Składa jaja na piasku i może upuszczać skorupki po dorastaniu.","Lays eggs on sand and can drop scutes as it grows."],["Pszczoła","Bee","Zbiera pyłek z kwiatów i może pomagać w zapylaniu upraw.","Collects pollen from flowers and can help pollinate crops."],["Delfin","Dolphin","Może dać graczowi efekt zwiększający szybkość pływania.","Can give a player an effect that increases swimming speed."],["Lis","Fox","Może trzymać przedmiot w pysku i bywa aktywny nocą.","Can hold an item in its mouth and is often active at night."],["Koza","Goat","Może taranować i czasem upuszcza róg po uderzeniu w twardą przeszkodę.","Can ram and may drop a horn after hitting a hard obstacle."],["Axolotl","Axolotl","Wodny mob, który pomaga walczyć z niektórymi podwodnymi wrogami.","An aquatic mob that helps fight some underwater enemies."],["Żelazny golem","Iron Golem","Chroni mieszkańców wioski i atakuje wrogie moby.","Protects villagers and attacks hostile mobs."],["Wieśniak","Villager","Handluje z graczem, a profesja zależy między innymi od stanowiska pracy.","Trades with players, and its profession depends partly on its workstation."],["Szkielet","Skeleton","Atakuje z dystansu, strzelając z łuku.","Attacks from a distance with a bow."]],"resources":[["Slimeball","Kula szlamu","Przedmiot upuszczany przez szlamy, używany między innymi do lepkich tłoków.","An item dropped by slimes and used for sticky pistons."],["Honeycomb","Plaster miodu","Można go zebrać z pełnego gniazda lub ula za pomocą nożyc.","Can be collected from a full bee nest or beehive using shears."],["Phantom Membrane","Błona fantoma","Przedmiot upuszczany przez fantomy, używany do naprawiania elytr przy kowadle.","An item dropped by phantoms and used to repair elytra on an anvil."],["Kwarc netherowy","Nether Quartz","Można go wydobywać z rudy kwarcu w Netherze.","Can be mined from Nether quartz ore in the Nether."],["Nautilus Shell","Muszla łodzika","Jest jednym ze składników potrzebnych do stworzenia przewodnika.","One of the ingredients needed to craft a conduit."],["Heart of the Sea","Serce oceanu","Rzadki skarb ze skrzyń zakopanych skarbów, potrzebny do przewodnika.","A rare buried-treasure item required to craft a conduit."],["Echo Shard","Odłamek echa","Można go znaleźć w skrzyniach starożytnych miast i użyć do kompasu odzyskiwania.","Found in Ancient City chests and used to craft a recovery compass."],["Disc Fragment","Fragment płyty","Fragment znajdowany w starożytnych miastach; dziewięć tworzy płytę muzyczną 5.","A fragment found in Ancient Cities; nine craft the Music Disc 5."],["Złoto","Gold Ingot","Pigliny reagują na złoto i mogą wymieniać je na przedmioty.","Piglins react to gold and can barter for items."],["Rabbit Hide","Skóra królika","Cztery sztuki można połączyć w skórę.","Four pieces can be crafted into leather."],["Magma Cream","Krem magmowy","Jest składnikiem mikstur odporności na ogień.","An ingredient for potions of Fire Resistance."],["Glowstone Dust","Jasnopył","Wzmacnia poziom mikstur, gdy zostanie dodany podczas warzenia.","Increases potion strength when added during brewing."],["Szmaragdowy blok","Block of Emerald","Można go stworzyć z dziewięciu szmaragdów.","Can be crafted from nine emeralds."],["Pręt Blaze’a","Blaze Rod","Po przetworzeniu może dać proszek Blaze’a używany do warzenia.","Can be crafted into blaze powder used in brewing."],["Perła Endu","Ender Pearl","Rzucenie nią teleportuje gracza w miejsce jej lądowania.","Throwing it teleports the player to where it lands."],["Łza Ghasta","Ghast Tear","Jest składnikiem mikstury regeneracji.","Is an ingredient for a potion of regeneration."],["Proch","Gunpowder","Jest składnikiem między innymi TNT i rakiet fajerwerkowych.","Is used to craft TNT and firework rockets, among other things."],["Skóra","Leather","Można ją uzyskać między innymi od krów i wykorzystać do książek.","Can be obtained from cows and used to craft books."],["Prismaryn","Prismarine","Jest związany z monumentami oceanicznymi.","Is associated with Ocean Monuments."],["Blok mchu","Moss Block","Może rozprzestrzeniać się na pobliskie bloki przy użyciu mączki kostnej.","Can spread to nearby blocks when bone meal is used."]],"crafting":[["Bow","Łuk","Wytwarza się go z patyków i nici, a służy do strzelania strzałami.","Crafted from sticks and string and used to shoot arrows."],["Blast Furnace","Piec hutniczy","Przetapia rudy i metalowe przedmioty szybciej niż zwykły piec.","Smelts ores and metal items faster than a regular furnace."],["Smoker","Wędzarka","Gotuje jedzenie szybciej niż zwykły piec.","Cooks food faster than a regular furnace."],["Mapa","Map","Może pokazywać obszar świata po jej utworzeniu i użyciu.","Can show an area of the world when created and used."],["Campfire","Ognisko","Można na nim piec jedzenie bez paliwa, choć trwa to dłużej.","Can cook food without fuel, though it takes longer."],["Lectern","Pulpit","Jest stanowiskiem pracy bibliotekarza i może przechowywać otwartą książkę do odczytu.","A librarian workstation that can display an open book for reading."],["Lej","Hopper","Przenosi przedmioty między pojemnikami i innymi blokami.","Moves items between containers and other blocks."],["Komparator redstone","Redstone Comparator","Może odczytywać zawartość pojemników i porównywać sygnały.","Can read container fullness and compare signals."],["Powtarzacz redstone","Redstone Repeater","Opóźnia sygnał i pozwala go odświeżać w obwodzie.","Delays a signal and can refresh it in a circuit."],["Tarcza","Shield","Wytwarza się ją z desek i sztabki żelaza.","Crafted from planks and an iron ingot."],["Wędka","Fishing Rod","Powstaje z patyków i nici.","Crafted from sticks and string."],["Nożyce","Shears","Pozwalają między innymi ścinać wełnę z owiec.","Can be used to shear wool from sheep."],["Wiadro","Bucket","Wytwarza się je z trzech sztabek żelaza.","Crafted from three iron ingots."],["Dozownik","Dispenser","Wystrzeliwuje lub używa przedmiotów po otrzymaniu sygnału redstone.","Dispenses or uses items when it receives a redstone signal."],["Stonecutter","Kamieniarz","Pozwala tworzyć wiele kamiennych wariantów bloków z mniejszą liczbą składników.","Lets players craft many stone block variants with fewer ingredients."],["Krosno","Loom","Pozwala tworzyć wzory na sztandarach.","Used to apply patterns to banners."],["Kamień szlifierski","Grindstone","Pozwala usuwać większość zaklęć i naprawiać niektóre przedmioty.","Can remove most enchantments and repair some items."],["Kompostownik","Composter","Może zamieniać roślinne przedmioty w mączkę kostną.","Can turn plant-based items into bone meal."],["Stół łuczarza","Fletching Table","Jest stanowiskiem pracy łuczarza, ale nie ma standardowej funkcji craftingu dla gracza.","Is a fletcher workstation but has no standard player crafting function."],["Czujnik sculkowy z kalibracją","Calibrated Sculk Sensor","To blok redstone reagujący na określone częstotliwości drgań.","A redstone block that responds to specific vibration frequencies."]],"dimensions":[["Pustynna studnia","Desert Well","Niewielka konstrukcja z piaskowca występująca na pustyni.","A small sandstone structure found in deserts."],["Bastion","Bastion Remnant","Ruiny w Netherze, w których można spotkać pigliny i znaleźć skrzynie.","Nether ruins where piglins can be found and chests may appear."],["Starożytne miasto","Ancient City","Podziemna struktura w biomie Deep Dark, w której trzeba uważać na Wardena.","An underground structure in the Deep Dark where players must beware of the Warden."],["Leśna posiadłość","Woodland Mansion","Duża struktura w mrocznym lesie, w której występują przywoływacze i obrońcy.","A large Dark Forest structure containing evokers and vindicators."],["Pomnik oceaniczny","Ocean Monument","Podwodna struktura strzeżona przez strażników i starszych strażników.","An underwater structure guarded by guardians and elder guardians."],["Wrak statku","Shipwreck","Struktura na lądzie lub pod wodą, w której można znaleźć skrzynie z łupem.","A structure on land or underwater that may contain loot chests."],["Ruiny szlaku","Trail Ruins","Zakopana struktura związana z archeologią i podejrzanym żwirem.","A buried structure associated with archaeology and suspicious gravel."],["Ruiny oceanu","Ocean Ruins","Podwodne pozostałości, w których można znaleźć podejrzany żwir lub piasek.","Underwater ruins where suspicious gravel or sand may be found."],["Komnata prób","Trial Chambers","Podziemna struktura z generatorami prób i wyzwaniami bojowymi.","An underground structure with trial spawners and combat challenges."],["Nether Fossil","Skamieniałość Netheru","Struktura z bloków kości występująca w Dolinie piasku dusz.","A bone-block structure found in the Soul Sand Valley."],["Statek Endu","End Ship","Można w nim znaleźć elytry.","Can contain elytra."],["Buried Treasure","Zakopany skarb","Skrzynia ukryta pod ziemią lub piaskiem, odnajdywana dzięki mapie skarbów.","A chest hidden underground or under sand, found using a treasure map."],["Jungle Temple","Świątynia dżungli","Kamienna struktura z pułapkami i ukrytymi skrzyniami.","A stone structure with traps and hidden chests."],["Pillager Outpost","Posterunek rozbójników","Wieża, w pobliżu której mogą pojawiać się rozbójnicy.","A tower near which pillagers can spawn."],["Opuszczona kopalnia","Mineshaft","Podziemna struktura z torami, podporami i skrzyniami.","An underground structure with rails, supports, and chests."],["Bramy Endu","End Gateway","Portale pojawiające się po pokonaniu smoka, prowadzące na dalsze wyspy Endu.","Portals that appear after defeating the dragon and lead to outer End islands."],["Wioska","Village","Osada z domami i mieszkańcami, którzy mogą handlować z graczem.","A settlement with houses and villagers who can trade with players."],["Ruiny portalu","Ruined Portal","Uszkodzona konstrukcja portalu, która może wystąpić w różnych biomach.","A damaged portal structure that can appear in various biomes."],["Igloo","Igloo","Może zawierać ukrytą piwnicę z mieszkańcami i stanowiskiem alchemicznym.","May contain a hidden basement with villagers and a brewing stand."],["Piramida pustynna","Desert Pyramid","Ma ukrytą komorę z pułapką pod wzorzystą podłogą.","Has a hidden chamber with a trap beneath its patterned floor."]]};
const nazwyKategorii = {
    biomes: { pl: "biom", en: "biome" },
    mobs: { pl: "mob", en: "mob" },
    resources: { pl: "surowiec lub przedmiot", en: "resource or item" },
    crafting: { pl: "przedmiot lub blok", en: "item or block" },
    dimensions: { pl: "struktura lub element", en: "structure or feature" }
};
Object.keys(dodatkoweWskazowki).forEach(kategoria => {
    const wpisy = dodatkoweWskazowki[kategoria];
    wpisy.forEach((wpis, indeks) => {
        const [nazwaPL, nazwaEN, wskazowkaPL, wskazowkaEN] = wpis;
        const pulaBlednych = wpisy.filter((_, i) => i !== indeks);
        const bledne = [pulaBlednych[(indeks + 2) % pulaBlednych.length], pulaBlednych[(indeks + 7) % pulaBlednych.length], pulaBlednych[(indeks + 13) % pulaBlednych.length]];
        const odpowiedziPL = [nazwaPL, ...bledne.map(element => element[0])];
        const odpowiedziEN = [nazwaEN, ...bledne.map(element => element[1])];
        const poprawnyIndeks = indeks % 4;
        const pozycjePL = [...odpowiedziPL];
        const pozycjeEN = [...odpowiedziEN];
        const prawidlowaPL = pozycjePL.shift();
        const prawidlowaEN = pozycjeEN.shift();
        pozycjePL.splice(poprawnyIndeks, 0, prawidlowaPL);
        pozycjeEN.splice(poprawnyIndeks, 0, prawidlowaEN);
        questionBank[kategoria].push([`Który ${nazwyKategorii[kategoria].pl} pasuje do opisu: ${wskazowkaPL}`, pozycjePL, poprawnyIndeks, wskazowkaPL]);
        englishQuestionBank[kategoria].push([`Which ${nazwyKategorii[kategoria].en} matches this description: ${wskazowkaEN}`, pozycjeEN, wskazowkaEN]);
    });
});
// Angielskie wersje do pytań i ich poziom bazowy.
Object.keys(questionBank).forEach(kategoria => {
    questionBank[kategoria].forEach((pytanie, indeks) => {
        const wersjaEN = englishQuestionBank[kategoria][indeks];
        pytanie.en = { question: wersjaEN[0], answers: wersjaEN[1], explanation: wersjaEN[2] };
    });
});
// Pięć pul trudności. Każda kategoria zawiera po 30 pytań na każdym poziomie.
const questionBankByLevel = {};
// Usuwamy z podpowiedzi nazwę poprawnej odpowiedzi, aby wyższe poziomy wymagały rozpoznania faktu.
function removeAnswerFromClue(clue, answer) {
    if (!answer) return clue;
    const escaped = answer.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return clue.replace(new RegExp(escaped, "ig"), "ten element").replace(/\s{2,}/g, " ").trim();
}
Object.keys(questionBank).forEach(kategoria => {
    questionBankByLevel[kategoria] = [];
    for (let poziom = 1; poziom <= 5; poziom++) {
        const pula = questionBank[kategoria].map((pytanie, indeks) => {
            const kopia = [pytanie[0], [...pytanie[1]], pytanie[2], pytanie[3]];
            kopia.level = poziom;
            kopia.seedIndex = indeks;
            const poprawnaPL = pytanie[1][pytanie[2]];
            const poprawnaEN = pytanie.en.answers[pytanie[2]];
            const wskazowkaPL = removeAnswerFromClue(pytanie[3], poprawnaPL);
            const wskazowkaEN = removeAnswerFromClue(pytanie.en.explanation, poprawnaEN);
            if (poziom === 1) {
                kopia.en = { question: pytanie.en.question, answers: [...pytanie.en.answers], explanation: pytanie.en.explanation };
            } else if (poziom === 2) {
                kopia[0] = `Który element pasuje do wskazówki: ${wskazowkaPL}?`;
                kopia.en = { question: `Which element matches this clue: ${wskazowkaEN}?`, answers: [...pytanie.en.answers], explanation: pytanie.en.explanation };
            } else if (poziom === 3) {
                kopia[0] = `Rozpoznaj mechanikę gry na podstawie opisu: ${wskazowkaPL}. Która odpowiedź pasuje?`;
                kopia.en = { question: `Identify the game mechanic from this description: ${wskazowkaEN}. Which answer fits?`, answers: [...pytanie.en.answers], explanation: pytanie.en.explanation };
            } else if (poziom === 4) {
                kopia[0] = `Podczas rozgrywki zauważasz: „${wskazowkaPL}”. Który element najlepiej wyjaśnia tę sytuację?`;
                kopia.en = { question: `During gameplay, you notice: “${wskazowkaEN}”. Which element best explains this situation?`, answers: [...pytanie.en.answers], explanation: pytanie.en.explanation };
            } else {
                kopia[0] = `Wyzwanie eksperckie: przeanalizuj wskazówkę „${wskazowkaPL}” i wskaż element bezpośrednio związany z tą mechaniką.`;
                kopia.en = { question: `Expert challenge: analyze the clue “${wskazowkaEN}” and identify the element directly connected to this mechanic.`, answers: [...pytanie.en.answers], explanation: pytanie.en.explanation };
            }
            return kopia;
        });
        questionBankByLevel[kategoria][poziom] = pula;
    }
});
// Nazwy i ikony kategorii wyświetlane w interfejsie.
const categoryInfo = {
    all: { pl: "Wszystko", en: "Everything", icon: "🌎" },
    biomes: { pl: "Biomy", en: "Biomes", icon: "🌿" },
    mobs: { pl: "Moby", en: "Mobs", icon: "🐲" },
    resources: { pl: "Surowce", en: "Resources", icon: "💎" },
    crafting: { pl: "Crafting", en: "Crafting", icon: "🧰" },
    dimensions: { pl: "Wymiary i bossowie", en: "Dimensions & bosses", icon: "🌌" }
};
// Pobranie elementów HTML, które będą aktualizowane przez skrypt.
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
// Elementy interfejsu odpowiedzialne za wybór trybu, poziomu i wyświetlanie postępu.
const modeButtons = document.querySelectorAll("[data-game-mode]");
const levelButtons = document.querySelectorAll("[data-level]");
const levelProgressValue = document.getElementById("levelProgressValue");
const xpValue = document.getElementById("xpValue");
const quizLevelBadge = document.getElementById("quizLevelBadge");
const levelResultMessage = document.getElementById("levelResultMessage");
// Prosty system kont lokalnych. Nie synchronizuje danych pomiędzy urządzeniami.
const legacyProgressionStorageKey = "minecraftQuizProgressV1";
const accountsStorageKey = "minecraftQuizLocalAccountsV1";
const currentAccountStorageKey = "minecraftQuizCurrentAccountV1";
let currentAccount = "";
let progressionStorageKey = legacyProgressionStorageKey;
try {
    const savedAccount = localStorage.getItem(currentAccountStorageKey) || "";
    const savedAccounts = JSON.parse(localStorage.getItem(accountsStorageKey) || "{}");
    if (savedAccount && savedAccounts[savedAccount]) {
        currentAccount = savedAccount;
        progressionStorageKey = `${legacyProgressionStorageKey}:${currentAccount}`;
    }
} catch (_) { /* Gdy pamięć jest niedostępna, ekran logowania pozwoli spróbować ponownie. */ }
let selectedMode = "free";
let selectedLevel = 1;
let highestUnlockedLevel = 1;
let completedLevels = [];
let totalXP = 0;
let bestLevelScores = {};
let resultsRecordedForCurrentRun = false;
let rewardShownForCurrentRun = false;
let rewardXPThisRun = 0;
let levelResultKind = "";
let levelResultTarget = 0;
// Wczytujemy zapis przypisany do aktywnego konta (jeśli użytkownik jest zalogowany).
loadProgressForAccount();
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

// Odczytuje listę lokalnych kont. To demonstracja, a nie bezpieczny system internetowy.
function readLocalAccounts() {
    try {
        const value = JSON.parse(localStorage.getItem(accountsStorageKey) || "{}");
        return value && typeof value === "object" ? value : {};
    } catch (_) { return {}; }
}
function writeLocalAccounts(accounts) {
    localStorage.setItem(accountsStorageKey, JSON.stringify(accounts));
}
function resetProgressVariables() {
    highestUnlockedLevel = 1;
    completedLevels = [];
    totalXP = 0;
    bestLevelScores = {};
}
function loadProgressForAccount() {
    resetProgressVariables();
    try {
        const saved = JSON.parse(localStorage.getItem(progressionStorageKey) || "{}");
        highestUnlockedLevel = Math.min(5, Math.max(1, Number(saved.highestUnlockedLevel) || 1));
        completedLevels = Array.isArray(saved.completedLevels) ? saved.completedLevels.filter(n => Number.isInteger(n) && n >= 1 && n <= 5) : [];
        totalXP = Math.max(0, Number(saved.totalXP) || 0);
        bestLevelScores = saved.bestLevelScores && typeof saved.bestLevelScores === "object" ? saved.bestLevelScores : {};
    } catch (_) { resetProgressVariables(); }
}
function updateAccountChip() {
    const chip = document.getElementById("accountChip");
    const name = document.getElementById("accountNameLabel");
    if (chip) chip.hidden = !currentAccount;
    if (name) name.textContent = currentAccount;
    const overlay = document.getElementById("authOverlay");
    if (overlay) overlay.classList.toggle("is-hidden", Boolean(currentAccount));
}
function showAuthMessage(message, isSuccess = false) {
    const element = document.getElementById("authMessage");
    if (!element) return;
    element.textContent = message;
    element.classList.toggle("success", isSuccess);
}
let authMode = "login";
function updateAuthLanguage() {
    const en = currentLanguage === "en";
    const elements = {
        authKicker: en ? "YOUR OWN ADVENTURE" : "TWOJA WŁASNA PRZYGODA",
        authDescription: en ? "Save your progress and return to your adventure." : "Zapisuj własny postęp i wracaj do swojej przygody.",
        authUsernameLabel: en ? "Player name" : "Nazwa gracza",
        authPasswordLabel: en ? "Password" : "Hasło",
        authLocalNote: en ? "Accounts are saved only in this browser on this device." : "Konta są zapisywane tylko w tej przeglądarce na tym urządzeniu.",
        logoutButton: en ? "Log out" : "Wyloguj"
    };
    Object.entries(elements).forEach(([id, text]) => { const el = document.getElementById(id); if (el) el.textContent = text; });
    const username = document.getElementById("authUsername");
    const password = document.getElementById("authPassword");
    if (username) username.placeholder = en ? "🎀✨💗" : "🎀✨💗";
    if (password) password.placeholder = en ? "At least 4 characters" : "Minimum 4 znaki";
    const title = document.getElementById("authTitle");
    const submit = document.getElementById("authSubmit");
    const toggle = document.getElementById("authModeToggle");
    const switchText = document.getElementById("authSwitchText");
    if (authMode === "login") {
        if (title) title.textContent = en ? "Log in" : "Zaloguj się";
        if (submit) submit.textContent = en ? "Log in ✨" : "Zaloguj się ✨";
        if (switchText) switchText.textContent = en ? "Don't have an account?" : "Nie masz jeszcze konta?";
        if (toggle) toggle.textContent = en ? "Create account" : "Utwórz konto";
        if (password) password.autocomplete = "current-password";
    } else {
        if (title) title.textContent = en ? "Create your account" : "Utwórz konto";
        if (submit) submit.textContent = en ? "Create account ✨" : "Utwórz konto ✨";
        if (switchText) switchText.textContent = en ? "Already have an account?" : "Masz już konto?";
        if (toggle) toggle.textContent = en ? "Log in" : "Zaloguj się";
        if (password) password.autocomplete = "new-password";
    }
}
function finishLocalLogin(username) {
    currentAccount = username;
    progressionStorageKey = `${legacyProgressionStorageKey}:${currentAccount}`;
    try { localStorage.setItem(currentAccountStorageKey, currentAccount); } catch (_) {}
    loadProgressForAccount();
    updateAccountChip();
    showAuthMessage("");
    selectedLevel = 1;
    updateLevelCards();
    updateQuizInfo();
    showScreen(welcomeScreen);
}

// Teksty interfejsu w języku polskim i angielskim.
const uiText = {
    pl: {
        languageAria: "Wybierz język", progressAria: "Postęp quizu", status: "CZAS NA QUIZ", eyebrow: "MAGICZNA PRZYGODA W MINECRAFCIE", welcomeDescription: "Sprawdź, jak dobrze znasz swój świat!",
        themeAria: "Wybierz motyw quizu", themeTitle: "WYBIERZ SWÓJ MOTYW", themeLavender: "Lawendowa magia", themeCherry: "Kwiatowa kraina", themeEnder: "Tajemnica Endu",
        setupKicker: "TWOJA WYPRAWA, TWOJE ZASADY", categoryHeading: "Co dziś odkrywamy?", setupDescription: "Wybierz kategorię i dopasuj długość quizu do siebie.", categoryAria: "Wybierz kategorię quizu",
        catAll: "Wszystko", catAllDesc: "Miks całego Minecrafta", catBiomes: "Biomy", catBiomesDesc: "Krainy i ich sekrety", catMobs: "Moby", catMobsDesc: "Przyjazne i groźne stworzenia",
        catResources: "Surowce", catResourcesDesc: "Rudy, minerały i bloki", catCrafting: "Crafting", catCraftingDesc: "Przedmioty i receptury", catDimensions: "Wymiary i bossowie", catDimensionsDesc: "Nether, End i wielkie walki",
        countTitle: "Ile pytań?", countHint: "Wybierz tempo swojej przygody", countAria: "Liczba pytań", countQuick: "Szybki", countClassic: "Klasyczny", countExpert: "Ekspert", questionsLabel: "pytań", gameTime: "rozgrywki", levelRange: "Łatwy–Pro", levelLabel: "poziom",
        startQuiz: "Rozpocznij quiz", resetProgress: "↻ Zresetuj postęp", openingChest: "Otwieranie skarbu...", welcomeFooter: "STWORZONE Z ♥ DLA FANÓW MINECRAFTA", resultFactTitle: "Ciekawostka na koniec", resultFactAria: "Następna ciekawostka", factKicker: "MAGICZNA SKRZYNIA WIEDZY", factHeading: "Czy wiesz, że…?", nextFact: "Odkryj kolejną ciekawostkę",
        categoryLabel: "KATEGORIA", questionLabel: "PYTANIE", questionHint: "Wybierz jedną poprawną odpowiedź.", yourScore: "Twój wynik:", points: "pkt", nextQuestion: "Następne pytanie", seeResult: "Zobacz wynik",
        quizCompleted: "QUIZ UKOŃCZONY", resultScore: "TWÓJ WYNIK", correctAnswers: "Poprawne odpowiedzi", tryAgain: "Zagraj ponownie", resultFooter: "KAŻDY BLOK MA SWOJĄ HISTORIĘ ♥", footerTagline: "ROZWIJAJ SWOJĄ WIEDZĘ",
        correctStart: "✦ Świetnie! ", incorrectStart: "♡ Nie tym razem! ", resultPerfectTitle: "Mistrz Minecrafta!", resultPerfectDescription: "Perfekcyjny wynik! Ten świat nie ma przed Tobą tajemnic.", resultPerfectMessage: "Wszystkie odpowiedzi poprawne. Prawdziwa legenda! ✨",
        result80Title: "Niesamowity wynik!", result80Description: "Masz naprawdę imponującą wiedzę o Minecraft.", result80Message: "Jesteś o krok od perfekcji. Tak trzymaj! 💜",
        result60Title: "Świetny odkrywca!", result60Description: "Znasz już sporo sekretów tego świata.", result60Message: "Jeszcze kilka przygód i zostaniesz ekspertem! 🌸",
        result40Title: "Odkrywaj dalej!", result40Description: "Każdy blok to nowa okazja do nauki.", result40Message: "Spróbuj ponownie i zobacz, ile punktów zdobędziesz! ✨",
        resultLowTitle: "Nowa przygoda!", resultLowDescription: "Każdy ekspert kiedyś zaczynał.", resultLowMessage: "Nie poddawaj się — kolejna próba może być znacznie lepsza! 💗",
        countHintCategory: "Ta kategoria ma 10 unikalnych pytań", countHintAll: "Wybierz tempo swojej przygody · do 50 pytań", countDisabledTitle: "Ta kategoria ma obecnie 10 unikalnych pytań. Wybierz „Wszystko”, aby zagrać dłuższy quiz.",
        timeMinutes: n => `~${Math.max(1, Math.ceil(n * 0.3))} min`, homeAria: "Minecraft Quiz — strona główna", metaDescription: "Minecraft Quiz — sprawdź swoją wiedzę o świecie Minecraft!",
        modeTitle: "WYBIERZ TRYB GRY", modeFree: "Tryb swobodny", modeFreeDesc: "Wybierz dowolny poziom", modeCampaign: "Kampania poziomów", modeCampaignDesc: "Odblokowuj kolejne wyzwania", levelTitle: "WYBIERZ POZIOM", levelProgress: "Twój postęp", levelUnlocked: "Odblokowany", levelLocked: "Zablokowany", levelCompleted: "Ukończony", levelNames: ["Początkujący", "Odkrywca", "Zaawansowany", "Ekspert", "Arcymistrz"], levelDescriptions: ["Podstawy świata", "Więcej mechanik", "Wiedza zaawansowana", "Trudniejsze szczegóły", "Największe wyzwanie"], levelBadge: n => `POZIOM ${n}`, unlockSuccess: n => `🏆 Odblokowano poziom ${n}! Zdobywasz nowe wyzwanie.`, unlockNeed: n => `Potrzebujesz co najmniej 80%, aby odblokować poziom ${n}. Spróbuj ponownie!`, campaignComplete: "👑 Ukończono wszystkie poziomy! Jesteś legendą Minecrafta.", xpLabel: "XP", countHintCategory: "Każda kategoria ma 30 pytań na poziom", countHintAll: "Wybierz tempo swojej przygody", countDisabledTitle: "Dostępnych jest do 30 pytań na wybranym poziomie."
    },
    en: {
        languageAria: "Choose language", progressAria: "Quiz progress", status: "QUIZ TIME", eyebrow: "A MAGICAL MINECRAFT ADVENTURE", welcomeDescription: "Test how well you know your world!",
        themeAria: "Choose a quiz theme", themeTitle: "CHOOSE YOUR THEME", themeLavender: "Lavender magic", themeCherry: "A blossoming world", themeEnder: "Mystery of the End",
        setupKicker: "YOUR ADVENTURE, YOUR RULES", categoryHeading: "What shall we explore today?", setupDescription: "Choose a category and set the quiz length that suits you.", categoryAria: "Choose a quiz category",
        catAll: "Everything", catAllDesc: "A mix of all Minecraft", catBiomes: "Biomes", catBiomesDesc: "Landscapes and their secrets", catMobs: "Mobs", catMobsDesc: "Friendly and dangerous creatures",
        catResources: "Resources", catResourcesDesc: "Ores, minerals and blocks", catCrafting: "Crafting", catCraftingDesc: "Items and recipes", catDimensions: "Dimensions & bosses", catDimensionsDesc: "The Nether, the End and epic battles",
        countTitle: "How many questions?", countHint: "Choose the pace of your adventure", countAria: "Number of questions", countQuick: "Quick", countClassic: "Classic", countExpert: "Expert", questionsLabel: "questions", gameTime: "play time", levelRange: "Easy–Pro", levelLabel: "level",
        startQuiz: "Start quiz", resetProgress: "↻ Reset progress", openingChest: "Opening the treasure...", welcomeFooter: "MADE WITH ♥ FOR MINECRAFT FANS", resultFactTitle: "One last Minecraft fact", resultFactAria: "Next fact", factKicker: "THE MAGICAL KNOWLEDGE CHEST", factHeading: "Did you know…?", nextFact: "Discover another fact",
        categoryLabel: "CATEGORY", questionLabel: "QUESTION", questionHint: "Choose one correct answer.", yourScore: "Your score:", points: "pts", nextQuestion: "Next question", seeResult: "See results",
        quizCompleted: "QUIZ COMPLETED", resultScore: "YOUR SCORE", correctAnswers: "Correct answers", tryAgain: "Play again", resultFooter: "EVERY BLOCK HAS A STORY ♥", footerTagline: "BUILD YOUR KNOWLEDGE",
        correctStart: "✦ Great job! ", incorrectStart: "♡ Not this time! ", resultPerfectTitle: "Minecraft Master!", resultPerfectDescription: "A perfect score! This world holds no secrets from you.", resultPerfectMessage: "Every answer is correct. A true legend! ✨",
        result80Title: "Amazing score!", result80Description: "You have truly impressive Minecraft knowledge.", result80Message: "You are one step away from perfection. Keep it up! 💜",
        result60Title: "Great explorer!", result60Description: "You already know many secrets of this world.", result60Message: "A few more adventures and you'll be an expert! 🌸",
        result40Title: "Keep exploring!", result40Description: "Every block is another chance to learn.", result40Message: "Try again and see how many points you can earn! ✨",
        resultLowTitle: "A new adventure!", resultLowDescription: "Every expert started somewhere.", resultLowMessage: "Don't give up — your next attempt could be much better! 💗",
        countHintCategory: "This category has 10 unique questions", countHintAll: "Choose your pace · up to 50 questions", countDisabledTitle: "This category currently has 10 unique questions. Choose “Everything” to play a longer quiz.",
        timeMinutes: n => `~${Math.max(1, Math.ceil(n * 0.3))} min`, homeAria: "Minecraft Quiz — home", metaDescription: "Minecraft Quiz — test your knowledge of the Minecraft world!",
        modeTitle: "CHOOSE GAME MODE", modeFree: "Free play", modeFreeDesc: "Choose any level", modeCampaign: "Level campaign", modeCampaignDesc: "Unlock new challenges", levelTitle: "CHOOSE A LEVEL", levelProgress: "Your progress", levelUnlocked: "Unlocked", levelLocked: "Locked", levelCompleted: "Completed", levelNames: ["Beginner", "Explorer", "Advanced", "Expert", "Grandmaster"], levelDescriptions: ["World basics", "More mechanics", "Advanced knowledge", "Trickier details", "The ultimate challenge"], levelBadge: n => `LEVEL ${n}`, unlockSuccess: n => `🏆 Level ${n} unlocked! A new challenge awaits.`, unlockNeed: n => `You need at least 80% to unlock level ${n}. Try again!`, campaignComplete: "👑 All levels completed! You are a Minecraft legend.", xpLabel: "XP", countHintCategory: "Each category has 30 questions per level", countHintAll: "Choose the pace of your adventure", countDisabledTitle: "Up to 30 questions are available for the selected level."
    }
};
// Ciekawostki o Minecraftcie pokazywane na ekranie powitalnym i wyników.
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
// Zwraca treść pytania i odpowiedzi w aktualnie wybranym języku.
function getLocalizedQuestion(question) {
    return currentLanguage === "en" && question.en
        ? { text: question.en.question, answers: question.en.answers, explanation: question.en.explanation }
        : { text: question[0], answers: question[1], explanation: question[3] };
}
// Zmienia język tekstów na stronie i odświeża elementy zależne od języka.
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
    updateAuthLanguage();
    languageButtons.forEach(button => {
        const active = button.dataset.language === currentLanguage;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
    });
    try { localStorage.setItem(languageStorageKey, currentLanguage); } catch (_) {}
    updateCountAvailability();
    updateQuizInfo();
    updateLevelCards();
    renderFact(currentFactIndex < 0 ? undefined : currentFactIndex);
    if (rerender && currentQuestions.length && quizScreen.classList.contains("active")) {
        const wasAnswered = answered;
        const previousSelection = lastSelectedIndex;
        loadQuestion();
        if (wasAnswered && previousSelection !== null) restoreAnswerState(previousSelection);
    }
    if (resultScreen.classList.contains("active") && rerender) showResults();
    renderLevelResultMessage();
    updateResultFact();
    if (!startButton.disabled) startButtonLabel.textContent = strings.startQuiz;
}
// Wyświetla ciekawostkę; bez podanego indeksu wybiera inną losową ciekawostkę.
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
// Aktualizuje ciekawostkę na ekranie wyników.
function updateResultFact() {
    if (resultFactText && currentFactIndex >= 0 && facts[currentFactIndex]) {
        resultFactText.textContent = facts[currentFactIndex][currentLanguage];
    }
}
// Przywraca oznaczenie odpowiedzi, np. po zmianie języka w trakcie pytania.
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
// Aktualizuje liczbę pytań i szacowany czas quizu.
function updateQuizInfo() {
    if (selectedQuestionCount) selectedQuestionCount.textContent = String(Math.min(selectedCount, getQuestionPool().length));
    if (estimatedTime) estimatedTime.textContent = uiText[currentLanguage].timeMinutes(Math.min(selectedCount, getQuestionPool().length));
}
// Miesza kolejność elementów, aby pytania pojawiały się w losowej kolejności.
function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}
// Zwraca pytania z wybranej kategorii albo ze wszystkich kategorii.
function getQuestionPool() {
    // W kampanii i trybie swobodnym losujemy pytania tylko z wybranego poziomu.
    const kategorie = selectedCategory === "all" ? Object.keys(questionBankByLevel) : [selectedCategory];
    return kategorie.flatMap(kategoria => questionBankByLevel[kategoria][selectedLevel] || []);
}
// Ukrywa pozostałe ekrany i pokazuje wskazany ekran aplikacji.
function showScreen(screenToShow) {
    [welcomeScreen, quizScreen, resultScreen].forEach(screen => screen.classList.remove("active"));
    screenToShow.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
}
// Rozpoczyna nową rozgrywkę: losuje pytania, zeruje wynik i pokazuje pierwsze pytanie.
function startQuiz() {
    const pool = getQuestionPool();
    currentQuestions = shuffle(pool).slice(0, Math.min(selectedCount, pool.length));
    currentIndex = 0;
    score = 0;
    answered = false;
    resultsRecordedForCurrentRun = false;
    rewardShownForCurrentRun = false;
    rewardXPThisRun = 0;
    levelResultKind = "";
    levelResultTarget = 0;
    if (levelResultMessage) levelResultMessage.textContent = "";
    scoreDisplay.textContent = score;
    totalQuestionsElement.textContent = currentQuestions.length.toString().padStart(2, "0");
    categoryTitle.textContent = categoryInfo[selectedCategory][currentLanguage];
    categoryIcon.textContent = categoryInfo[selectedCategory].icon;
    if (quizLevelBadge) quizLevelBadge.textContent = `${uiText[currentLanguage].levelBadge(selectedLevel)} · ${uiText[currentLanguage].levelNames[selectedLevel - 1]}`;
    showScreen(quizScreen);
    loadQuestion();
}
// Wstawia aktualne pytanie i tworzy cztery przyciski odpowiedzi.
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
// Sprawdza wybraną odpowiedź, blokuje przyciski i pokazuje wyjaśnienie.
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
// Przelicza i aktualizuje pasek postępu quizu.
function updateProgress() {
    const progress = currentQuestions.length ? (currentIndex / currentQuestions.length) * 100 : 0;
    progressFill.style.width = `${progress}%`;
    progressTrack.setAttribute("aria-valuenow", Math.round(progress));
    progressSparkle.style.left = `${progress}%`;
    progressSparkle.style.opacity = progress > 0 ? "1" : "0";
}
// Przechodzi do następnego pytania albo wyświetla ekran wyników.
function nextQuestion() {
    if (!answered) return;
    if (currentIndex < currentQuestions.length - 1) {
        currentIndex++;
        loadQuestion();
    } else showResults();
}
// Oblicza procent poprawnych odpowiedzi i dobiera komunikat do uzyskanego wyniku.
function showResults() {
    showScreen(resultScreen);
    // Zapamiętujemy, czy to pierwsze pokazanie wyników tej rundy.
    const showRewardAfterRender = !resultsRecordedForCurrentRun;
    const percentage = Math.round((score / currentQuestions.length) * 100);
    finalScore.textContent = score;
    maxScore.textContent = currentQuestions.length;
    resultPercentage.textContent = `${percentage}%`;
    resultProgressFill.style.width = "0%";
    requestAnimationFrame(() => requestAnimationFrame(() => { resultProgressFill.style.width = `${percentage}%`; }));
    const strings = uiText[currentLanguage];
    if (!resultsRecordedForCurrentRun) {
        resultsRecordedForCurrentRun = true;
        // XP naliczamy raz za ukończoną rundę; ponowne renderowanie języka nie duplikuje punktów.
        rewardXPThisRun = score * 10;
        totalXP += rewardXPThisRun;
        // Perfekcyjny wynik daje dodatkowy bonus doświadczenia.
        if (percentage === 100) {
            totalXP += 25;
            rewardXPThisRun += 25;
        }
        bestLevelScores[String(selectedLevel)] = Math.max(Number(bestLevelScores[String(selectedLevel)] || 0), percentage);
        let komunikatPostepu = "";
        levelResultKind = "";
        levelResultTarget = 0;
        if (selectedMode === "campaign") {
            if (percentage >= 80) {
                if (!completedLevels.includes(selectedLevel)) completedLevels.push(selectedLevel);
                if (selectedLevel < 5 && highestUnlockedLevel < selectedLevel + 1) {
                    highestUnlockedLevel = selectedLevel + 1;
                    totalXP += 50;
                    rewardXPThisRun += 50;
                    levelResultKind = "success";
                    levelResultTarget = highestUnlockedLevel;
                    komunikatPostepu = strings.unlockSuccess(highestUnlockedLevel);
                } else if (selectedLevel === 5) {
                    levelResultKind = "complete";
                    komunikatPostepu = strings.campaignComplete;
                } else {
                    levelResultKind = "completed";
                    komunikatPostepu = strings.levelCompleted;
                }
            } else if (selectedLevel < 5) {
                levelResultKind = "need";
                levelResultTarget = selectedLevel + 1;
                komunikatPostepu = strings.unlockNeed(selectedLevel + 1);
            }
        }
        if (levelResultMessage) levelResultMessage.textContent = komunikatPostepu;
        // Zapisujemy odblokowane poziomy, najlepsze wyniki i sumę doświadczenia.
        try { localStorage.setItem(progressionStorageKey, JSON.stringify({ highestUnlockedLevel, completedLevels, totalXP, bestLevelScores })); } catch (_) {}
        updateLevelCards();
    }
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
    // Animacja pojawia się tylko raz na rundę, nawet jeśli zmienimy język wyników.
    if (showRewardAfterRender && !rewardShownForCurrentRun) {
        rewardShownForCurrentRun = true;
        showRewardCelebration(percentage);
    }
}
// Pokazuje skrzynię nagrody w zależności od wyniku i aktywnego motywu.
function showRewardCelebration(percentage) {
    const overlay = document.getElementById("rewardOverlay");
    const title = document.getElementById("rewardTitle");
    const description = document.getElementById("rewardDescription");
    const kicker = document.getElementById("rewardKicker");
    const xp = document.getElementById("rewardXP");
    const levelMessage = document.getElementById("rewardLevelMessage");
    const crown = document.getElementById("rewardCrown");
    const dialog = document.getElementById("rewardDialog");
    const particles = document.getElementById("rewardParticles");
    if (!overlay || !title || !description || !xp || !dialog) return;

    const english = currentLanguage === "en";
    const perfect = percentage === 100;
    const levelUp = levelResultKind === "success" || levelResultKind === "complete";
    const rewardTier = perfect ? "legendary" : (percentage >= 60 ? "magic" : "small");
    overlay.classList.remove("is-hidden", "reward-small", "reward-magic", "reward-legendary", "reward-level-up");
    overlay.classList.add(`reward-${rewardTier}`);
    if (levelUp) overlay.classList.add("reward-level-up");
    crown.hidden = !perfect;

    if (perfect) {
        kicker.textContent = english ? "LEGENDARY REWARD" : "LEGENDARNA NAGRODA";
        title.textContent = english ? "PERFECT!" : "PERFEKCYJNIE!";
        description.textContent = english ? "Every answer was correct. You are a Minecraft legend!" : "Wszystkie odpowiedzi poprawne. Jesteś legendą Minecrafta!";
    } else if (percentage >= 60) {
        kicker.textContent = english ? "MAGICAL REWARD" : "MAGICZNA NAGRODA";
        title.textContent = english ? "A treasure is yours!" : "Skarb jest Twój!";
        description.textContent = english ? "Your knowledge shines brighter with every adventure." : "Twoja wiedza błyszczy coraz jaśniej z każdą przygodą.";
    } else {
        kicker.textContent = english ? "ADVENTURE REWARD" : "NAGRODA ZA PRZYGODĘ";
        title.textContent = english ? "Every step counts!" : "Każdy krok się liczy!";
        description.textContent = english ? "Keep exploring — every block is a chance to learn." : "Odkrywaj dalej — każdy blok to okazja do nauki.";
    }
    xp.textContent = `+${rewardXPThisRun} XP`;
    if (levelUp && levelResultKind === "success") {
        levelMessage.textContent = english ? `LEVEL UP! Level ${levelResultTarget} unlocked!` : `AWANS! Odblokowano poziom ${levelResultTarget}!`;
    } else if (levelUp && levelResultKind === "complete") {
        levelMessage.textContent = english ? "CAMPAIGN COMPLETE! You mastered all five levels!" : "KAMPANIA UKOŃCZONA! Opanowano wszystkie pięć poziomów!";
    } else {
        levelMessage.textContent = "";
    }

    // Tworzymy lekkie drobinki CSS; nie są potrzebne żadne zewnętrzne grafiki.
    if (particles) {
        particles.replaceChildren();
        const symbols = document.documentElement.dataset.theme === "cherry" ? ["✿", "✧", "♡", "✦"]
            : document.documentElement.dataset.theme === "ender" ? ["✦", "✧", "◆", "✴"]
            : ["✦", "✧", "✴", "💎"];
        for (let i = 0; i < (perfect ? 30 : 18); i++) {
            const particle = document.createElement("span");
            particle.className = "reward-particle";
            particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            particle.style.setProperty("--particle-x", `${Math.random() * 100}%`);
            particle.style.setProperty("--particle-delay", `${Math.random() * 0.8}s`);
            particle.style.setProperty("--particle-duration", `${2.2 + Math.random() * 2.4}s`);
            particle.style.setProperty("--particle-size", `${10 + Math.random() * 14}px`);
            particles.appendChild(particle);
        }
    }
    overlay.setAttribute("aria-label", english ? "Quiz reward" : "Nagroda za quiz");
    overlay.classList.remove("is-hidden");
    dialog.classList.remove("reward-dialog-enter");
    void dialog.offsetWidth;
    dialog.classList.add("reward-dialog-enter");
    const closeButton = document.getElementById("closeRewardButton");
    if (closeButton) closeButton.setAttribute("aria-label", english ? "Close reward" : "Zamknij nagrodę");
    const collectButton = document.getElementById("collectRewardButton");
    if (collectButton) collectButton.textContent = english ? "Collect reward ✨" : "Odbierz nagrodę ✨";
    window.setTimeout(() => { if (!overlay.classList.contains("is-hidden")) dialog.focus(); }, 80);
}

// Zamyka okno nagrody bez zmieniania zdobytych punktów i postępu.
function closeRewardCelebration() {
    const overlay = document.getElementById("rewardOverlay");
    if (overlay) overlay.classList.add("is-hidden");
}

// Tworzy ozdobne, unoszące się symbole w tle strony.
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
// Ustawia wybrany motyw kolorystyczny i zapamiętuje go w przeglądarce.
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
// Włącza lub wyłącza opcje liczby pytań zależnie od wybranej kategorii.
function updateCountAvailability() {
    // Każda kategoria ma 30 pytań na poziom, więc wszystkie długości quizu są dostępne.
    const strings = uiText[currentLanguage];
    document.querySelectorAll("[data-count]").forEach(option => {
        option.disabled = false;
        option.title = "";
    });
    const countHint = document.querySelector(".question-count-copy span");
    if (countHint) countHint.textContent = selectedCategory === "all" ? strings.countHintAll : strings.countHintCategory;
    updateQuizInfo();
}
// Odświeża komunikat kampanii po zmianie języka, nie naliczając ponownie doświadczenia.
function renderLevelResultMessage() {
    if (!levelResultMessage) return;
    const strings = uiText[currentLanguage];
    if (levelResultKind === "success") levelResultMessage.textContent = strings.unlockSuccess(levelResultTarget);
    else if (levelResultKind === "need") levelResultMessage.textContent = strings.unlockNeed(levelResultTarget);
    else if (levelResultKind === "complete") levelResultMessage.textContent = strings.campaignComplete;
    else if (levelResultKind === "completed") levelResultMessage.textContent = strings.levelCompleted;
    else if (!resultsRecordedForCurrentRun) levelResultMessage.textContent = "";
}
// Aktualizuje karty poziomów, statusy blokad i widoczny postęp gracza.
function updateLevelCards() {
    const strings = uiText[currentLanguage];
    levelButtons.forEach(button => {
        const poziom = Number(button.dataset.level);
        const odblokowany = selectedMode === "free" || poziom <= highestUnlockedLevel;
        const wybrany = poziom === selectedLevel;
        button.disabled = !odblokowany;
        button.classList.toggle("selected", wybrany);
        button.setAttribute("aria-pressed", String(wybrany));
        const name = button.querySelector(`[data-level-name="${poziom}"]`);
        const description = button.querySelector(`[data-level-description="${poziom}"]`);
        const status = button.querySelector(`[data-level-status="${poziom}"]`);
        if (name) name.textContent = strings.levelNames[poziom - 1];
        if (description) description.textContent = strings.levelDescriptions[poziom - 1];
        if (status) status.textContent = completedLevels.includes(poziom) ? strings.levelCompleted : (odblokowany ? strings.levelUnlocked : strings.levelLocked);
        const number = button.querySelector(".level-card-number");
        if (number) number.textContent = strings.levelBadge(poziom);
    });
    if (levelProgressValue) levelProgressValue.textContent = `${highestUnlockedLevel}/5`;
    if (xpValue) xpValue.textContent = `${totalXP} ${strings.xpLabel}`;
    modeButtons.forEach(button => {
        const active = button.dataset.gameMode === selectedMode;
        button.classList.toggle("selected", active);
        button.setAttribute("aria-pressed", String(active));
    });
    if (quizLevelBadge) quizLevelBadge.textContent = `${strings.levelBadge(selectedLevel)} · ${strings.levelNames[selectedLevel - 1]}`;
}
// Zmienia tryb gry; w kampanii gracz nie może wybrać jeszcze nieodblokowanego poziomu.
modeButtons.forEach(button => button.addEventListener("click", () => {
    selectedMode = button.dataset.gameMode === "campaign" ? "campaign" : "free";
    if (selectedMode === "campaign" && selectedLevel > highestUnlockedLevel) selectedLevel = highestUnlockedLevel;
    updateLevelCards();
}));
// Wybór poziomu jest swobodny w trybie wolnym, a w kampanii ograniczony postępem.
levelButtons.forEach(button => button.addEventListener("click", () => {
    const poziom = Number(button.dataset.level);
    if (selectedMode === "campaign" && poziom > highestUnlockedLevel) return;
    selectedLevel = poziom;
    updateLevelCards();
    updateQuizInfo();
}));

// Obsługa kliknięć: wybór kategorii, liczby pytań, startu, kolejnych pytań i motywu.
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
updateLevelCards();
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
restartButton.addEventListener("click", () => { updateLevelCards(); showScreen(welcomeScreen); }); 
// Resetuje postęp poziomów po potwierdzeniu przez gracza.
const resetProgressButton = document.getElementById("resetProgressButton");
resetProgressButton.addEventListener("click", () => {
    const confirmationMessage = currentLanguage === "pl"
        ? "Czy na pewno chcesz zresetować cały postęp? Utracisz odblokowane poziomy, XP i zapisane najlepsze wyniki."
        : "Are you sure you want to reset all progress? You will lose unlocked levels, XP and saved best scores.";
    if (!window.confirm(confirmationMessage)) {
        return;
    }
    highestUnlockedLevel = 1;
    completedLevels = [];
    totalXP = 0;
    bestLevelScores = {};
    selectedLevel = 1;
    levelResultKind = "";
    levelResultTarget = 0;
    resultsRecordedForCurrentRun = false;
    try {
        localStorage.removeItem(progressionStorageKey);
    } catch (_) {
    }
    updateLevelCards();
    updateQuizInfo();
    window.alert(
        currentLanguage === "pl"
            ? "✨ Gotowe! Twój postęp został zresetowany."
            : "✨ Done! Your progress has been reset."
    );
});
// Przyciski i tło okna nagrody zamykają animację, ale nie cofają postępu.
["closeRewardButton", "collectRewardButton"].forEach(id => {
    const button = document.getElementById(id);
    if (button) button.addEventListener("click", closeRewardCelebration);
});
const rewardOverlayElement = document.getElementById("rewardOverlay");
if (rewardOverlayElement) rewardOverlayElement.addEventListener("click", event => {
    if (event.target.dataset.closeReward === "true") closeRewardCelebration();
});
document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeRewardCelebration();
});

// Obsługa rejestracji i logowania lokalnych profili.
const authForm = document.getElementById("authForm");
const authModeToggle = document.getElementById("authModeToggle");
const authUsernameInput = document.getElementById("authUsername");
const authPasswordInput = document.getElementById("authPassword");
if (authModeToggle) authModeToggle.addEventListener("click", () => {
    authMode = authMode === "login" ? "register" : "login";
    showAuthMessage("");
    if (authPasswordInput) authPasswordInput.value = "";
    updateAuthLanguage();
});
if (authForm) authForm.addEventListener("submit", event => {
    event.preventDefault();
    const username = (authUsernameInput.value || "").trim();
    const normalized = username.toLocaleLowerCase();
    const password = authPasswordInput.value || "";
    const en = currentLanguage === "en";
    if (!/^[\p{L}\p{N}_-]{3,20}$/u.test(username)) {
        showAuthMessage(en ? "Use 3–20 letters, numbers, _ or -." : "Użyj 3–20 liter, cyfr, znaku _ lub -.");
        return;
    }
    if (password.length < 4) {
        showAuthMessage(en ? "Password must contain at least 4 characters." : "Hasło musi mieć co najmniej 4 znaki.");
        return;
    }
    const accounts = readLocalAccounts();
    if (authMode === "register") {
        if (accounts[normalized]) {
            showAuthMessage(en ? "That player name is already taken." : "Ta nazwa gracza jest już zajęta.");
            return;
        }
        const isFirstAccount = Object.keys(accounts).length === 0;
        accounts[normalized] = { username, password, createdAt: new Date().toISOString() };
        try {
            writeLocalAccounts(accounts);
            // Przy pierwszym koncie przenosimy dotychczasowy anonimowy postęp, jeśli istnieje.
            if (isFirstAccount && localStorage.getItem(legacyProgressionStorageKey)) {
                localStorage.setItem(`${legacyProgressionStorageKey}:${normalized}`, localStorage.getItem(legacyProgressionStorageKey));
            }
        } catch (_) {
            showAuthMessage(en ? "Could not save the account in this browser." : "Nie udało się zapisać konta w tej przeglądarce.");
            return;
        }
        finishLocalLogin(normalized);
        authForm.reset();
        updateAuthLanguage();
    } else {
        const account = accounts[normalized];
        if (!account || account.password !== password) {
            showAuthMessage(en ? "Incorrect player name or password." : "Nieprawidłowa nazwa gracza lub hasło.");
            return;
        }
        finishLocalLogin(normalized);
        authForm.reset();
    }
});
const logoutButton = document.getElementById("logoutButton");
if (logoutButton) logoutButton.addEventListener("click", () => {
    currentAccount = "";
    progressionStorageKey = legacyProgressionStorageKey;
    try { localStorage.removeItem(currentAccountStorageKey); } catch (_) {}
    resetProgressVariables();
    selectedLevel = 1;
    selectedMode = "free";
    updateLevelCards();
    updateQuizInfo();
    showScreen(welcomeScreen);
    authMode = "login";
    if (authForm) authForm.reset();
    showAuthMessage("");
    updateAuthLanguage();
    updateAccountChip();
});

languageButtons.forEach(button => button.addEventListener("click", () => applyLanguage(button.dataset.language)));
nextFactButton.addEventListener("click", () => renderFact());
nextResultFactButton.addEventListener("click", () => renderFact());
createParticles();
updateProgress();
applyLanguage(currentLanguage, false);
updateAccountChip();
updateAuthLanguage();
renderFact();