db.retete.find({
        nume: "Placinta cu spanac si feta"
    })
    .forEach(function(r) {
        db.plan.insert({
            nume: "Plan #19",
            saptamana: 19,
            prima_zi: new Date('May 4, 2015'),
            ultima_zi: new Date('May 11, 2015'),
            an: "2015",
            zile: [{
                index: 1, //Luni
                abreviatie: "A",
                reteta: r,
                categorie: "Fel principal"
            }]
        });

    });

db.retete.find({
        nume: "Salata de sfecla cu feta"
    })
    .forEach(function(r) {
            db.plan.update({
                    saptamana: 19
                }, {
                    $addToSet: {
                        zile: {
                            index: 4, //Joi
                            abreviatie: "E",
                            reteta: r,
                            categorie: "Garnitura"
                        }
                    }
                }

            );

    });
