db.fixed_planning.aggregate({
                $unwind: "$days"
            }, {
                $unwind: "$days.daily_planning.recipe.ingredients"
            }, {
                $unwind: "$days.daily_planning.recipe.ingredients.list"
            }, {
                $match: {
                    start_date: new Date(2015, 4, 25)
                }
            },
            //unfold with no children
            {
                $project: {
                    nume: "$days.daily_planning.recipe.ingredients.list.name",
                    cant: "$days.daily_planning.recipe.ingredients.list.quantity",
                    um: "$days.daily_planning.recipe.ingredients.list.um",
                    comentariu: "$days.daily_planning.recipe.ingredients.list.comment",
                    categorie: "$days.daily_planning.recipe.ingredients.list.category",
                    reteta_abrev: "$days.abbrev",
                    zi_index: "$days.index"
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
                        $addToSet: "$reteta_abrev" //distinct values only. if not => error in angular
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
            })
