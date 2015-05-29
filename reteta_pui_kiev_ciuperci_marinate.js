var numeReteta = "Rulada de pui cu unt si usturoi + ciuperci marinate";

db.retete.remove({
    nume: numeReteta
});
print("Removed ", numeReteta);

db.retete.insert({
    nume: numeReteta,
    origine_url: "http://www.recipe.com/chicken-kiev/",
    origine_url2: "http://userealbutter.com/2013/08/11/marinated-mushrooms-recipe/",
    origine_limba: "en",
    origine: "userealbutter.com",
    etichete: ["pui", "rulada", "ciuperci", "marinat"],
    poza2: "http://userealbutter.com/recipe_photos/marinated-mushrooms8.jpg",
    poza: "http://www.recipe.com/images/chicken-kiev-R087171-ss.jpg",
    persoane: 4,
    nivel: 2,
    limba: "ro",
    ingrediente: [{
        pentru: "rulada",
        lista: [{
            nume: "ceapa verde",
            cantitate: 2,
            um: "buc",
            categorie: "legume"
        }, {
            nume: "patrunjel",
            cantitate: 1,
            um: "leg",
            categorie: "condimente"
        }, {
            nume: "usturoi",
            cantitate: 1,
            um: "cat",
            categorie: "condimente",
            comentariu: "pisat"
        }, {
            nume: "unt",
            cantitate: 50,
            um: "g",
            categorie: "lactate",
            comentariu: "de la frigider"
        }, {
            nume: "piept de pui",
            cantitate: 4,
            um: "buc",
            categorie: "carne"
        }, {
            nume: "grasime de gatit",
            categorie: "alte"
        }]
    }, {
        pentru: "ciuperci",
        lista: [{
            nume: "ciuperci",
            cantitate: 450,
            um: "g",
            categorie: "legume",
            comentariu: "mici"
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
        },{
            nume: "lamaie",
            cantitate: 1,
            um: "buc",
            categorie: "fructe",
            comentariu: "suc"
        }, {
            nume: "usturoi",
            cantitate: 1,
            um: "cat",
            categorie: "condimente",
            comentariu: "pisat"
        }, {
            nume: "ceapa rosie",
            cantitate: 1,
            um: "buc",
            categorie: "legume",
            comentariu: "tocata marunt"
        },{
            nume: "oregano",
            cantitate: 1,
            um: "leg",
            categorie: "condimente",
            comentariu: "proaspat"
        }, {
            nume: "patrunjel",
            cantitate: 1,
            um: "leg",
            categorie: "condimente",
            comentariu: "proaspat"
        }, {
            nume: "sare de mare",
            categorie: "condimente"
        },{
            nume: "piper proaspat macinat",
            categorie: "condimente"
        }, {
            nume: "boabe de piper",
            cantitate: 0.5,
            um: "lg",
            categorie: "condimente"
        }, {
            nume: "seminte de coriandru",
            cantitate: 0.5,
            um: "lg",
            categorie: "condimente"
        }]
    }],
    instructiuni: [{
        ordine: 1,
        pentru: "rulada",
        text: "Cuptor: 180°C"
    }, {
        ordine: 2,
        pentru: "rulada",
        text: "Toaca ceapa, patrunjelul si usturoiul si amesteca-le intr-un vas mic. Scoate untul din frigider si taie-l in 4."
    }, {
        ordine: 3,
        pentru: "rulada",
        text: "Pune pieptul de pui intre 2 straturi de folie alimentara si bate-l cu partea plata a batatorului. Scoate folia, asezoneaza. Pune amestecul de ceapa pe fiecare bucata de piept, pune o portie de unt in mijloc. Pliaza partile, apoi ruleaza."
    }, {
        ordine: 4,
        pentru: "rulada",
        text: "Pune la frigider pentru 1-24 ore."
    }, {
        ordine: 5,
        pentru: "rulada",
        text: "Pune grasime de gatit intr-o tigaie. Pune usor ruladele si lasa-le 5 min sau pana fac crusta. Pune-le intr-o tava la cuptor pentru 15-18 min."
    }, {
        ordine: 7,
        pentru: "ciuperci",
        text: "Intr-o oala, pune apa sarata la fiert. Curata ciupercile. Cand fierbe, pune ciupercile in apa la foc moderat timp de 5 min. Toaca usturoiul, ceapa, oregano si patrunjelul."
    }, {
        ordine: 8,
        pentru: "ciuperci",
        text: "Strecoara ciupercile. Pune-le, alaturi de celelalte ingrediente, intr-un borcan mare si pune capacul. Agita bine borcanul."
    }, {
        ordine: 9,
        pentru: "ciuperci",
        text: "Lasa la marinat in figider peste noapte."
    }]
})

print("Added new ", numeReteta);
