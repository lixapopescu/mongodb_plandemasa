var numeReteta = "Salata de patrav afumat cu cartofi noi";

db.retete.remove({nume: numeReteta});
print("Removed ", numeReteta);

db.retete.insert({
    nume: numeReteta,
    origine_url: "http://www.jamieoliver.com/recipes/fish-recipes/smoked-trout-and-jersey-royal-salad/",
    origine_limba: "en",
    origine: "www.jamieoliver.com",
    etichete: ["salata", "peste", "pastrav", "cartofi noi"],
    persoane: 4,
    timp: 30,
    nivel: 1,
    limba: "ro",
    nutritie: [{
        calorii: 283,
        carbohidrati: 32.9,
        zahar: 4.8,
        grasimi: 7.2,
        grasimi_saturate: 2.7,
        proteine: 19.8
    }],
    ingrediente: [{
        pentru: "salata",
        lista: [{
            nume: "cartofi noi",
            cantitate: 800,
            um: "g",
            categorie: "legume"
        }, {
            nume: "smantana",
            cantitate: 2,
            um: "Lg",
            categorie: "lactate"
        }, {
            nume: "lamaie",
            cantitate: 1,
            um: "buc.",
            categorie: "fructe",
            comentariu: "coaja si sucul"
        }, {
            nume: "ceapa rosie",
            cantitate: 1,
            um: "buc.",
            categorie: "legume",
            comentariu: "curatata si taiata fin"
        }, {
            nume: "patrunjel",
            cantitate: 1,
            um: "leg.",
            categorie: "condimente",
            comentariu: "frunzele, taiate grosier"
        }, {
            nume: "capere",
            cantitate: 100,
            um: "g",
            categorie: "condimente",
            comentariu: "scurse si eventual clatite"
        }, {
            nume: "nasturel",
            cantitate: 1,
            um: "pumn",
            categorie: "legume",
            comentariu: "sau alt tip de salata, tocata",
            url: "https://ierburiuitate.wordpress.com/tag/nasturel/"
        }, {
            nume: "sare de mare",
            categorie: "condimente"
        }, {
            nume: "piper proaspat macinat",
            categorie: "condimente"
        }, {
            nume: "pastrav afumat",
            cantitate: 300,
            um: "g",
            categorie: "peste",
            comentariu: "din surse sustenabile"
        }]
    }],
    instructiuni: [{
        ordine: 1,
        text: "Pune cartofii intr-un vas cu apa clocotita si fierbe pana sunt gata. Strecoara si, eventual, lasa sa se raceasca."
    }, {
        ordine: 2,
        text: "Intre timp, intr-un vas amesteca smantana cu coaja si sucul de lamaie. Pregateste celelalte ingrediente."
    }, {
        ordine: 3,
        text: "In vas, adauga cartofii, ceapa, patrunjelul, caperele si nasturelul. Adauga sare si piper dupa gust si amesteca bine."
    }, {
        ordine: 4,
        text: "Imparte salata in portii individuale si pune pastravul afumat deasupra, desfacandu-l in straturi."
    }]
});

print("Added new ", numeReteta);