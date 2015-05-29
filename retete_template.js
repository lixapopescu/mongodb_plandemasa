var numeReteta = "Somon la tava, de vara";

db.retete.remove({nume: numeReteta});
print("Removed ", numeReteta);

db.retete.insert({
    nume: numeReteta,
    origine_url: "",
    origine_limba: "en",
    origine: "www.jamieoliver.com",
    origine_carte: "",
    etichete: [""],
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