db.plan.remove({
    saptamana: 22,
    an: 2015
});
print("Removed Plan 22/2015");

db.retete.find({
        nume: "Pastai cu usturoi"
    })
    .forEach(function(r) {
        db.plan.insert({
            nume: "Plan #22/2015",
            saptamana: 22,
            prima_zi: new Date('May 25, 2015'),
            ultima_zi: new Date('May 31, 2015'),
            an: 2015,
            pinterest_url: "https://www.pinterest.com/plandemasa/plan-22-2015/",
            zile: [{
                index: 1, //Luni
                nume: "Luni",
                abreviatie: "A",
                retete: r,
                categorie: "Fel principal",
                pinterest_url: "https://www.pinterest.com/pin/547257792196863440/"
            }]
        });

    });

db.retete.find({
        nume: "Dorada la cuptor cu salada verde"
    })
    .forEach(function(r) {
        db.plan.update({
            saptamana: 22,
            an: 2015
        }, {
            $addToSet: {
                zile: {
                    index: 2, //Marti
                    nume: "Marti",
                    abreviatie: "B",
                    retete: r,
                    categorie: "Fel principal",
                    pinterest_url: "https://www.pinterest.com/pin/547257792196868130/"
                }
            }
        });
    });


db.retete.find({
        nume: "Crap la cuptor cu salata de fasole verde"
    })
    .forEach(function(r) {
        db.plan.update({
            saptamana: 22,
            an: 2015
        }, {
            $addToSet: {
                zile: {
                    index: 3,
                    nume: "Miercuri",
                    abreviatie: "C",
                    retete: r,
                    categorie: "Fel principal",
                    pinterest_url: "https://www.pinterest.com/pin/547257792196863385/"
                }
            }
        });
    });

db.retete.find({
        nume: "Tocanita de pui cu ghimbir"
    })
    .forEach(function(r) {
        db.plan.update({
            saptamana: 22,
            an: 2015
        }, {
            $addToSet: {
                zile: {
                    index: 4, //Joi
                    nume: "Joi",
                    abreviatie: "D",
                    retete: r,
                    categorie: "Fel principal",
                    pinterest_url: "https://www.pinterest.com/pin/547257792196863372/"
                }
            }
        });
    });

db.retete.find({
        nume: "Hamburger de peste, cu sos tartar si salata"
    })
    .forEach(function(r) {
        db.plan.update({
            saptamana: 22,
            an: 2015
        }, {
            $addToSet: {
                zile: {
                    index: 6,
                    nume: "Sambata",
                    abreviatie: "E",
                    retete: r,
                    categorie: "Fel principal",
                    pinterest_url: "https://www.pinterest.com/pin/547257792196863372/",
                    indicatii: [{
                        keyword: "marinat",
                        comentariu: "Prepara ciupercile pentru maine si lasa-le la marinat peste noapte"
                    },{
                        keyword: "marinat",
                        comentariu: "Pregateste rulada marinata pentru maine."
                    }]

                }
            }
        });
    });

db.retete.find({
        nume: "Rulada de pui cu unt si usturoi + ciuperci marinate"
    })
    .forEach(function(r) {
        db.plan.update({
            saptamana: 22,
            an: 2015
        }, {
            $addToSet: {
                zile: {
                    index: 7,
                    nume: "Duminica",
                    abreviatie: "F",
                    retete: r,
                    categorie: "Fel principal",
                    pinterest_url: "https://www.pinterest.com/pin/547257792196863266/"
                }
            }
        });
    });
