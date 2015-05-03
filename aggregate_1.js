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
});
