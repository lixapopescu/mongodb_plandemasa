var numeReteta = "Salata de sfecla cu feta";

db.retete.remove({nume: numeReteta});
print("Removed ", numeReteta);

db.retete.insert({
    nume: numeReteta,
    origine_carte: "Jamie at Home: Cook Your Way to the Good Life (Hyperion, 2008) by Jamie Oliver.",
    origine_url: "http://food52.com/recipes/14609-jamie-oliver-s-smoked-beets",
    origine_limba: "en",
    etichete: ["salata", "sfecla"],
    poza: "https://d2k9njawademcf.cloudfront.net/slides/6862/original/092711-food52-258.jpg?1317273655",
    persoane: 4,
    timp: 20,
    nivel: 1,
    limba: "ro",
    ingrediente: [{
        pentru: "salata",
        lista: [{
            nume: "sfecla",
            comentariu: "cu frunze, daca e posibil",
            cantitate: 8,
            um: "buc.",
            categorie: "legume"
        }, {
            nume: "rozmarin",
            comentariu: "proaspat",
            cantitate: 1,
            um: "tija",
            categorie: "condimente"
        }, {
            nume: "otet rosu",
            cantitate: 1,
            um: "Lg",
            categorie: "camara"
        }, {
            nume: "ulei de masline",
            categorie: "camara"
        }, {
            nume: "sare de mare",
            categorie: "camara"
        }, {
            nume: "piper proaspat macinat",
            categorie: "camara"
        }, {
            nume: "patrunjel",
            comentariu: "proaspat",
            cantitate: 1,
            um: "leg.",
            categorie: "condimente"
        }, {
            nume: "busuioc",
            comentariu: "proaspat",
            cantitate: 1,
            um: "leg.",
            categorie: "condimente"
        }, {
            nume: "branza",
            cantitate: 100,
            um: "g",
            categorie: "lactate"
        }, {
            nume: "lamaie",
            comentariu: "coaja si sucul",
            cantitate: 0.5,
            um: "buc.",
            categorie: "fructe"
        }, {
            nume: "cimbru",
            cantitate: 3,
            um: "tija",
            categorie: "condimente"
        }]
    }],
    instructiuni: [{
        ordine: 1,
        text: "First, light your charcoal barbecue or fire. Wash the beets and snip off the greens, reserving them. Fold a large piece of foil -- about 12-18\" (24-36\" unfolded), depending on the size of your beets -- in half to form a double layer. Lay the greens, then the beets, then the rosemary on top of the foil. (Note: if you don't have greens with your beets -- or want to save them to cook separately -- that's okay, just make sure the coals are at medium heat, not flaming, when you add your packet of beets.)"
    }, {
        ordine: 2,
        text: "Roll up the foil, folding in the edges and twisting the ends together. Stab the foil a few times all over with a knife to allow the smoke to get inside and flavor the beets. Lift the rack of your barbecue with tongs and carefully insert your foil package among the coals, making sure you place some coals on top too."
    }, {
        ordine: 3,
        text: "Leave it to cook for 30 to 40 minutes, or until the beets are tender, then remove the package and allow it to cool down. Unwrap it and remove the beets, discarding the greens and rosemary sprigs."
    }, {
        ordine: 4,
        text: "Once cooled slightly, peel the beets and discard the charred skin. The skins should slip right off, but if they don't, gently scrape them away with the back of a paring knife. Cut the beets into irregular chunks and place in a bowl. Add the vinegar, 3 tablespoons of extra virgin olive oil, plenty of salt and pepper and half the parsley and tarragon. Toss, have a taste and adjust the seasoning if necessary."
    }, {
        ordine: 5,
        text: "Put the cottage cheese into a bowl and add the juice and finely grated zest from half your lemon. Stir in 2 glugs of extra virgin olive oil, the thyme leaves and some salt and pepper and gently fold it all together, so the oil and lemon marble through the cottage cheese. Taste the dressing and squeeze in a bit more lemon juice if you like."
    }, {
        ordine: 6,
        text: "To serve, divide the dressed beets between four salad plates. Top each plate with a spoonful of cottage cheese dressing. Scatter over the remaining herbs and enjoy!"
    }]
});

print("Added new ", numeReteta);