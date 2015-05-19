db.plan.remove({saptamana: 21, an: 2015});
print("Removed Plan 21/2015");

db.retete.find({
        nume: "Salata de pastrav afumat cu cartofi noi"
    })
    .forEach(function(r) {
        db.plan.insert({
            nume: "Plan #21/2015",
            saptamana: 21,
            prima_zi: new Date(2015, 4, 18),
            ultima_zi:  new Date(2015, 4, 24),
            an: 2015,
            pinterest_url: "https://www.pinterest.com/plandemasa/plan-212005/",
            zile: [{
                index: 1, //Luni
                nume: "Luni",
                abreviatie: "A",
                retete: r,
                etichete: ["salata", "peste"],
                categorie: "Fel principal",
                pinterest_url: "https://www.pinterest.com/pin/547257792196793346/"
            }]
        });

    });

db.retete.find({
        nume: "Somon la tava, de vara"
    })
    .forEach(function(r) {
            db.plan.update({
                    saptamana: 21,
                    an: 2015
                }, {
                    $addToSet: {
                        zile: {
                            index: 2, //Marti
                            nume: "Marti",
                            abreviatie: "B",
                            retete: r,
                            categorie: "Fel principal",
                            etichete: ["peste"],
                            pinterest_url: "https://www.pinterest.com/pin/547257792196793336/"
                        }
                    }
                }

            );

    });

db.retete.find({
        nume: "Perisoare cu sos de rosii"
    })
    .forEach(function(r) {
            db.plan.update({
                    saptamana: 21,
                    an: 2015
                }, {
                    $addToSet: {
                        zile: {
                            index: 3, //Miercuri
                            nume: "Miercuri",
                            abreviatie: "C",
                            retete: r,
                            categorie: "Fel principal",
                            etichete: ["carne tocata"],
                            pinterest_url: "https://www.pinterest.com/pin/547257792196793328/"
                        }
                    }
                }

            );

    });
db.retete.find({
        nume: "Pui cu mustar, cartofi rapizi si verdeturi"
    })
    .forEach(function(r) {
            db.plan.update({
                    saptamana: 21,
                    an: 2015
                }, {
                    $addToSet: {
                        zile: {
                            index: 4, //Joi
                            nume: "Joi",
                            abreviatie: "D",
                            retete: r,
                            categorie: "Fel principal",
                            etichete: ["pui", "legume"],
                            pinterest_url: "https://www.pinterest.com/pin/547257792196793304/"
                        }
                    }
                }

            );

    });
db.retete.find({
        nume: "Chiftelute cu mozzarella"
    })
    .forEach(function(r) {
            db.plan.update({
                    saptamana: 21,
                    an: 2015
                }, {
                    $addToSet: {
                        zile: {
                            index: 6, //Sambata
                            nume: "Sambata",
                            abreviatie: "E",
                            retete: r,
                            categorie: "Fel principal",
                            etichete: ["carne tocata"],
                            pinterest_url: "https://www.pinterest.com/pin/547257792196793274/"
                        }
                    }
                }

            );

    });

db.retete.find({
        nume: "Tocanita de miel cu couscous"
    })
    .forEach(function(r) {
            db.plan.update({
                    saptamana: 21,
                    an: 2015
                }, {
                    $addToSet: {
                        zile: {
                            index: 7, //Duminica
                            nume: "Duminica",
                            abreviatie: "F",
                            retete: r,
                            categorie: "Fel principal",
                            etichete: ["miel"],
                            pinterest_url: "https://www.pinterest.com/pin/547257792196793209/"
                        }
                    }
                }

            );

    });

print("Added Plan 21/2015");