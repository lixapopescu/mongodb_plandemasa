var numeReteta = "Pui manastiresc";

db.retete.remove({nume: numeReteta});
print("Removed ", numeReteta);

db.retete.insert({
    nume: numeReteta,
    origine_url: "http://www.culinar.ro/retete/mancaruri/mancaruri-cu-carne/pui-manastiresc/63/4/27293/",
    origine_limba: "en",
    origine: "Culinar.ro",
    etichete: ["pui", "o oala"],
    poza: "http://www.culinar.ro/retete-upload/pui-manastiresc-800x600-27293.jpg",
    persoane: 4,
    timp: 90,
    nivel: 1,
    limba: "ro",
    ingrediente: [{
        pentru: "pui",
        lista: [{
            nume: "pui",
            cantitate: 500,
            um: "g",
            categorie: "carne"
        }, {
            nume: "ciuperci",
            cantitate: 300,
            um: "g",
            categorie: "legume"
        }, {
            nume: "smantana",
            cantitate: 300,
            um: "g",
            categorie: "lactate"
        }, {
            nume: "unt",
            cantitate: 50,
            um: "g",
            categorie: "lactate"
        }, {
            nume: "ceapa verde",
            cantitate: 3,
            um: "buc",
            categorie: "legume"
        }, {
            nume: "usturoi",
            cantitate: 3,
            um: "cat",
            categorie: "condimente"
        }, {
            nume: "bacon",
            cantitate: 200,
            um: "g",
            categorie: "carne"
        }, {
            nume: "vin alb",
            cantitate: 200,
            um: "ml",
            categorie: "alte"
        }, {
            nume: "oua",
            cantitate: 3,
            um: "buc",
            categorie: "alte",
            comentariu: "galbenusuri"
        }, {
            nume: "piper proaspat macinat",
            categorie: "condimente"
        }, {
            nume: "sare de mare",
            categorie: "condimente"
        }, {
            nume: "cimbru",
            cantitate: 1,
            um: "leg",
            categorie: "condimente",
            comentariu: "proaspat"
        }]
    }],
    instructiuni: [{
        ordine: 1,
        pentru: "pui",
        text: "Cuptor: 180°C. Toaca si caleste ceapa in unt, intr-o oala/tigaie care merge si la cuptor. Dupa 10 min, adauga carnea de pui, cate 5 min pe fiecare parte. Adauga usturoiul pisat si cimbru. Asezoneaza. Pune capac si lasa 15-20 min. "
    }, {
        ordine: 2,
        pentru: "restul",
        text: "Separat, taie costita afumata si inabuseste-o in unt. Adauga vinul. Taie ciupercile si adauga-le cand vinul s-a evaporat la jumatate, pentru 5 min."
    }, {
        ordine: 3,
        pentru: "straturi",
        text: "Intr-un vas de yena, pune alternativ carnea de pui si bacon + ciupeci (easupra: ciuperci). Toarna peste smantana de la pui."
    }, {
        ordine: 4,
        pentru: "sos",
        text: "Zeama de la bacon + galbenusurile --> amesteca. Toarna peste ciuperci."
    }, {
        ordine: 5,
        text: "Pune la cuptor 30 min, pana se leaga bine sosul."
    }]
})

print("Added new ", numeReteta);