//migrate

var user_migrate = "migrate";
var username_website = "website";

print("Delete all new");
db.recipes.remove({});
db.fixed_planning.remove({});
db.planning.remove({});
db.fixed_planning.remove({});
db.users.remove({});
db.calendar.remove({});
db.rules_global.remove({});
db.rules_daily.remove({});

print("Insert into 'recipes'...........")
db.retete.find().forEach(function(r) {
    print(r.nume);
    db.recipes.insert({
        _id: r.nume,
        origin: {
            url: r.origine_url,
            language: r.origine_limba,
            image: r.poza,
            copyright: r.origine
        },
        labels: r.etichete,
        dish_labels: ["fel-principal"],
        persons: r.persoane,
        time: r.timp,
        level: r.nivel,
        language: "ro",
        ingredients: [],
        // ingredients: r.ingrediente,
        // "ingredients.for": r.ingrediente.pentru,
        // instructions: r.instructiuni,
        created: {
            user: user_migrate,
            date: new Date()
        },
        modified: {
            user: user_migrate,
            date: new Date()
        }
    });

    for (i in r.ingrediente) {
        var ingred = {};
        ingred.for_what = r.ingrediente[i].pentru;
        // print("*", ingred.for_what);
        ingred.list = [];
        for (j in r.ingrediente[i].lista) {
            ingred.list.push({
                name: r.ingrediente[i].lista[j].nume,
                quantity: r.ingrediente[i].lista[j].cantitate,
                um: r.ingrediente[i].lista[j].um,
                category: r.ingrediente[i].lista[j].categorie,
                comment: r.ingrediente[i].lista[j].comentariu
            });
        }
        // print("after", JSON.stringify(ingred, null, 2));
        db.recipes.update({
            _id: r.nume,
        }, {
            $addToSet: {
                ingredients: ingred
            }

        });
    };


    for (i in r.instructiuni) {
        db.recipes.update({
            _id: r.nume
        }, {
            $addToSet: {
                instructions: {
                    order: r.instructiuni[i].ordine,
                    for_what: r.instructiuni[i].pentru,
                    text: r.instructiuni[i].text
                }
            }
        })
    }
});

print("Insert into 'planning'...........")
db.plan.find().forEach(function(p) {
    print(p.nume);

    var end_date = new Date(p.prima_zi.getTime() + 6 * 86400000);
    db.fixed_planning.insert({
        username: username_website,
        name: p.nume,
        start_date: p.prima_zi,
        // start_date: {
        //     year: p.prima_zi.getFullYear(),
        //     month: p.prima_zi.getMonth() + 1,
        //     day: p.prima_zi.getDate()
        // },
        end_date: end_date,
        // end_date: {
        //     year: end_date.getFullYear(),
        //     month: end_date.getMonth() + 1,
        //     day: end_date.getDate()
        // },
        pinterest_url: p.pinterest_url,
        created: {
            user: user_migrate,
            date: new Date()
        },
        modified: {
            user: user_migrate,
            date: new Date()
        }
    });

    p.zile.forEach(function(z) {
        var d = new Date(p.prima_zi.getTime() + (z.index - 1) * 86400000);
        var recipe = db.recipes.findOne({_id: z.retete.nume});
        db.planning.insert({
            username: username_website,
            date: d,
            // date: {
            //     year: d.getFullYear(),
            //     month: d.getMonth() + 1,
            //     day: d.getDate()
            // },
            recipe: recipe
        });

        // var plan_inserted = db.planning.findOne({
        //     "date.year": d.getFullYear(),
        //     "date.month": d.getMonth() + 1,
        //     "date.day": d.getDate()
        // });
        var plan_inserted = db.planning.findOne({
            date: d
        });
        print("id", plan_inserted._id);

        db.fixed_planning.update({
            name: p.nume
        }, {
            $addToSet: {
                days: {
                    index: z.index - 1,
                    abbrev: z.abreviatie,
                    // daily_planning: plan_inserted._id,
                    daily_planning: plan_inserted,
                    pinterest_url: z.pinterest_url
                }
            },
            $set: {
                modified: {
                    user: user_migrate,
                    date: new Date()
                }
            }
        });
    });
});

db.users.insert({
    name: "Website user",
    _id: "website" //=username
})

// db.recipes.find().pretty();
