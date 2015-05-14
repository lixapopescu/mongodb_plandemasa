db.retete.find({
        nume: "Salata de patrav afumat cu cartofi noi"
    })
    .forEach(function(r) {
        db.plan.insert({
            nume: "Plan #21/2015",
            saptamana: 21,
            prima_zi: new Date('May 18, 2015'),
            ultima_zi: new Date('May 24, 2015'),
            an: 2015,
            pinterest_url: "https://www.pinterest.com/plandemasa/plan-212005/",
            zile: [{
                index: 1, //Luni
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
