var numeReteta = "Somon la tava, de vara";

db.retete.remove({nume: numeReteta});
print("Removed ", numeReteta);

db.retete.insert({
    nume: numeReteta,
    origine_url: "http://www.jamieoliver.com/recipes/fish-recipes/summer-tray-baked-salmon",
    origine_limba: "en",
    origine: "www.jamieoliver.com",
    etichete: ["somon", "cartofi", "fasole verde", "legume"],
    poza: "http://s3-eu-west-1.amazonaws.com/jamieoliverprod/_int/rdb2/upload/1016_2_1426868777_lrg.jpg",
    persoane: 4,
    timp: 45,
    nivel: 1,
    limba: "ro",
    nutritie: [{
        calorii: 498,
        carbohidrati: 30.6,
        zahar: 4.5,
        grasimi: 27,
        grasimi_saturate: 8.5,
        proteine: 30.2
    }],
    ingrediente: [{
        pentru: "legume",
        lista: [{
            nume: "sare de mare",
            categorie: "condimente"
        }, {
            nume: "piper proaspat macinat",
            categorie: "condimente"
        }, {
            nume: "cartofi noi",
            cantitate: 700,
            um: "g",
            categorie: "legume"
        }, {
            nume: "fasole verde",
            cantitate: 200,
            um: "g",
            categorie: "legume"
        }, {
            nume: "fasole galbena",
            cantitate: 100,
            um: "g",
            categorie: "legume",
            comentariu: "optional"
        }, {
            nume: "mazare",
            cantitate: 100,
            um: "g",
            categorie: "legume",
            comentariu: "optional"
        }, {
            nume: "unt",
            cantitate: 55,
            um: "g",
            categorie: "lactate"
        }, {
            nume: "busuioc",
            cantitate: 1,
            um: "leg",
            categorie: "condimente"
        }, {
            nume: "marar",
            cantitate: 1,
            um: "leg",
            categorie: "condimente",
            comentariu: "sau frunze de fenicul"

        }]
    }, {
        pentru: "somon",
        lista: [{
            nume: "somon",
            cantitate: 800,
            um: "g",
            categorie: "peste",
            comentariu: "cu piele, dezosat, taiat in portii"
        }, {
            nume: "lamaie",
            cantitate: 2,
            um: "buc",
            categorie: "fructe"
        }]
    }],
    instructiuni: [{
        ordine: 1,
        text: "Incalzeste cuptorul la 230 grade (foc mare)"
    }, {
        ordine: 2,
        text: "Umple o oala pe jumatate cu apa si un pic de sare. Pune la foc mare sa fiarba"
    }, {
        ordine: 3,
        text: "Intre timp, spala cartofii noi. Curata fasolea verde (si galbena) si tai-o pe diagonala, in bucati de 3 cm"
    }, {
        ordine: 4,
        text: "Cand fierbe apa, pune cu grija cartofii si lasa-i sa fiarba 10-12 min (in functie de dimensiunea cartofilor), pana cand sunt aproape gata"
    }, {
        ordine: 5,
        text: "Scoate mazarea din pastai"
    }, {
        ordine: 6,
        text: "Cand s-au terminat cartofii, pune toata fasolea in apa si mai fierbe inca 4 min"
    }, {
        ordine: 7,
        text: "Scurge cartofii si pastaile, si lasa-le un pic sa se usuce. Pune-le intr-o tava 25x35 cm"
    }, {
        ordine: 8,
        text: "Imprastie mazarea si bucatele din unt in tava"
    }, {
        ordine: 9,
        text: "Deasupra tavii, da pe razatoare coaja de lamie"
    }, {
        ordine: 10,
        text: "Stoarce lamaile si toarna sucul, o parte in tava, o parte peste somon"
    }, {
        ordine: 11,
        text: "Asezoneaza cu sare si piper si amesteca ce e in tava"
    }, {
        ordine: 12,
        text: "Toaca funzele de busuioc si marar si imprastie _jumatate_ in tava"
    }, {
        ordine: 14,
        text: "Cresteaza fileurile de somon pe partea cu pielea. Freaca-le cu un pic de unt moale, sare si piper. Pune in crestaturi restul verdeturilor. Pune somonul peste legume, in tava"
    }, {
        ordine: 15,
        text: "Pune in cuptor pentru 10-15 min, pana cand somonul si legumele sunt gata"
    }, {
        ordine: 16,
        text: "Cand servesti, pune peste si sos din tava"
    }]
});

print("Added new ", numeReteta);