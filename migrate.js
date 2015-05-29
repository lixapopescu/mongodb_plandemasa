//migrate

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
        name: r.nume,
        origin: {
            url: r.origine_url,
            language: r.origine_limba,
            image: r.poza,
            copyright: r.origine
        },
        story: "",
        labels: r.etichete,
        dish_labels: ["fel-principal"],
        persons: r.persoane,
        time: r.timp,
        level: r.nivel,
        language: "ro",
        ingredients: r.ingrediente,
        instructions: r.instructiuni
    })
});

print("Insert into 'planning'...........")
db.plan.find().forEach(function(p) {
    print(p.nume);

    var end_date = new Date(p.prima_zi.getTime() + 6 * 86400000);
    db.fixed_planning.insert({
        user_name: "public",
        name: p.nume,
        start_date: {
            year: p.prima_zi.getFullYear(),
            month: p.prima_zi.getMonth() + 1,
            day: p.prima_zi.getDate()
        },
        end_date: {
            year: end_date.getFullYear(),
            month: end_date.getMonth() + 1,
            day: end_date.getDate()
        },
        pinterest_url: p.pinterest_url
    });

    p.zile.forEach(function(z) {
        var d = new Date(p.prima_zi.getTime() + (z.index - 1) * 86400000);
        db.planning.insert({
            user_name: "public",
            date: {
                year: d.getFullYear(),
                month: d.getMonth() + 1,
                day: d.getDate()
            },
            recipe: z.retete
        });
        db.fixed_planning.update({
            name: p.nume
        }, {
        	$addToSet: {
        		days```````
        	}
        });
    });
});

db.recipes.find().pretty();