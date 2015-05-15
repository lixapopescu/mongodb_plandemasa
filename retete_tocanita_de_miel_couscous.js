db.retete.insert({
    nume: "Tocanita de miel cu couscous",
    origine_url: "http://www.jamieoliver.com/recipes/lamb-recipes/mediterranean-braised-lamb-and-couscous/",
    origine_limba: "en",
    origine: "www.jamieoliver.com",
    etichete: ["miel", "couscous", "tocanita", "sos de rosii", "supa de pui", "tocanita"],
    persoane: 4,
    timp: 110,
    nivel: 1,
    limba: "ro",
    nutritie: [{
        calorii: 487,
        carbohidrati: 31.9,
        zahar: 7.9,
        grasimi: 26,
        grasimi_saturate: 11,
        proteine: 28.9
    }],
    ingrediente: [{
        pentru: "tocanita",
        lista: [{
            nume: "ceapa",
            cantitate: 1,
            um: "buc.",
            categorie: "legume",
            comentariu: "mica"
        }, {
            nume: "grasime de gatit",
            categorie: "alte"
        }, {
            nume: "miel",
            cantitate: 500,
            um: "g",
            categorie: "carne",
            comentariu: "pulpa sau picior"
        }, {
            nume: "ardei gras",
            cantitate: 1,
            um: "buc.",
            categorie: "legume",
            comentariu: "tocat cubulete"
        }, {
            nume: "piure de rosii",
            cantitate: 1,
            um: "lg.",
            categorie: "alte",
            comentariu: "sos de rosii concentrat"
        }, {
            nume: "sos de rosii",
            cantitate: 400,
            um: "g",
            categorie: "alte"
        }, {
            nume: "busuioc",
            cantitate: 2,
            um: "tije",
            categorie: "condimente",
            comentariu: "tocat"
        }, {
            nume: "sare de mare",
            categorie: "condimente"
        }]
    }, {
        pentru: "couscous",
        lista: [{
            nume: "couscous",
            cantitate: 125,
            um: "g",
            categorie: "alte"
        }, {
            nume: "supa de pui",
            cantitate: 150,
            um: "g",
            categorie: "alte"
        }]
    }],
    instructiuni: [{
        ordine: 1,
        pentru: "tocanita",
        text: "Caleste ceapa in grasime de gatit 10 min. Adauga mielul tocat cuburi, usturoiul, ardeiul rosu si piureul de rosii. Varsa sosul de rosii, 400 ml apa si busuioc. Adauga sare dupa gust, pune capacul si pune la fiert inabusit o ora jumatate,pana cand carnea e frageda. Sau pune totul la cuptor (150°C/foc mic) pentru 2 ore."
    }, {
        ordine: 2,
        pentru: "couscous",
        text: "Pune couscous-ul intr-un bol mare si toarna supa de pui clocotita peste. Ar trebui ca abia sa il acopere. Lasa-l sa stea acoperit cu un capac 10 min. Aeriseste-l cu o furculita inainte de servire."
    }]
})