db.plan.remove({
    saptamana: 23,
    an: 2015
});
print("Removed Plan 23/2015");

db.retete.find({
        nume: "Salata greceasca"
    })
    .forEach(function(r) {
        db.plan.insert({
            nume: "Plan #23/2015",
            saptamana: 23,
            prima_zi: new Date('Jun 1, 2015'),
            ultima_zi: new Date('Jun 7, 2015'),
            an: 2015,
            pinterest_url: "https://www.pinterest.com/plandemasa/plan-23-2015/",
            zile: [{
                index: 1, //Luni
                nume: "Luni",
                abreviatie: "A",
                retete: r,
                categorie: "Fel principal",
                pinterest_url: "https://www.pinterest.com/pin/547257792196915470/"
            }]
        });

    });

db.retete.find({
        nume: "Salata nicoise"
    })
    .forEach(function(r) {
        db.plan.update({
            saptamana: 23,
            an: 2015
        }, {
            $addToSet: {
                zile: {
                    index: 2,
                    nume: "Marti",
                    abreviatie: "B",
                    retete: r,
                    categorie: "Fel principal",
                    pinterest_url: "https://www.pinterest.com/pin/547257792196915462/"
                }
            }
        });
    });
db.retete.find({
        nume: "Pui cu orez si mazare"
    })
    .forEach(function(r) {
        db.plan.update({
            saptamana: 23,
            an: 2015
        }, {
            $addToSet: {
                zile: {
                    index: 3,
                    nume: "Miercuri",
                    abreviatie: "C",
                    retete: r,
                    categorie: "Fel principal",
                    pinterest_url: "https://www.pinterest.com/pin/547257792196915373/"
                }
            }
        });
    });

db.retete.find({
        nume: "Pui cu rozmarin si usturoi + salata de castraveti"
    })
    .forEach(function(r) {
        db.plan.update({
            saptamana: 23,
            an: 2015
        }, {
            $addToSet: {
                zile: {
                    index: 4,
                    nume: "Joi",
                    abreviatie: "D",
                    retete: r,
                    categorie: "Fel principal",
                    pinterest_url: "https://www.pinterest.com/pin/547257792196915342/"
                }
            }
        });
    });

db.retete.find({
        nume: "Pui manastiresc"
    })
    .forEach(function(r) {
        db.plan.update({
            saptamana: 23,
            an: 2015
        }, {
            $addToSet: {
                zile: {
                    index: 6,
                    nume: "Sambata",
                    abreviatie: "E",
                    retete: r,
                    categorie: "Fel principal",
                    pinterest_url: "https://www.pinterest.com/pin/547257792196915293/"
                }
            }
        });
    });

db.retete.find({
        nume: "Salata de paste, cu rosii si masline"
    })
    .forEach(function(r) {
        db.plan.update({
            saptamana: 23,
            an: 2015
        }, {
            $addToSet: {
                zile: {
                    index: 7,
                    nume: "Duminica",
                    abreviatie: "F",
                    retete: r,
                    categorie: "Fel principal",
                    pinterest_url: "https://www.pinterest.com/pin/547257792196915275/"
                }
            }
        });
    });

