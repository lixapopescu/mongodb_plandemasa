var numeReteta = "Salata de paste, cu rosii si masline";

db.retete.remove({
    nume: numeReteta
});
print("Removed ", numeReteta);

db.retete.insert({
    nume: numeReteta,
    origine_url: "http://www.jamieoliver.com/recipes/pasta-recipes/the-best-pasta-salad/#SCV2QrWvZCgmchbx.97",
    origine_limba: "en",
    origine: "JamieOliver.com",
    etichete: ["salata", "paste"],
    poza: "http://s3-eu-west-1.amazonaws.com/jamieoliverprod/_int/rdb2/upload/603_1_1350912852_lrg.jpg",
    persoane: 4,
    timp: 15,
    nivel: 1,
    limba: "ro",
    ingrediente: [{
        pentru: "salata",
        lista: [{
            nume: "paste mici",
            cantitate: 300,
            um: "g",
            categorie: "alte"
        }, {
            nume: "rosii mici",
            cantitate: 500,
            um: "g",
            categorie: "legume",
            comentariu: "rosii si galbene"
        }, {
            nume: "masline",
            cantitate: 100,
            um: "g",
            categorie: "condimente",
            comentariu: "fara samburi"
        }, {
            nume: "castraveti",
            cantitate: 3,
            um: "buc",
            categorie: "legume"
        }]
    }, {
        pentru: "sos",
        lista: [{
            nume: "arpagic",
            cantitate: 1,
            um: "leg",
            categorie: "condimente"
        }, {
            nume: "busuioc",
            cantitate: 1,
            um: "leg",
            categorie: "condimente"
        }, {
            nume: "usturoi",
            cantitate: 3,
            um: "cat",
            categorie: "condimente"
        }, {
            nume: "otet alb",
            cantitate: 4,
            um: "Lg",
            categorie: "alte"
        }, {
            nume: "ulei de masline",
            cantitate: 7,
            um: "Lg",
            categorie: "alte"
        }, {
            nume: "sare de mare",
            categorie: "condimente"
        }, {
            nume: "piper proaspat macinat",
            categorie: "condimente"
        }]
    }],
    instructiuni: [{
        ordine: 1,
        pentru: "paste",
        text: "Incalzeste apa in fierbator. Pune intr-o oala apa clocotita, pastele si usturoiul si fierba pana la 'al dente' (cu 2 min mai putin decat pe ambalaj). Strecoara si clateste cu apa rece. Pune deoparte usturoiul. Aseaza pastele in bolul de salata."
    }, {
        ordine: 2,
        pentru: "salata",
        text: "Toaca rosiile, maslinele, arpagicul, busuiocul si castravetii in bucati cam jumatate din dimensiunea pastelor. Adauga-le in bol."
    }, {
        ordine: 3,
        pentru: "sos",
        text: "Scoate usturoiul dinn coaja si zdrobeste-l intr-un mojar. Adauga uleiul, otetul, sare si piper si amesteca. Toarna peste salata."
    }]
})

print("Added new ", numeReteta);
