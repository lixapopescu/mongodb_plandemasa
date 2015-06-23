db.recipes.find({
    _id: "Salata greceasca"
}).forEach(function(r) {
    db.planning.insert({
        username: "website",
        date: new Date('Jun 22, 2015'),
        recipe: r
    })
});

db.recipes.find({
    _id: "Pui cu orez si mazare"
}).forEach(function(r) {
    db.planning.insert({
        username: "website",
        date: new Date('Jun 23, 2015'),
        recipe: r
    })
});

db.recipes.find({
    _id: "Salata nicoise"
}).forEach(function(r) {
    db.planning.insert({
        username: "website",
        date: new Date('Jun 24, 2015'),
        recipe: r
    })
});

db.recipes.find({
    _id: "Cotlet de miel cu sos racoritor de busioc, la gratar"
}).forEach(function(r) {
    db.planning.insert({
        username: "website",
        date: new Date('Jun 25, 2015'),
        recipe: r
    })
});

db.recipes.find({
    _id: "Salata de pastrav afumat cu cartofi noi"
}).forEach(function(r) {
    db.planning.insert({
        username: "website",
        date: new Date('Jun 27, 2015'),
        recipe: r
    })
});

db.recipes.find({
    _id: "Paste cu sos pesto"
}).forEach(function(r) {
    db.planning.insert({
        username: "website",
        date: new Date('Jun 28, 2015'),
        recipe: r
    })
});

db.recipes.find({
    _id: "Pachetele de pui cu mozzarella"
}).forEach(function(r) {
    db.planning.insert({
        username: "website",
        date: new Date('Jun 29, 2015'),
        recipe: r
    })
});

db.recipes.find({
    _id: "Pui manastiresc"
}).forEach(function(r) {
    db.planning.insert({
        username: "website",
        date: new Date('Jun 30, 2015'),
        recipe: r
    })
});

db.recipes.find({
    _id: "Crap la cuptor cu salata de fasole verde"
}).forEach(function(r) {
    db.planning.insert({
        username: "website",
        date: new Date('Jun 31, 2015'),
        recipe: r
    })
});

