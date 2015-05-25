var numeReteta = "Salata nicoise";

db.retete.remove({
    nume: numeReteta
});
print("Removed ", numeReteta);

db.retete.insert({
    nume: numeReteta,
    origine_url: "http://www.jamieoliver.com/recipes/fish-recipes/griddled-tuna-kinda-ni-oise-salad/",
    origine_limba: "en",
    origine: "Jamie Oliver",
    etichete: ["salata", "peste"],
    poza: "http://s3-eu-west-1.amazonaws.com/jamieoliverprod/_int/rdb2/upload/843_1_1421668974_lrg.jpg",
    persoane: 4,
    timp: 15,
    nivel: 1,
    limba: "ro",
    ingrediente: [{
        pentru: "salata",
        lista: [{
            nume: "fasole galbena",
            cantitate: 350,
            um: "g",
            categorie: "legume",
            comentariu: "sau verde/amestec"
        }, {
            nume: "bagheta",
            cantitate: 0.5,
            um: "buc",
            categorie: "alte"
        }, {
            nume: "masline",
            cantitate: 70,
            um: "g",
            categorie: "condimente"
        }, {
            nume: "rosii",
            cantitate: 300,
            um: "g",
            categorie: "legume"
        }, {
            nume: "salata verde",
            cantitate: 1,
            um: "buc",
            categorie: "legume"
        }, {
            nume: "telemea",
            cantitate: 20,
            um: "g",
            categorie: "lactate",
            comentariu: "feta"
        }, {
            nume: "lamaie",
            cantitate: 1,
            um: "buc",
            categorie: "fructe"
        }]
    }, {
        pentru: "sos",
        lista: [{
            nume: "busuioc",
            cantitate: 1,
            um: "leg",
            categorie: "condimente"
        }, {
            nume: "ansoa",
            cantitate: 6,
            um: "buc",
            categorie: "condimente"
        }, {
            nume: "lamaie",
            cantitate: 1,
            um: "buc",
            categorie: "fructe"
        }, {
            nume: "ulei de masline",
            cantitate: 4,
            um: "Lg",
            categorie: "alte"
        }, {
            nume: "ton",
            cantitate: 400,
            um: "g",
            categorie: "peste",
            comentariu: "2x200g"
        }, {
            nume: "otet rosu",
            cantitate: 1,
            um: "Lg",
            categorie: "alte"
        }, {
            nume: "mustar",
            cantitate: 1,
            um: "Lg",
            categorie: "condimente"
        }, {
            nume: "miere",
            cantitate: 1,
            um: "lg",
            categorie: "alte",
            comentariu: "optional"
        }, {
            nume: "sare de mare",
            categorie: "condimente"
        }]
    }],
    instructiuni: [{
        ordine: 1,
        pentru: "salata",
        text: "Pune apa in fierbator. Cuptor: 220°C (foc mare). Curata fasolea, pune-o intr-o oala si toarna apa clocotita din fierbator peste ea + sare. Pune la foc, cu capac. Taie bagheta in cubulete de 2cm si pune-le la cuptor => crutoane."
    }, {
        ordine: 2,
        pentru: "sos",
        text: "Pune deoparte 10 tije de busuioc. Restul frunzelor de busuioc + ansoa + suc de lamaie + ulei + un pic de apa --> in blender. Pune 40% din sos intr-un castron mic."
    }, {
        ordine: 3,
        pentru: "ton",
        text: "Freaca tonul cu 10% din sos + sare + piper."
    }, {
        ordine: 4,
        pentru: "sos",
        text: "Restul sosului toarna-l intr-un castron mare de salata, amestecandu-l cu otetul, mustarul si mierea."
    }, {
        ordine: 5,
        pentru: "salata",
        text: "Strecoara fasolea, scoate samburii din masline si taie grosier rosiile. Pune toatea astea in vasul de salata, peste sos."
    }, {
        ordine: 6,
        pentru: "ton",
        text: "Pune tonul pe tava de gril incinsa, cate 2 min pe fiecare parte, pana cand e roz in mijloc. "
    }, {
        ordine: 7,
        pentru: "salata",
        text: "Toaca salata verde in bucati de 2cm, rupe crutoanele si aranjeaza-le pe un platou mare, langa salata. Imprastie fasolea, maslinele si rosiile deasupra. Rupe fiecare fileu de ton in doua si pune-le in platou. Arunca deasupra frunzele de busuioc puse deoparte la inceput, telemeaua si felii de lamaie."
    }]
})

print("Added new ", numeReteta);
