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
        "_id": "$zile.retete.ingrediente.categorie",
        ingrediente: {
            $push: "$zile.retete.ingrediente"
        },
        retete_abrev: {
            $push: "$zile.abreviatie"
        },
        zile_index: {
            $push: "$zile.index"
        },
            "nume": {$push: "$zile.retete.ingrediente.nume"},
            "cant": {$push: "$zile.retete.ingrediente.cantitate"},
            "um": {$push: "$zile.retete.ingrediente.um"},
            "comentariu": {$push: "$zile.retete.ingrediente.comentariu"}
    }
},{
    $project: {
        nume_categorie: "$_id",
        agg: {
            nume_ingredient: "$nume",
            cantitate: "$cant",
            um: "$um",
            comentariu: "$comentariu",
            retete_abrev: "$retete_abrev",
            zile_index: "$zile_index"
        }
    }
});