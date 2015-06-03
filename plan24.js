db.recipes.find({
    _id: "Mazare cremoasa cu pui, bacon si ciuperci"
}).forEach(function(r) {
    db.planning.insert({
        username: "website",
        date: new Date('Jun 8, 2015'),
        recipe: r
    })
});

db.recipes.find({
    _id: "Paste cu sos pesto"
}).forEach(function(r) {
    db.planning.insert({
        username: "website",
        date: new Date('Jun 9, 2015'),
        recipe: r
    })
});

db.planning.find({
    date: new Date('Jun 8, 2015')
}).forEach(function(p) {
    db.fixed_planning.insert({
        username: "website",
        name: "Plan #24 / 2015",
        start_date: new Date('Jun 8, 2015'),
        end_date: new Date('Jun 14, 2015'),
        pinterest_url: "https://www.pinterest.com/plandemasa/plan-24-2015/",
        created: {
            user: "website",
            date: new Date()
        },
        days: [{
            index: 0,
            abbrev: 'A',
            pinterest_url: 'https://www.pinterest.com/pin/547257792197024032/',
            daily_planning: p
        }]
    });
});


db.planning.find({
        date: new Date('Jun 9, 2015')
    })
    .forEach(function(p) {
        db.fixed_planning.update({
            start_date: new Date('Jun 8, 2015'),
            end_date: new Date('Jun 14, 2015'),
        }, {
            $addToSet: {
                days: {
                    index: 1,
                    abbrev: 'B',
                    pinterest_url: 'https://www.pinterest.com/pin/547257792197023517/',
                    daily_planning: p
                }
            }
        });
    });

db.planning.find({
        date: new Date('Jun 10, 2015')
    })
    .forEach(function(p) {

                db.fixed_planning.update({
                    _id: fixed_plan._id
                }, {
                    $addToSet: {
                        days: {
                            index: 2,
                            abbrev: 'C',
                            pinterest_url: 'https://www.pinterest.com/pin/547257792197023460/',
                            daily_planning: p
                        }
                    }
                })
            });

    
db.planning.find({
        date: new Date('Jun 11, 2015')
    })
    .forEach(function(p) {

                db.fixed_planning.update({
                    _id: fixed_plan._id
                }, {
                    $addToSet: {
                        days: {
                            index: 3,
                            abbrev: 'D',
                            pinterest_url: 'https://www.pinterest.com/pin/547257792197023460/',
                            daily_planning: p
                        }
                    }
                })
            });

