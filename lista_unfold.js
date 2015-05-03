db.plan.aggregate({
        $unwind: "$zile"
    }, {
        $unwind: "$zile.retete.ingrediente"
    }, {
        $match: {
            saptamana: 19
        }
    },
    //unfold with no children
    {
        $project: {
            nume: "$zile.retete.ingrediente.nume",
            cant: "$zile.retete.ingrediente.cantitate",
            um: "$zile.retete.ingrediente.um",
            comentariu: "$zile.retete.ingrediente.comentariu",
            categorie: "$zile.retete.ingrediente.categorie",
            reteta_abrev: "$zile.abreviatie",
            zi_index: "$zile.index"
        }
    }, 
    //group by categorie, nume, um
    {
        $group: { 
            "_id": {
                cat: "$categorie",
                ing: "$nume",
                um: "$um"
            },
            //comentarii: {$push: "$comentariu"},
            reteta_abrev: {
                $push: "$reteta_abrev"
            },
            tot: {
                $sum: "$cant"
            }
        }
    }, 
    //replace "_id" with it's children
    {
        $project: {
            "_id": false,
            categorie: "$_id.cat",
            ingredient: "$_id.ing",
            total: "$tot",
            um: "$_id.um",
            reteta_abrev: "$reteta_abrev"
        }
    }, 
    //finally, group by main criteria, "$categorie"
    //and make custom element
    {
        $group: {
            "_id": "$categorie",
            ingrediente: {
                $push: {
                    "nume": "$ingredient",
                    "total": "$total",
                    "um": "$um",
                    "reteta_abrev": "$reteta_abrev"
                }
            }
        }
    });
