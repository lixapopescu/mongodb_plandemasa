[
    categorie: {
        nume: "...",
        ingrediente: {
            nume: "...",
            comentariu: [],
            cantitate: $sum(),
            um: "",
            reteta_abreviatie: "A",
            zi_index: 1
        }
    }
];

//group by categorienume, cantitate




//rezultat dorit
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
            count: {
                $sum: 1
            }
        }
    }

);