var numeReteta = "Pui cu orez si mazare";

db.retete.remove({nume: numeReteta});
print("Removed ", numeReteta);

db.retete.insert({
    nume: numeReteta,
    origine_url: "http://www.cakeduchess.com/2013/11/easy-one-pot-chicken-rice.html",
    origine_limba: "en",
    origine: "Cake Duchess",
    etichete: ["o oala", "orez", "pui"],
    poza: "http://i1.wp.com/www.cakeduchess.com/wp-content/uploads/2013/11/one-pot-chicken-and-rice-cakeduchess-1.jpg",
    persoane: 4,
    nivel: 1,
    limba: "ro",
    ingrediente: [{
        pentru: "orez",
        lista: [{
            nume: "grasime de gatit",
            categorie: "alte"
        }, {
            nume: "pui",
            cantitate: 1000,
            um: "g",
            categorie: "carne"
        }, {
            nume: "ceapa",
            cantitate: 1,
            um: "buc",
            categorie: "legume",
            comentariu: "mare"
        }, {
            nume: "orez alb",
            cantitate: 180,
            um: "g",
            categorie: "alte"
        }, {
            nume: "supa de pui",
            cantitate: 450,
            um: "ml",
            categorie: "alte"
        }, {
            nume: "sofran",
            cantitate: 1,
            um: "buc",
            categorie: "condimente",
            comentariu: "optional"
        }, {
            nume: "frunze de dafin",
            cantitate: 1,
            um: "buc",
            categorie: "condimente"
        }, {
            nume: "mazare",
            cantitate: 100,
            um: "g",
            categorie: "legume"
        }, {
            nume: "sare de mare",
            categorie: "condimente"
        },{
            nume: "lamaie",
            cantitate: 1,
            um: "buc",
            categorie: "fructe"
        },{
            nume: "piper proaspat macinat",
            categorie: "condimente"
        }]
    }],
    instructiuni: [{
        ordine: 1,
        text: "Pune grasimea de gatit la incins intr-o oala mai mare. Toaca ceapa si pune-o la calit. In 5-10 min, adauga bucatile de pui si lasa-l 5-7 minute pe fiecare parte, la foc mediu."
    }, {
        ordine: 2,
        text: "Dizolva sofranul in un pic de apa si adauga-l in oala. Pune si restul ingredientelor inauntru si amesteca. Lasa-l la fiert inabusit 25 minute, pana cand orezul e moale si puiul facut. Verifica periodic si completeaza cu apa la nevoie."
    }]
})

print("Added new ", numeReteta);