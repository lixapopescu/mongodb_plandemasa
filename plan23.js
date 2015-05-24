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

// db.retete.find({
//         nume: "Crap la cuptor cu salata de fasole verde"
//     })
//     .forEach(function(r) {
//         db.plan.update({
//             saptamana: 22,
//             an: 2015
//         }, {
//             $addToSet: {
//                 zile: {
//                     index: 3,
//                     nume: "Miercuri",
//                     abreviatie: "C",
//                     retete: r,
//                     categorie: "Fel principal",
//                     pinterest_url: "https://www.pinterest.com/pin/547257792196863385/"
//                 }
//             }
//         });
//     });

