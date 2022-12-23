let elm = document.getElementById("div_card")
let listCard = [
    {
        name: "Aatrox",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Aatrox.png",
        id: "1",
    },
    {
        name: "Ahri",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Ahri.png",
        id: "2",
    },
    {
        name: "Akali",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Akali.png",
        id: "3",
    },
    {
        name: "Akshan",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Akshan.png",
        id: "4",
    },
    {
        name: "Alistar",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Alistar.png",
        id: "5",
    },
    {
        name: "Amumu",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Amumu.png",
        id: "6",
    },
    {
        name: "Anivia",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Anivia.png",
        id: "7",
    },
    {
        name: "Annie",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Annie.png",
        id: "8",
    },
    {
        name: "Aphelios",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Aphelios.png",
        id: "9",
    },
    {
        name: "Ashe",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Ashe.png",
        id: "10",
    },
    {
        name: "Aurelion Sol",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/AurelionSol.png",
        id: "11",
    },
    {
        name: "Azir",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Azir.png",
        id: "12",
    },
    {
        name: "Bard",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Bard.png",
        id: "13",
    },
    {
        name: "Bel'Veth",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Belveth.png",
        id: "14",
    },
    {
        name: "Blitzcrank",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Blitzcrank.png",
        id: "15",
    },
    {
        name: "Brand",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Brand.png",
        id: "16",
    },
    {
        name: "Braum",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Braum.png",
        id: "17",
    },
    {
        name: "Caitlyn",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Caitlyn.png",
        id: "18",
    },
    {
        name: "Camille",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Camille.png",
        id: "19",
    },
    {
        name: "Cassiopeia",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Cassiopeia.png",
        id: "20",
    },
    {
        name: "Cho'Gath",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Chogath.png",
        id: "21",
    },
    {
        name: "Corki",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Corki.png",
        id: "22",
    },
    {
        name: "Darius",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Darius.png",
        id: "23",
    },
    {
        name: "Diana",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Diana.png",
        id: "24",
    },
    {
        name: "Dr. Mundo",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/DrMundo.png",
        id: "25",
    },
    {
        name: "Draven",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Draven.png",
        id: "26",
    },
    {
        name: "Ekko",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Ekko.png",
        id: "27",
    },
    {
        name: "Elise",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Elise.png",
        id: "28",
    },
    {
        name: "Evelynn",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Evelynn.png",
        id: "29",
    },
    {
        name: "Ezreal",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Ezreal.png",
        id: "30",
    },
    {
        name: "Fiddlesticks",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Fiddlesticks.png",
        id: "31",
    },
    {
        name: "Fiora",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Fiora.png",
        id: "32",
    },
    {
        name: "Fizz",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Fizz.png",
        id: "33",
    },
    {
        name: "Galio",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Galio.png",
        id: "34",
    },
    {
        name: "Gangplank",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Gangplank.png",
        id: "35",
    },
    {
        name: "Garen",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Garen.png",
        id: "36",
    },
    {
        name: "Gnar",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Gnar.png",
        id: "37",
    },
    {
        name: "Gragas",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Gragas.png",
        id: "38",
    },
    {
        name: "Graves",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Graves.png",
        id: "39",
    },
    {
        name: "Gwen",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Gwen.png",
        id: "40",
    },
    {
        name: "Hecarim",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Hecarim.png",
        id: "41",
    },
    {
        name: "Heimerdinger",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Heimerdinger.png",
        id: "42",
    },
    {
        name: "Illaoi",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Illaoi.png",
        id: "43",
    },
    {
        name: "Irelia",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Irelia.png",
        id: "44",
    },
    {
        name: "Ivern",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Ivern.png",
        id: "45",
    },
    {
        name: "Janna",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Janna.png",
        id: "46",
    },
    {
        name: "Jarvan IV",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/JarvanIV.png",
        id: "47",
    },
    {
        name: "Jax",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Jax.png",
        id: "48",
    },{
        name: "Jayce",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Jayce.png",
        id: "49",
    },
    {
        name: "Jhin",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Jhin.png",
        id: "50",
    },
    {
        name: "Jinx",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Jinx.png",
        id: "51",
    },
    {
        name: "K'Sante",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/KSante.png",
        id: "52",
    },
    {
        name: "Kai'Sa",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Kaisa.png",
        id: "53",
    },
    {
        name: "Kalista",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Kalista.png",
        id: "54",
    },
    {
        name: "Karma",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Karma.png",
        id: "55",
    },
    {
        name: "Karthus",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Karthus.png",
        id: "56",
    },{
        name: "Kassadin",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Kassadin.png",
        id: "57",
    },
    {
        name: "Katarina",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Katarina.png",
        id: "58",
    },
    {
        name: "Kayle",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Kayle.png",
        id: "59",
    },
    {
        name: "Kayn",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Kayn.png",
        id: "60",
    },
    {
        name: "Kennen",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Kennen.png",
        id: "61",
    },
    {
        name: "Kha'Zix",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Khazix.png",
        id: "62",
    },
    {
        name: "Kindred",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Kindred.png",
        id: "63",
    },
    {
        name: "Kled",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Kled.png",
        id: "64",
    },
    {
        name: "Kog'Maw",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/KogMaw.png",
        id: "65",
    },
    {
        name: "LeBlanc",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Leblanc.png",
        id: "66",
    },
    {
        name: "Lee Sin",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/LeeSin.png",
        id: "67",
    },
    {
        name: "Leona",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Leona.png",
        id: "68",
    },
    {
        name: "Lillia",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Lillia.png",
        id: "69",
    },
    {
        name: "Lissandra",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Lissandra.png",
        id: "70",
    },
    {
        name: "Lucian",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Lucian.png",
        id: "71",
    },
    {
        name: "Lulu",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Lulu.png",
        id: "72",
    },
    {
        name: "Lux",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Lux.png",
        id: "73",
    },
    {
        name: "Malphite",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Malphite.png",
        id: "74",
    },
    {
        name: "Malzahar",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Malzahar.png",
        id: "75",
    },
    {
        name: "Maokai",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Maokai.png",
        id: "76",
    },
    {
        name: "Master Yi",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/MasterYi.png",
        id: "77",
    },
    {
        name: "Miss Fortune",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/MissFortune.png",
        id: "78",
    },
    {
        name: "Mordekaiser",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Mordekaiser.png",
        id: "79",
    },
    {
        name: "Morgana",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Morgana.png",
        id: "80",
    },
    {
        name: "Nami",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Nami.png",
        id: "81",
    },
    {
        name: "Nasus",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Nasus.png",
        id: "82",
    },
    {
        name: "Nautilus",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Nautilus.png",
        id: "83",
    },
    {
        name: "Neeko",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Neeko.png",
        id: "84",
    },
    {
        name: "Nidalee",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Nidalee.png",
        id: "85",
    },
    {
        name: "Nilah",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Nilah.png",
        id: "86",
    },
    {
        name: "Nocturne",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Nocturne.png",
        id: "87",
    },
    {
        name: "Nunu",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Nunu.png",
        id: "88",
    },
    {
        name: "Olaf",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Olaf.png",
        id: "89",
    },
    {
        name: "Orianna",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Orianna.png",
        id: "90",
    },
    {
        name: "Ornn",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Ornn.png",
        id: "91",
    },
    {
        name: "Pantheon",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Pantheon.png",
        id: "92",
    },
    {
        name: "Poppy",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Poppy.png",
        id: "93",
    },
    {
        name: "Pyke",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Pyke.png",
        id: "94",
    },
    {
        name: "Qiyana",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Qiyana.png",
        id: "95",
    },
    {
        name: "Quinn",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Quinn.png",
        id: "96",
    },
    {
        name: "Rakan",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Rakan.png",
        id: "97",
    },
    {
        name: "Rammus",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Rammus.png",
        id: "98",
    },
    {
        name: "Rek'Sai",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/RekSai.png",
        id: "99",
    },
    {
        name: "Rell",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Rell.png",
        id: "100",
    },
    {
        name: "Renata Glasc",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Renata.png",
        id: "101",
    },
    {
        name: "Renekton",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Renekton.png",
        id: "102",
    },
    {
        name: "Rengar",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Rengar.png",
        id: "103",
    },
    {
        name: "Riven",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Riven.png",
        id: "104",
    },
    {
        name: "Rumble",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Rumble.png",
        id: "105",
    },
    {
        name: "Ryze",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Ryze.png",
        id: "106",
    },
    {
        name: "Samira",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Samira.png",
        id: "107",
    },
    {
        name: "Sejuani",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Sejuani.png",
        id: "108",
    },
    {
        name: "Senna",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Senna.png",
        id: "109",
    },
    {
        name: "Seraphine",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Seraphine.png",
        id: "110",
    },
    {
        name: "Sett",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Sett.png",
        id: "111",
    },
    {
        name: "Shaco",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Shaco.png",
        id: "112",
    },
    {
        name: "Shen",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Shen.png",
        id: "113",
    },
    {
        name: "Shyvana",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Shyvana.png",
        id: "114",
    },
    {
        name: "Singed",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Singed.png",
        id: "115",
    },
    {
        name: "Sion",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Sion.png",
        id: "116",
    },
    {
        name: "Sivir",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Sivir.png",
        id: "117",
    },
    {
        name: "Skarner",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Skarner.png",
        id: "118",
    },
    {
        name: "Sona",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Sona.png",
        id: "119",
    },
    {
        name: "Soraka",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Soraka.png",
        id: "120",
    },
    {
        name: "Swain",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Swain.png",
        id: "121",
    },
    {
        name: "Sylas",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Sylas.png",
        id: "122",
    },
    {
        name: "Syndra",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Syndra.png",
        id: "123",
    },
    {
        name: "Tahm Kench",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/TahmKench.png",
        id: "124",
    },
    {
        name: "Taliyah",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Taliyah.png",
        id: "125",
    },
    {
        name: "Talon",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Talon.png",
        id: "126",
    },
    {
        name: "Taric",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Taric.png",
        id: "127",
    },
    {
        name: "Teemo",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Teemo.png",
        id: "128",
    },
    {
        name: "Thresh",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Thresh.png",
        id: "129",
    },
    {
        name: "Tristana",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Tristana.png",
        id: "130",
    },
    {
        name: "Trundle",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Trundle.png",
        id: "131",
    },
    {
        name: "Tryndamere",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Tryndamere.png",
        id: "132",
    },
    {
        name: "Twisted Fate",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/TwistedFate.png",
        id: "133",
    },
    {
        name: "Twitch",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Twitch.png",
        id: "134",
    },
    {
        name: "Udyr",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Udyr.png",
        id: "135",
    },
    {
        name: "Urgot",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Urgot.png",
        id: "136",
    },
    {
        name: "Varus",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Varus.png",
        id: "137",
    },
    {
        name: "Vayne",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Vayne.png",
        id: "138",
    },
    {
        name: "Veigar",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Veigar.png",
        id: "139",
    },{
        name: "Vel'Koz",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Velkoz.png",
        id: "140",
    },
    {
        name: "Vex",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Vex.png",
        id: "141",
    },
    {
        name: "Vi",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Vi.png",
        id: "142",
    },
    {
        name: "Viego",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Viego.png",
        id: "143",
    },
    {
        name: "Viktor",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Viktor.png",
        id: "144",
    },
    {
        name: "Vladimir",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Vladimir.png",
        id: "145",
    },
    {
        name: "Volibear",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Volibear.png",
        id: "146",
    },
    {
        name: "Warwick",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Warwick.png",
        id: "147",
    },
    {
        name: "Wukong",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/MonkeyKing.png",
        id: "148",
    },
    {
        name: "Xayah",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Xayah.png",
        id: "149",
    },
    {
        name: "Xerath",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Xerath.png",
        id: "150",
    },
    {
        name: "Xin Zhao",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/XinZhao.png",
        id: "151",
    },
    {
        name: "Yasuo",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Yasuo.png",
        id: "152",
    },
    {
        name: "Yone",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Yone.png",
        id: "153",
    },
    {
        name: "Yorick",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Yorick.png",
        id: "154",
    },
    {
        name: "Yuumi",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Yuumi.png",
        id: "155",
    },
    {
        name: "Zac",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Zac.png",
        id: "156",
    },
    {
        name: "Zed",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Zed.png",
        id: "157",
    },
    {
        name: "Zeri",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Zeri.png",
        id: "158",
    },
    {
        name: "Ziggs",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Ziggs.png",
        id: "159",
    },
    {
        name: "Zilean",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Zilean.png",
        id: "160",
    },
    {
        name: "Zoe",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Zoe.png",
        id: "161",
    },
    {
        name: "Zyra",
        avatar: "https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Zyra.png",
        id: "162",
    },

];
let temp = "";
for (let index = 0; index < listCard.length; index++) {
    temp += formatCard(listCard[index]);
    
}
function formatCard(card) {
    return `<div onclick="handleClickRow(${card.id})" class="card" style="width: 120px">
    <img src="${card.avatar}" class="card-img-top " alt="...">
    <div class="card-body">
      <h5 class="card-title" style="text-align: center;">${card.name}</h5>
    </div>
  </div>`
}
elm.innerHTML = temp;
function handleClickRow(cardId) {
    console.log("handleClickRow", cardId);
    window.location.href = `./list.html?id${cardId}`;
}