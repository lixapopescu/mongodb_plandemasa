var numeReteta = "Salata greceasca";

db.retete.remove({nume: numeReteta});
print("Removed ", numeReteta);

db.retete.insert({
    nume: numeReteta,
    origine_url: "http://thepioneerwoman.com/cooking/2011/04/greek-salad/",
    origine_limba: "en",
    origine: "The Pioneer Woman",
    etichete: ["salata", "rosii"],
    poza: "http://farm6.static.flickr.com/5267/5626280782_d133ac7d2d_z.jpg",
    persoane: 4,
    timp: 20,
    nivel: 1,
    limba: "ro",
    ingrediente: [{
        pentru: "salata",
        lista: [{
            nume: "salata verde",
            cantitate: 1,
            um: "buc",
            categorie: "legume"
        }, {
            nume: "rosii",
            cantitate: 500,
            um: "g",
            categorie: "legume"
        }, {
            nume: "castravete",
            cantitate: 300,
            um: "g",
            categorie: "legume"
        }, {
            nume: "ceapa rosie",
            cantitate: 0.5,
            um: "buc",
            categorie: "legume"
        }, {
            nume: "masline negre",
            cantitate: 100,
            um: "g",
            categorie: "condimente",
            comentariu: "fara samburi"
        }, {
            nume: "telemea",
            cantitate: 200,
            um: "g",
            categorie: "lactate",
            comentariu: "/feta"
        }]
    }, {
        pentru: "sos",
        lista: [{
            nume: "patrunjel",
            cantitate: 0.5,
            um: "leg",
            categorie: "condimente",
            comentariu: "proaspat"
        }, {
            nume: "ulei de masline",
            cantitate: 40,
            um: "ml",
            categorie: "alte"
        }, {
            nume: "otet rosu",
            cantitate: 2,
            um: "Lg",
            categorie: "alte"
        },{
            nume: "usturoi",
            cantitate: 1,
            um: "cat",
            categorie: "condimente",
            comentariu: "pisat"
        },{
            nume: "piper proaspat macinat",
            categorie: "condimente"
        },{
            nume: "lamaie",
            cantitate: 1,
            um: "buc",
            categorie: "fructe",
            comentariu: "suc"
        }]
    }],
    instructiuni: [{
        ordine: 1,
        pentru: "salata",
        text: "Se toaca toate ingredientele in bucati de dimensiuni similare. Iar ceapa in felii foarte subtiri."
    }, {
        ordine: 2,
        pentru: "sos",
        text: "Se amesteca totul (in afara de lamaie) intr-un borcan mic pana la emulsie. Se toarna peste salata si se adauga sucul de lamaie dupa gust."
    }]
})

print("Added new ", numeReteta);