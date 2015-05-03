[
    categorie: {
        nume: "...",
        ingrediente: [{
            nume: "...",
            comentariu: [],
            cantitate: $sum(),
            um: "",
            reteta_abreviatie: ["A", "B"],
            zi_index: [1,4]
        }]
    }
];

//group by categorienume, cantitate




//rezultat dorit
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
            count: {
                $sum: 1
            }
        }
    }

);

db.plan.aggregate({
        $unwind: "$zile"
    }, {
        $match: {
            saptamana: 19
        }
    }, {
        $group: {
            "_id": "$zile.retete.ingrediente.categorie",
            count: {
                $sum: 1
            }
        }
    }

);
