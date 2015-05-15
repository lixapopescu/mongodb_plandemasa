var numeReteta = "Perisoare cu sos de rosii";

db.retete.remove({nume: numeReteta});
print("Removed ", numeReteta);

db.retete.insert({
    nume: numeReteta,
    origine_url: "http://www.dulciurifeldefel.ro/perisoare-cu-sos-de-rosii/",
    origine_limba: "ro",
    origine: "http://www.dulciurifeldefel.ro/",
    etichete: ["carne tocata", "sos rosii"],
    poza: "http://3.bp.blogspot.com/-VMT7e2oPHKU/T2m2RARXhnI/AAAAAAAAKGY/GzBtHmgrHMQ/s1600/perisoare+in+sos+de+rosii.JPG",
    persoane: 4,
    nivel: 1,
    limba: "ro",
    ingrediente: [{
        pentru: "perisoare",
        lista: [{
            nume: "carne tocata",
            cantitate: 500,
            um: "g",
            categorie: "carne"
        }, {
            nume: "morcov",
            cantitate: 4,
            um: "buc",
            categorie: "legume",
            comentariu: "mai mari (sau echivalent)"
        }, {
            nume: "ou",
            cantitate: 3,
            um: "buc",
            categorie: "alte"
        }, {
            nume: "dovlecel",
            cantitate: 1,
            um: "buc",
            categorie: "legume",
            comentariu: "optional"
        }, {
            nume: "sare de mare",
            categorie: "condimente"
        }, {
            nume: "piper proaspat macinat",
            categorie: "condimente"
        }]
    }, {
        pentru: "sos",
        lista: [{
            nume: "ceapa",
            cantitate: 2,
            um: "buc",
            categorie: "legume"
        }, {
            nume: "ardei gras rosu",
            cantitate: 1,
            um: "buc",
            categorie: "legume"
        }, {
            nume: "usturoi",
            cantitate: 2,
            um: "cat",
            categorie: "condimente"
        }, {
            nume: "oregano",
            categorie: "condimente",
            cantitate: "1",
            um: "Lg",
            comentariu: "uscat"
        }, {
            nume: "busuioc",
            cantitate: 1,
            um: "leg",
            categorie: "condimente"
        }, {
            nume: "sos de rosii",
            cantitate: 800,
            um: "g",
            categorie: "alte"
        }, {
            nume: "grasime de gatit",
            categorie: "alte"
        }]
    }],
    instructiuni: [{
        ordine: 1,
        text: "Pune intr-o tigaie (mai inalta) un pic de grasime la incalzit. Intr-o oala mare, pune apa la fiert, cu sare"
    }, {
        ordine: 2,
        text: "Toaca marunt, la robot, 1 ceapa, morcovii (mai putin unul), dovlecelul si 1 catel de usturoi. Pune-le in tigaie la calit, cu capacul peste"
    }, {
        ordine: 3,
        text: "Intr-un bol mare, pune carnea tocata, ouale, sare si piper"
    }, {
        ordine: 4,
        text: "Cand legumele sunt calite, pune-le si pe ele in bol si amesteca totul omogen"
    }, {
        ordine: 5,
        text: "Pentru sos: In aceeasi tigaie (acum goala), pune grasime la incalzit. Toaca marunt, la robot, 1 ceapa, 1 morcov si ardeiul si pune-le la calit. Cand s-au inmuiat, adauga sosul de rosii, sare, busuioc si oregano. Si lasa la foc foarte mic"
    }, {
        ordine: 6,
        text: "Formeaza chiftelutele si pune-le in oala mare cu apa clocotita. Se fierb la foc mediu pana se ridica la suprafata"
    }, {
        ordine: 7,
        text: "Pune chiftelutele in sos si lasa-le pe foc 30 min sau pana cand ajunge la consistenta dorita"
    }]
});

print("Added new ", numeReteta);