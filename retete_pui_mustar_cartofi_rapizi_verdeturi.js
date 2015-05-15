var numeReteta = "Pui cu mustar, cartofi rapizi si verdeturi";

db.retete.remove({nume: numeReteta});
print("Removed ", numeReteta);

db.retete.insert({
    nume: "Pui cu mustar, cartofi rapizi si verdeturi",
    origine_url: "http://www.jamieoliver.com/recipes/chicken-recipes/mustard-chicken-quick-dauphinoise-greens-black-forest-affogato/",
    origine_limba: "en",
    origine: "www.jamieoliver.com",
    origine_carte: "Jamie's 30-Minute Meals Recipe",
    etichete: ["pui", "mustar", "cartofi", "piept de pui", "30 minute", "praz"],
    poza: "http://s3-eu-west-1.amazonaws.com/jamieoliverprod/_int/rdb2/upload/352_1_1349701358_lrg.jpg",
    persoane: 6,
    timp: 30,
    nivel: 2,
    limba: "ro",
    nutritie: [{
        calorii: 923,
        carbohidrati: 47.8,
        zahar: 16.3,
        grasimi: 49,
        grasimi_saturate: 15.1,
        proteine: 38.5
    }],
    ingrediente: [{
            pentru: "Cartofi gratinati",
            lista: [{
                nume: "ceapa rosie",
                cantitate: 1,
                um: "buc.",
                categorie: "legume"
            }, {
                nume: "cartofi",
                cantitate: 1,
                um: "kg",
                categorie: "legume"
            }, {
                nume: "nuscoara",
                cantitate: 1,
                um: "buc.",
                categorie: "condimente"
            }, {
                nume: "usturoi",
                cantitate: 2,
                um: "cat.",
                categorie: "condimente"
            }, {
                nume: "smantana",
                cantitate: 225,
                um: "g",
                categorie: "lactate"
            }, {
                nume: "ansoa",
                cantitate: 4,
                um: "buc.",
                categorie: "condimente",
                comentariu: "in ulei"
            }, {
                nume: "parmezan",
                cantitate: 80,
                um: "g",
                categorie: "lactate"
            }, {
                nume: "frunze de dafin",
                cantitate: 2,
                um: "buc.",
                categorie: "condimente"
            }, {
                nume: "cimbru",
                cantitate: 1,
                um: "leg.",
                categorie: "condimente"
            }]
        }, {
            pentru: "asezonare",
            lista: [{
                nume: "ulei de masline",
                categorie: "alte"
            }, {
                nume: "grasime de gatit",
                categorie: "alte"
            }, {
                nume: "sare de mare",
                categorie: "condimente"
            }, {
                nume: "piper proaspat macinat",
                categorie: "condimente"
            }]
        }, {
            pentru: "pui",
            lista: [{
                nume: "rozmarin",
                cantitate: 2,
                um: "tije",
                categorie: "condimente"
            }, {
                nume: "piept de pui",
                cantitate: 4,
                um: "buc.",
                categorie: "carne",
                comentariu: "cu piele"
            }, {
                nume: "mustar macinat",
                cantitate: 4,
                um: "Lg.",
                categorie: "condimente"
            }, {
                nume: "praz",
                cantitate: 3,
                um: "buc.",
                categorie: "legume",
                comentariu: "mici, sau 1 mare"
            }, {
                nume: "usturoi",
                cantitate: 4,
                um: "cat.",
                categorie: "condimente"
            }, {
                nume: "vin alb",
                cantitate: 100,
                um: "ml",
                categorie: "alte"
            }, {
                nume: "smantana",
                cantitate: 75,
                um: "ml",
                categorie: "lactate"
            }, {
                nume: "mustar",
                cantitate: 1,
                um: "lg",
                categorie: "condimente",
                comentariu: "1 lg cu varf, mustar cu boabe"
            }]
        }, {
            pentru: "verdeturi",
            lista: [{
                nume: "frunze de sfecla",
                cantitate: 200,
                um: "g",
                categorie: "legume",
                comentariu: "Swiss Chard"
            }, {
                nume: "spanac mic",
                cantitate: 200,
                um: "g",
                categorie: "legume"
            }, {
                nume: "lamaie",
                cantitate: 1,
                um: "buc.",
                categorie: "fructe"
            }]
        }

    ],
    instructiuni: [{
        ordine: 1,
        text: "Pregateste toate ingredientele si echipamentul. Pune o oala medie si o tigaie (care merge si la cuptor) la foc mic. Pune discul de taiat gros la robot. Porneste cuptorul la 220°C (foc mare). Umple fierbatorul cu apa si porneste-l."
    }, {
        ordine: 2,
        pentru: "gratin",
        text: "Curata si taie in jumatate ceapa. Spala cartofii si eventual curata-i. Taie-i, impreuna cu ceapa, la robot. Pune totul intr-o tava inalta, pentru cuptor (aprox 25x35cm) si asezoneaza. Rade jumatate de nucsoara, zdrobeste 2 capatani de usturoi (cu coaja) si toarna smantana. Rupe ansoa si rade fin jumatate din parmezan deasupra. Adauga frunzele de dafin, frunzele de cimbru si un pic de grasime de gatit. Cu mainile curate, amesteca totul, si pune tava pe foc mediu. Adauga 200ml apa filtrata si acopera etans (cu folie sau capac)."
    }, {
        ordine: 3,
        pentru: "pui",
        text: "La tigaie, da focul la mediu. Taie fin frunzele de rozmarin si imprastie-le peste pui. Adauga 1 lg. de mustar macinat peste ficare piept de pui, asezoneaza si freaca/toarna usor niste grasime de gatit. Maseaza toate aromele in carne. Pune pieptul de pui in tigaie, cu pielea in jos. Spala-te bine pe maini. Cu o paleta mare, apasa deasupra pieptul de pui in tigaie sa-l ajuti sa se faca mai rapid. Pieptul e gata cam in 18 min."
    }, {
        ordine: 4,
        pentru: "gratin",
        text: "Zgaltaie tava, ca sa nu se prinda nimic."
    }, {
        ordine: 5,
        pentru: "verdeturi",
        text: "Ca sa se gateasca usor, taie fin tijele. Spala frunzele. Punele tijele in oala, adauga apa clocotita din fierbator, un pic de sare si pune capacul."
    }, {
        ordine: 6,
        pentru: "gratin",
        text: "Scoate folia/capacul. Rade usor un strat de parmezan peste. Pune ce a mai ramas din frunzele de cimbru si baga la cuptor pe raftul de sus pentru 15 min, sau pana cand devine auriu."
    }, {
        ordine: 7,
        pentru: "pui",
        text: "Taie rapid prazul si pune-l intr-o parte a tavii cu pui."
    }, {
        ordine: 8,
        pentru: "gratin",
        text: "Pune frunzele in oala. Mai adauga un pic de apa, daca e nevoie."
    }, {
        ordine: 9,
        pentru: "pui",
        text: "Zdrobeste 4 catei de usturoi, cu tot cu coaja, peste pui. Intoarce pieptul de pui cu pielea in sus si apasa din nou peste ei. Amesteca prazul si varsa vinul alb."
    }, {
        ordine: 10,
        etichete: "verdeturi",
        text: "Pune spanacul intr-o strecuratoare si toarna verdeturile si apa clocotita peste spanac. Pune un pic de ulei de masline in oala acum goala, adauga sucul de la 1 lamaie. Aseaza toate verdeturile strecurate si amesteca-le, folosind un cleste de bucatarie. Asezoneaza dupa gust si du direct la masa."
    }, {
        ordine: 11,
        pentru: "pui",
        text: "Verifica daca puiul este gatit de tot, apoi adauga 75ml smantana in tigaie. Pune capacul. Verifica repede gratinul."
    }, {
        ordine: 12,
        pentru: "alte",
        text: "Incepe sa strangi de pe masa de lucru."
    }, {
        ordine: 13,
        pentru: "pui",
        text: "In 5 minute, inchide focul. Transfera pieptul de pui pe un fund si taie in felii, pe diagonala. Amesteca 1lg cu varf mustar in sos, asezoneaza daca simti nevoia. Pune sosul pe un platou si puiul deasupra. Stropeste cu un pic de ulei de masline si du la masa."
    }, {
        ordine: 14,
        pentru: "gratin",
        text: "Du la masa. Pofta buna!"
    }]
});

print("Added new ", numeReteta);