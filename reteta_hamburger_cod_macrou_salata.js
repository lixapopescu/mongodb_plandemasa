var numeReteta = "Hamburger de peste, cu sos tartar si salata";

db.retete.remove({
    nume: numeReteta
});
print("Removed ", numeReteta);

db.retete.insert({
    nume: numeReteta,
    origine_url: "http://www.greatbritishchefs.com/community/cod-mackerel-burger-recipe",
    origine_limba: "en",
    origine: "www.greatbritishchefs.com",
    etichete: ["hamburger", "peste", "salata"],
    poza: "http://www.greatbritishchefs.com/getmedia/27378173-48f4-44a6-9f00-c857b89e26ef/Cod-and-mackerel-burger/",
    persoane: 4,
    nivel: 1,
    limba: "ro",
    ingrediente: [{
        pentru: "hamburger",
        lista: [{
            nume: "cod",
            cantitate: 250,
            um: "g",
            categorie: "peste",
            comentariu: "fileu"
        }, {
            nume: "macrou",
            cantitate: 250,
            um: "g",
            categorie: "peste"
        }, {
            nume: "usturoi",
            cantitate: 1,
            um: "cat",
            categorie: "condimente",
            comentariu: "pisat"
        }, {
            nume: "bicarbonat de sodiu",
            cantitate: 1,
            um: "lg",
            categorie: "alte"
        }, {
            nume: "boia",
            cantitate: 1,
            um: "lg",
            categorie: "condimente"
        }, {
            nume: "lamaie",
            cantitate: 1,
            um: "buc",
            categorie: "fructe",
            comentariu: "suc"
        }, {
            nume: "patrunjel",
            cantitate: 0.5,
            um: "leg",
            categorie: "condimente"
        }, {
            nume: "sare de mare",
            categorie: "condimente"
        }, {
            nume: "piper proaspat macinat",
            categorie: "condimente"
        }, {
            nume: "ou",
            cantitate: 2,
            um: "buc",
            categorie: "alte"
        }]
    }, {
        pentru: "sos tartar",
        lista: [{
            nume: "ou",
            cantitate: 2,
            um: "buc",
            categorie: "alte",
            comentariu: "galbenusuri"
        }, {
            nume: "mustar",
            cantitate: 1,
            um: "Lg",
            categorie: "condimente"
        }, {
            nume: "lamaie",
            cantitate: 1,
            um: "buc",
            categorie: "fructe",
            comentariu: "suc"
        }, {
            nume: "ulei de masline",
            cantitate: 100,
            um: "ml",
            categorie: "alte"
        }, {
            nume: "ulei de cocos pentru gatit",
            cantitate: 100,
            um: "ml",
            categorie: "alte",
            comentariu: "topit"
        }, {
            nume: "castraveti murati",
            cantitate: 2,
            um: "buc",
            categorie: "alte"
        }, {
            nume: "marar",
            cantitate: 0.5,
            um: "leg",
            categorie: "condimente"
        }, {
            nume: "sare de mare",
            categorie: "condimente"
        }, {
            nume: "piper proaspat macinat",
            categorie: "condimente"
        }]
    }, {
        pentru: "salata",
        lista: [{
            nume: "salata verde",
            cantitate: 1,
            um: "buc",
            categorie: "legume",
            comentariu: "sau amestec din alte frunze de salata"
        }, {
            nume: "ulei de masline",
            cantitate: 4,
            um: "Lg",
            categorie: "alte"
        }, {
            nume: "otet alb",
            cantitate: 2,
            um: "Lg",
            categorie: "alte"
        }, {
            nume: "sare de mare",
            categorie: "condimente",
            comentariu: "macinata"
        }],
    }],
    instructiuni: [{
        ordine: 1,
        pentru: "hamburger",
        text: "Cuptor: 220°C."
    }, {
        ordine: 2,
        pentru: "hamburger",
        text: "(Scoate oasele +) toaca pestele. Pune-l intr-un bol, adauga restul ingredientelor si amesteca. Da-le forma si pune-le in frigider minim 15 min."
    }, {
        ordine: 3,
        pentru: "sos",
        text: "Fa maioneza din galbenusurile de oua, mustar, sucul de lamaie + ulei de masline si cocos (cu blenderul). Adauga castravetii murati taiati foarte fin, mararul tocat si amesteca. Pune sosul la frigider, va fi mult mai bun rece."
    }, {
        ordine: 4,
        pentru: "hamburger",
        text: "Scoate din frigider si pune-i intr-o tava la cuptor pentru 10-15 min."
    }, {
        ordine: 5,
        pentru: "salata",
        text: "Spala si toaca salata si pune-o intr-un bol mare."
    }, {
        ordine: 6,
        pentru: "salata",
        text: "Amesteca restul ingredientelor intr-un borcan mic, pana la emulsie. Toarna sosul peste salata si amesteca."
    }]
});

print("Added new ", numeReteta);
