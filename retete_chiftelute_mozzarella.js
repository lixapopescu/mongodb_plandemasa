var numeReteta = "Chiftelute cu mozzarella";

db.retete.remove({nume: numeReteta});
print("Removed ", numeReteta);

db.retete.insert({
    nume: numeReteta,
    origine_url: "http://www.timkemp.com/recipes/entree/jamiemeatball.htm",
    origine_url_2: "http://recipecircus.com/recipes/carolyn/PASTA/Jamie_Oliver39s_Basic_Tomato_Sauce.html",
    origine_limba: "en",
    origine: "The Naked Chef",
    etichete: ["carne tocata", "sos de rosii", "mozzarella"],
    origine_poza: "http://img.sndimg.com/food/image/upload/w_614,h_461,c_fit/v1/img/recipes/43/06/95/piczaAZeh.jpg",
    poza: "/assets/images/recipes/chiftelute_sos_rosii_mozzarella_parmezan.jpg",
    persoane: 4,
    nivel: 1,
    limba: "ro",
    ingrediente: [{
        pentru: "chiftelute",
        lista: [{
            nume: "carne tocata",
            cantitate: 800,
            um: "g",
            categorie: "carne"
        }, {
            nume: "morcov",
            cantitate: 3,
            um: "buc",
            categorie: "legume"
        }, {
            nume: "dovlecel",
            cantitate: 1,
            um: "buc",
            categorie: "legume"
        }, {
            nume: "oua",
            cantitate: 3,
            um: "buc",
            categorie: "alte"
        }, {
            nume: "oregano",
            cantitate: 2,
            um: "Lg",
            categorie: "condimente",
            comentariu: "uscat"
        }, {
            nume: "chimen",
            cantitate: 0.5,
            um: "lg",
            categorie: "condimente",
            comentariu: "macinat"
        }, {
            nume: "chilli",
            cantitate: 0.5,
            um: "buc",
            categorie: "condimente",
            comentariu: "mic, optional"
        }, {
            nume: "rozmarin",
            cantitate: 1,
            um: "creng",
            categorie: "condimente",
            comentariu: "tocat fin"
        }, {
            nume: "sare de mare",
            categorie: "condimente"
        }, {
            nume: "piper proaspat macinat",
            categorie: "condimente"
        }, {
            nume: "grasime de gatit",
            categorie: "alte"
        }, {
            nume: "busuioc",
            cantitate: 1,
            um: "leg",
            categorie: "condimente",
            comentariu: "tocat sau rupt"
        }, {
            nume: "mozzarella",
            cantitate: 60,
            um: "g",
            categorie: "lactate"
        }, {
            nume: "parmezan",
            cantitate: 60,
            um: "g",
            categorie: "lactate"
        }, {
            nume: "ceapa",
            cantitate: 1,
            um: "buc",
            categorie: "legume"
        }, {
            nume: "usturoi",
            cantitate: 1,
            um: "cat",
            categorie: "condimente"
        }, {
            nume: "mustar",
            cantitate: 1,
            um: "lg",
            categorie: "condimente",
            comentariu: "optional"
        }]
    }, {
        pentru: "sos",
        lista: [{
            nume: "usturoi",
            cantitate: 1,
            um: "cat",
            categorie: "condimente"
        }, {
            nume: "grasime de gatit",
            categorie: "alte"
        }, {
            nume: "chilli",
            cantitate: 1,
            um: "buc",
            categorie: "condimente",
            comentariu: "mic"
        }, {
            nume: "oregano",
            cantitate: 2,
            um: "lg",
            categorie: "condimente",
            comentariu: "uscat"
        }, {
            nume: "sos de rosii",
            cantitate: 800,
            um: "g",
            categorie: "alte"
        }, {
            nume: "otet rosu",
            cantitate: 1,
            um: "Lg",
            categorie: "alte"
        }, {
            nume: "busuioc",
            cantitate: 1,
            um: "leg",
            categorie: "condimente",
            comentariu: "sau maghiran"
        }, {
            nume: "sare de mare",
            categorie: "condimente"
        }, {
            nume: "piper proaspat macinat",
            categorie: "condimente"
        }, {
            nume: "ulei de masline",
            cantitate: 2,
            um: "Lg",
            categorie: "alte"
        }]
    }],
    instructiuni: [{
        ordine: 1,
        pentru: "chiftelute",
        text: "Da drumul la cuptor la 220°C. "
    }, {
        ordine: 2,
        pentru: "chiftelute",
        text: "Toaca marunt, la robot, ceapa, morcovii, dovlecelul si usturoiul. Pune-le in tigaie la calit, cu capacul peste"
    }, {
        ordine: 3,
        pentru: "chiftelute",
        text: "Intr-un bol mare, pune carnea tocata, ouale, sare si piper si condimentele"
    }, {
        ordine: 4,
        pentru: "sos",
        text: "Intr-o tigaie cu fundul gros, caleste usturoiul, apoi adauga chilli si sosul de rosii. Adu la fierbere si lasa la foc mic sa bolboroseasca cel putin jumatate de ora"
    }, {
        ordine: 5,
        pentru: "chiftelute",
        text: "Cand legumele sunt calite, pune-le si pe ele in bol si amesteca totul omogen"
    }, {
        ordine: 6,
        pentru: "chiftelute",
        text: "Formeaza bule din amestec si pune-le intr-o tava, la cuptor"
    }, {
        ordine: 7,
        pentru: "alte",
        text: "Incepe sa strangi pe masa de lucru"
    }, {
        ordine: 8,
        pentru: "sos",
        text: "Cand e sosul gata, adauga busuic (si maghiran), adauga otetul, uleiul de masline si pune sare si piper dupa gust",
    }, {
        ordine: 9,
        pentru: "chiftelute",
        text: "Cam peste 10-15 min, chiftelutele sunt gata. Da cuptorul la 200°C. Pune-le intr-o tava mai inalta, toarna peste sosul, apoi mozzarella rupta in bucati si parmezanul ras. Pune totul la cuptor pentru 10-15 min, pana cand parmezanul e auriu"
    }]
});

print("Added new ", numeReteta);