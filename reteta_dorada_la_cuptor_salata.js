db.retete.insert({
    nume: "Dorada la cuptor cu salada verde",
    origine_url: "http://recettessimples.fr/news/dorade-portion-au-vin-blanc",
    origine_limba: "fr",
    origine: "http://recettessimples.fr/",
    etichete: ["dorada", "salata verde"],
    persoane: 4,
    nivel: 1,
    limba: "ro",
    ingrediente: [{
        pentru: "dorada",
        lista: [{
            nume: "dorada",
            cantitate: 4,
            um: "buc",
            categorie: "peste"
        }, {
            nume: "salota",
            cantitate: 1,
            um: "buc",
            categorie: "sau ceapa mica"
        }, {
            nume: "grasime de gatit",
            categorie: "alte"
        }, {
            nume: "unt",
            cantitate: 50,
            um: "g",
            categorie: "lactate"
        }, {
            nume: "sare de mare",
            categorie: "condimente"
        }, {
            nume: "vin alb",
            cantitate: 100,
            um: "ml",
            categorie: "alte"
        }, {
            nume: "patrunjel",
            cantitate: 1,
            um: "leg",
            categorie: "condimente"
        }]
    },
    {
        pentru: "salata",
        lista: [{
            nume: "salata verde",
            cantitate: 1,
            um: "buc",
            categorie: "legume",
            comentariu: "sau amestec din alte frunze de salata"
        },{
            nume: "ulei de masline",
            cantitate: 4,
            um: "Lg",
            categorie: "alte"
        },{
            nume: "otet alb",
            cantitate: 2,
            um: "Lg",
            categorie: "alte"
        },{
            nume: "sare de mare",
            categorie: "condimente",
            comentariu: "macinata"
        }]
    }],
    instructiuni: [{
        ordine: 1,        
        pentru: "dorada",
        text: "Incalzeste cuptorul la 180°C. Spala pestele si curata-l de maruntaie. Toaca patrunjelul si salota."
    }, {
        ordine: 2,
        pentru: "dorada",
        text: "Pune doradele intr-o tava mare de cuptor, cu cate o felie de unt deasupra. Imprastie ceapa tocata deasupra pestelui si in tava. Toarna vinul. Pune patrunjelul mare parte inauntru pestilor, iar restul imprastie deasupra."
    }, {
        ordine: 3,
        pentru: "dorada",
        text: "Pune la cuptor pentru 20-25 min."
    }, {
        ordine: 4, 
        pentru: "salata",
        text: "Spala si toaca salata si pune-o intr-un bol mare."
    }, {
        ordine: 5,
        text: "Amesteca restul ingredientelor intr-un borcan mic, pana la emulsie. Toarna sosul peste salata si amesteca."
    }]
})