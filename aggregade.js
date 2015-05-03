db.plan.aggregate({
    $unwind: "$zile"
}, {
    $unwind: "$zile.reteta.ingrediente"
}, {
    $match: {
        saptamana: 19
    }
}, {
    $group: {
        "_id": "$zile.reteta.ingrediente.categorie",
        in_total: {
            $sum: 1
        },
        ingrediente_separate: {
            $addToSet: "$zile.reteta.ingrediente"
        }
    }
}, {
    $group: {
        "_id": "$ingrediente_separate.nume",
        t: {$sum: "$ingrediente_separate.cantitate"},
        ingrediente_separate: {$push: "$ingrediente_separate"},
        categorie: {$first: "$_id"}
    }
});
