var numeReteta = "Tocanita de pui cu ghimbir";

db.retete.remove({nume: numeReteta});
print("Removed ", numeReteta);

db.retete.insert({
    nume: numeReteta,
    origine_url: "http://www.canalvie.com/recettes/ragout-de-poulet-1.1071611",
    origine_limba: "fr",
    origine: "www.canalvie.com",
    etichete: ["pui", "tocanita"],
    poza: "http://www.canalvie.com/polopoly_fs/1.1102787.1351693767!/image/ragout-poulet-2673.jpg_gen/derivatives/cvbox_410_231/ragout-poulet-2673.jpg",
    persoane: 4,
    timp: 80,
    nivel: 1,
    limba: "ro",
    ingrediente: [{
        pentru: "tocanita",
        lista: [{
            nume: "usturoi",
            cantitate: 3,
            um: "cat",
            categorie: "condimente"
        }, {
            nume: "ghimbir",
            cantitate: 1,
            um: "Lg",
            categorie: "condimente",
            comentariu: "dat pe razatoare"
        }, {
            nume: "coriandru",
            cantitate: 1,
            um: "lg",
            categorie: "condimente",
            comentariu: "macinat"
        }, {
            nume: "ardei chilli",
            cantitate: 0.3,
            um: "lg",
            categorie: "condimente",
            comentariu: "macinat"
        }, {
            nume: "grasime de gatit",
            categorie: "alte"
        }, {
            nume: "pulpe de pui",
            cantitate: 4,
            um: "buc",
            categorie: "carne"
        }, {
            nume: "ceapa",
            cantitate: 1,
            um: "buc",
            categorie: "legume"
        }, {
            nume: "morcov",
            cantitate: 2,
            um: "buc",
            categorie: "legume"
        }, {
            nume: "varza",
            cantitate: 0.25,
            um: "buc",
            categorie: "legume"
        }, {
            nume: "nap",
            cantitate: 0.25,
            um: "buc",
            categorie: "legume"
        }, {
            nume: "frunze de telina",
            cantitate: 2,
            um: "buc",
            categorie: "legume"
        }, {
            nume: "cartof",
            cantitate: 100,
            um: "g",
            categorie: "legume"
        }, {
            nume: "supa de pui",
            cantitate: 1000,
            um: "ml",
            categorie: "alte"
        }, {
            nume: "sos de soia",
            cantitate: 1,
            um: "Lg",
            categorie: "condimente"
        }, {
            nume: "sare de mare",
            categorie: "condimente"
        }, {
            nume: "piper proaspat macinat",
            categorie: "condimente"
        }, {
            nume: "anason stelat",
            cantitate: 1,
            um: "buc",
            categorie: "condimente"
        }]
    }],
    instructiuni: [{
        ordine: 1,
        text: "Intr-o oala mai mare, caleste usturoiul, ghimbirul si celelalte condimente, in afara de anasonul stelat. Adauga pulpele de pui 1 minut pe fiecare parte si scoate-l din oala."
    }, {
        ordine: 2,
        text: "Toaca legumele. Adauga-le in oala. Mai pune grasime de gatit. Lasa-le 3 min."
    }, {
        ordine: 3,
        text: "Adauaga ingredientele lichide, sare, piper si anason. Pune apa doar cat sa acopere legumele. Pune puiul peste, acopera cu un capac si adu totul la punctul de fierbere. Da focul mai incet si lasa sa fiarba incet 1 ora, sau pana cand e gata puiul si sosul are consistenta dorita."
    }]
})

print("Added new ", numeReteta);
