db.fixed_planning.aggregate({
            $match: {
                start_date: new Date(2015, 4, 25)
            }
        }, {
            $unwind: "$days"
        }, {
            $project: {
                reteta_nume: "$days.daily_planning.recipe._id",
                zi_index: "$days.index",
                abreviatie: "$days.abbrev",
                pinterest_url: "$days.pinterest_url"
            }
        }, {
            $match: {
                reteta_nume: "Rulada de pui cu unt si usturoi + ciuperci marinate"
            }
        })