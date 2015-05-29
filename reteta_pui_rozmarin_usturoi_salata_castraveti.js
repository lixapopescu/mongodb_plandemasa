var numeReteta = "Pui cu rozmarin si usturoi + salata de castraveti";

db.retete.remove({nume: numeReteta});
print("Removed ", numeReteta);

db.retete.insert({
    nume: numeReteta,
    origine_url: "https://www.youtube.com/watch?v=VbWymMM35tg",
    origine_limba: "en",
    origine: "Youtube",
    etichete: ["pui"],
    poza: "https://www.atelierdeschefs.com/media/recette-e21217-salade-de-concombre-marine.jpg",
    persoane: 4,
    nivel: 1,
    limba: "ro",
    ingrediente: [{
        pentru: "pui",
        lista: [{
            nume: "piept de pui",
            cantitate: 4,
            um: "buc",
            categorie: "carne"
        }, {
            nume: "sare de mare",
            categorie: "condimente"
        }, {
            nume: "piper proaspat macinat",
            categorie: "condimente"
        }, {
            nume: "chilli",
            cantitate: 1,
            um: "buc",
            categorie: "condimente",
            comentariu: "optional"
        }, {
            nume: "grasime de gatit",
            categorie: "alte"
        }, {
            nume: "usturoi",
            cantitate: 6,
            um: "cat",
            categorie: "condimente"
        }, {
            nume: "rozmarin",
            cantitate: 3,
            um: "creng",
            categorie: "condimente"
        }, {
            nume: "cimbru",
            cantitate: 0.5,
            um: "leg",
            categorie: "condimente"
        }, {
            nume: "salvie",
            cantitate: 0.25,
            um: "leg",
            categorie: "condimente"
        },{
            nume: "vin",
            cantitate: 10,
            um: "ml",
            categorie: "alte"
        }]
    }, {
        pentru: "salata",
        lista: [{
            nume: "castraveti",
            cantitate: 6,
            um: "buc",
            categorie: "legume"
        },{
            nume: "marar",
            cantitate: 0.25,
            um: "leg",
            categorie: "condimente",
            comentarii: "proaspat"
        },{
            nume: "ulei de masline",
            cantitate: 100,
            um: "ml",
            categorie: "alte"
        },{
            nume: "otet balsamic alb",
            cantitate: 30,
            um: "ml",
            categorie: "alte"
        },{
            nume: "sare de mare",
            categorie: "condimente"
        },{
            nume: "piper proaspat macinat",
            categorie: "condimente"
        }]
    }],
    instructiuni: [{//°C
        ordine: 1,
        pentru: "pui",
        text: "Pune grasimea de gatit la incalzit intr-o tigaie. Asezoneaza carnea si freac-o bine cu sare si piper si pune-o la calit, doar cat sa-si schimbe un pic culoarea."
    }, {
        ordine: 2,
        pentru: "pui",
        text: "Zdrobeste grosier usturoiul si taie pe lungime chilli. Intoarce carnea in tigaie. Adauga restul ingredientelor _deasupra_. Pune capacul si lasa la foc foarte mic 35 min."
    }, {
        ordine: 3,
        pentru: "pui",
        text: "Stropeste cu vinul si ia de pe foc. Pune carnea pe un platou si toarna sosul deasupra."
    }, {
        ordine: 4,
        pentru: "salata",
        text: "Curata si taie castravetii. Toaca marunt mararul. Intr-un borcan cu capac, pune restul ingredientelor + mararul si agita bine pana la emulsie. Toarna peste castraveti."
    }]
})

print("Added new ", numeReteta);