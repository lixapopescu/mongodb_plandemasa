db.plan.aggregate({
    $unwind: "$zile"
}, {
    $unwind: "$zile.retete.ingrediente"
}, {
    $match: {
        saptamana: 19
    }
}, {
    $group: {
        "_id": {
            categorie: "$zile.retete.ingrediente.categorie",
            nume_ingred: "$zile.retete.ingrediente.nume",
            um: "$zile.retete.ingrediente.um"
        },
        ingred: {
            $push: "$zile.retete.ingrediente"
        }
    }
});