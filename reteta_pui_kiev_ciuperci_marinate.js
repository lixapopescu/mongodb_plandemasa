var numeReteta = "Rulada de pui cu unt si usturoi + ciuperci marinate";

db.retete.remove({nume: numeReteta});
print("Removed ", numeReteta);

db.retete.insert({
    nume: numeReteta,
    origine_url2: "http://www.recipe.com/chicken-kiev/",
    origine_url: "http://userealbutter.com/2013/08/11/marinated-mushrooms-recipe/",
    origine_limba: "en",
    origine: "userealbutter.com",
    etichete: ["pui", "rulada", "ciuperci", "marinat"],
    poza: "",
    persoane: 4,
    timp: ,
    nivel: 1,
    limba: "ro",
    nutritie: [{
        calorii: ,
        carbohidrati: ,
        zahar: ,
        grasimi: ,
        grasimi_saturate: ,
        proteine:
    }],
    ingrediente: [{
        pentru: "",
        lista: [{
            nume: "",
            cantitate: ,
            um: "",
            categorie: ""
        }, {
            nume: "",
            cantitate: ,
            um: "",
            categorie: ""
        }, {
            nume: "",
            cantitate: ,
            um: "",
            categorie: ""
        }, {
            nume: "",
            cantitate: ,
            um: "",
            categorie: ""
        }, {
            nume: "",
            cantitate: ,
            um: "",
            categorie: ""
        }, {
            nume: "",
            cantitate: ,
            um: "",
            categorie: ""
        }, {
            nume: "",
            cantitate: ,
            um: "",
            categorie: ""
        }, {
            nume: "",
            cantitate: ,
            um: "",
            categorie: ""
        }, {
            nume: "",
            cantitate: ,
            um: "",
            categorie: ""
        }]
    }, {
        pentru: "",
        lista: [{
            nume: "",
            cantitate: ,
            um: "",
            categorie: ""
        }]
    }],
    instructiuni: [{
        ordine: 1,
        pentru: "",
        text: "°C"
    }, {
        ordine: 2,
        pentru: "",
        text: ""
    }, {
        ordine: ,
        text: ""
    }, {
        ordine: ,
        text: ""
    }, {
        ordine: ,
        text: ""
    }, {
        ordine: ,
        text: ""
    }, {
        ordine: ,
        text: ""
    }, {
        ordine: ,
        text: ""
    }, {
        ordine: ,
        text: ""
    }, {
        ordine: ,
        text: ""
    }, {
        ordine: ,
        text: ""
    }]
})

print("Added new ", numeReteta);