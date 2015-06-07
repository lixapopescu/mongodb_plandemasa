db.planning.drop();
db.planning.insert(
{
    "_id" : ObjectId("5568d2ada19356e6aa41c068"),
    "username" : "website",
    "date" : ISODate("2015-06-06T00:00:00.000-22:00"),
    "recipe" : {
        "_id" : "Salata de paste, cu rosii si masline",
        "origin" : {
            "url" : "http://www.jamieoliver.com/recipes/pasta-recipes/the-best-pasta-salad/#SCV2QrWvZCgmchbx.97",
            "language" : "en",
            "image" : "http://s3-eu-west-1.amazonaws.com/jamieoliverprod/_int/rdb2/upload/603_1_1350912852_lrg.jpg",
            "copyright" : "JamieOliver.com"
        },
        "labels" : [ 
            "salata", 
            "paste"
        ],
        "dish_labels" : [ 
            "fel-principal"
        ],
        "persons" : 4,
        "time" : 15,
        "level" : 1,
        "language" : "ro",
        "ingredients" : [ 
            {
                "for_what" : "salata",
                "list" : [ 
                    {
                        "name" : "paste mici",
                        "quantity" : 300,
                        "um" : "g",
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "rosii mici",
                        "quantity" : 500,
                        "um" : "g",
                        "category" : "legume",
                        "comment" : "rosii si galbene"
                    }, 
                    {
                        "name" : "masline",
                        "quantity" : 100,
                        "um" : "g",
                        "category" : "condimente",
                        "comment" : "fara samburi"
                    }, 
                    {
                        "name" : "castraveti",
                        "quantity" : 3,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : undefined
                    }
                ]
            }, 
            {
                "for_what" : "sos",
                "list" : [ 
                    {
                        "name" : "arpagic",
                        "quantity" : 1,
                        "um" : "leg",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "busuioc",
                        "quantity" : 1,
                        "um" : "leg",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "usturoi",
                        "quantity" : 3,
                        "um" : "cat",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "otet alb",
                        "quantity" : 4,
                        "um" : "Lg",
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "ulei de masline",
                        "quantity" : 7,
                        "um" : "Lg",
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "sare de mare",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "piper proaspat macinat",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }
                ]
            }
        ],
        "created" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.967-22:00")
        },
        "modified" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.967-22:00")
        },
        "instructions" : [ 
            {
                "order" : 1,
                "for_what" : "paste",
                "text" : "Incalzeste apa in fierbator. Pune intr-o oala apa clocotita, pastele si usturoiul si fierba pana la 'al dente' (cu 2 min mai putin decat pe ambalaj). Strecoara si clateste cu apa rece. Pune deoparte usturoiul. Aseaza pastele in bolul de salata."
            }, 
            {
                "order" : 2,
                "for_what" : "salata",
                "text" : "Toaca rosiile, maslinele, arpagicul, busuiocul si castravetii in bucati cam jumatate din dimensiunea pastelor. Adauga-le in bol."
            }, 
            {
                "order" : 3,
                "for_what" : "sos",
                "text" : "Scoate usturoiul dinn coaja si zdrobeste-l intr-un mojar. Adauga uleiul, otetul, sare si piper si amesteca. Toarna peste salata."
            }
        ]
    }
}

); db.planning.insert(
{
    "_id" : ObjectId("556cd3c0e08c7b35ecbd9f97"),
    "username" : "website",
    "date" : ISODate("2015-06-07T00:00:00.000-22:00"),
    "recipe" : {
        "_id" : "Mazare cremoasa cu pui, bacon si ciuperci",
        "name" : "Mazare cremoasa cu pui, bacon si ciuperci",
        "origin" : {
            "language" : "en",
            "url" : "http://www.chef-in-training.com/2015/02/fancy-peas/",
            "copyright" : "Chef in Training",
            "image" : "http://www.chef-in-training.com/blog/wp-content/uploads/2015/02/Fancy-Peas-200x300.jpg?1b19bb"
        },
        "level" : 1,
        "persons" : 4,
        "language" : "ro",
        "ingredients" : [ 
            {
                "for_what" : "tot",
                "list" : [ 
                    {
                        "name" : "unt",
                        "quantity" : 30,
                        "um" : "g",
                        "category" : "lactate"
                    }, 
                    {
                        "name" : "ceapa",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : "tocata marunt"
                    }, 
                    {
                        "name" : "ciuperci",
                        "quantity" : 800,
                        "um" : "g",
                        "category" : "legume"
                    }, 
                    {
                        "name" : "mazare",
                        "quantity" : 800,
                        "um" : "g",
                        "category" : "legume"
                    }, 
                    {
                        "name" : "pui",
                        "quantity" : 800,
                        "um" : "g",
                        "category" : "carne"
                    }, 
                    {
                        "name" : "bacon",
                        "quantity" : 300,
                        "um" : "g",
                        "category" : "carne"
                    }, 
                    {
                        "name" : "smantana",
                        "quantity" : 700,
                        "um" : "ml",
                        "category" : "lactate"
                    }, 
                    {
                        "name" : "sare de mare",
                        "category" : "condimente"
                    }, 
                    {
                        "name" : "piper",
                        "category" : "condimente",
                        "comment" : "proaspat macinat"
                    }
                ]
            }
        ],
        "instructions" : [ 
            {
                "order" : 0,
                "text" : "Cuptor: 180°C"
            }, 
            {
                "order" : 1,
                "text" : "Aseaza baconul intr-o tava, cat mai imprastiat. Pune tava la cuptor, cat mai aproape de sursa de caldura."
            }, 
            {
                "order" : 2,
                "text" : "Pune untul intr-o tigaie mare, la foc mic. Intre timp, toaca ceapa si curata si taie ciupercile. Da focul mai mare si pune-le la calit."
            }, 
            {
                "order" : 3,
                "text" : "Dupa 10 min, adauga carnea de pui, intorcandu-o pe ambele parti. Cand baconul e un pic crocant, scoate-l din cuptor si toaca-l."
            }, 
            {
                "order" : 4,
                "text" : "Dupa alte 10 min, pune mazarea, bacon-ul, smantana si asezoneaza. Lasa 2 min."
            }, 
            {
                "order" : 5,
                "text" : "Pune totul intr-o tava inalta de cuptor, pentru 20 min."
            }
        ],
        "labels" : [ 
            "pui"
        ],
        "dish_labels" : [ 
            "o-oala"
        ],
        "time" : 50,
        "created" : {
            "user" : "website",
            "date" : ISODate("2015-05-31T23:32:41.792-22:00")
        },
        "modified" : {
            "user" : "website",
            "date" : ISODate("2015-05-31T23:32:41.792-22:00")
        }
    }
}

); db.planning.insert(
{
    "_id" : ObjectId("5568d2aca19356e6aa41c055"),
    "username" : "website",
    "date" : ISODate("2015-05-24T00:00:00.000-22:00"),
    "recipe" : {
        "_id" : "Pastai cu usturoi",
        "origin" : {
            "url" : "http://iulianaflorentina.blogspot.be/2012/06/fasole-pastai-cu-usturoi.html",
            "language" : "ro",
            "image" : "http://2.bp.blogspot.com/-zBThQjo2X3g/T9iA4z3rssI/AAAAAAAAC8w/Cqg-BAmVHJE/s640/DSCN6865.JPG",
            "copyright" : "iulianaflorentina.blogspot.be"
        },
        "labels" : [ 
            "pastai", 
            "fasole galbena", 
            "vegetarian"
        ],
        "dish_labels" : [ 
            "fel-principal"
        ],
        "persons" : 4,
        "time" : null,
        "level" : 1,
        "language" : "ro",
        "ingredients" : [ 
            {
                "for_what" : "pastai",
                "list" : [ 
                    {
                        "name" : "fasole galbena",
                        "quantity" : 1000,
                        "um" : "g",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "usturoi",
                        "quantity" : 8,
                        "um" : "cat",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "grasime de gatit",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "sare de mare",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "piper proaspat macinat",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "marar",
                        "quantity" : 1,
                        "um" : "leg",
                        "category" : "condimente",
                        "comment" : "proaspat"
                    }
                ]
            }
        ],
        "created" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.827-22:00")
        },
        "modified" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.827-22:00")
        },
        "instructions" : [ 
            {
                "order" : 1,
                "for_what" : "",
                "text" : "Curata si spala fasolea."
            }, 
            {
                "order" : 2,
                "for_what" : undefined,
                "text" : "Intr-o tigaie/oala adanca, pune grasimea de gatit, fasolea si o cana cu apa."
            }, 
            {
                "order" : 3,
                "for_what" : undefined,
                "text" : "Acopera si fierbe la foc moderat cu capac, pana cand scade apa si pastaile incep sa se caleasca."
            }, 
            {
                "order" : 4,
                "for_what" : undefined,
                "text" : "Intre timp, toaca usturoiul. Cand incepe fasolea sa se caleasca, adauga-l peste, asezoneaza si mai lasa pe foc inca 5-7 min."
            }, 
            {
                "order" : 5,
                "for_what" : undefined,
                "text" : "Toaca mararul. Pune-l la sfarsit peste pastai."
            }
        ]
    }
}

); db.planning.insert(
{
    "_id" : ObjectId("5568d2ada19356e6aa41c05a"),
    "username" : "website",
    "date" : ISODate("2015-05-30T00:00:00.000-22:00"),
    "recipe" : {
        "_id" : "Rulada de pui cu unt si usturoi + ciuperci marinate",
        "origin" : {
            "url" : "http://www.recipe.com/chicken-kiev/",
            "language" : "en",
            "image" : "http://www.recipe.com/images/chicken-kiev-R087171-ss.jpg",
            "copyright" : "userealbutter.com"
        },
        "labels" : [ 
            "pui", 
            "rulada", 
            "ciuperci", 
            "marinat"
        ],
        "dish_labels" : [ 
            "fel-principal"
        ],
        "persons" : 4,
        "time" : null,
        "level" : 2,
        "language" : "ro",
        "ingredients" : [ 
            {
                "for_what" : "rulada",
                "list" : [ 
                    {
                        "name" : "ceapa verde",
                        "quantity" : 2,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "patrunjel",
                        "quantity" : 1,
                        "um" : "leg",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "usturoi",
                        "quantity" : 1,
                        "um" : "cat",
                        "category" : "condimente",
                        "comment" : "pisat"
                    }, 
                    {
                        "name" : "unt",
                        "quantity" : 50,
                        "um" : "g",
                        "category" : "lactate",
                        "comment" : "de la frigider"
                    }, 
                    {
                        "name" : "piept de pui",
                        "quantity" : 4,
                        "um" : "buc",
                        "category" : "carne",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "grasime de gatit",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "alte",
                        "comment" : undefined
                    }
                ]
            }, 
            {
                "for_what" : "ciuperci",
                "list" : [ 
                    {
                        "name" : "ciuperci",
                        "quantity" : 450,
                        "um" : "g",
                        "category" : "legume",
                        "comment" : "mici"
                    }, 
                    {
                        "name" : "ulei de masline",
                        "quantity" : 4,
                        "um" : "Lg",
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "otet alb",
                        "quantity" : 2,
                        "um" : "Lg",
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "lamaie",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "fructe",
                        "comment" : "suc"
                    }, 
                    {
                        "name" : "usturoi",
                        "quantity" : 1,
                        "um" : "cat",
                        "category" : "condimente",
                        "comment" : "pisat"
                    }, 
                    {
                        "name" : "ceapa rosie",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : "tocata marunt"
                    }, 
                    {
                        "name" : "oregano",
                        "quantity" : 1,
                        "um" : "leg",
                        "category" : "condimente",
                        "comment" : "proaspat"
                    }, 
                    {
                        "name" : "patrunjel",
                        "quantity" : 1,
                        "um" : "leg",
                        "category" : "condimente",
                        "comment" : "proaspat"
                    }, 
                    {
                        "name" : "sare de mare",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "piper proaspat macinat",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "boabe de piper",
                        "quantity" : 0.5,
                        "um" : "lg",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "seminte de coriandru",
                        "quantity" : 0.5,
                        "um" : "lg",
                        "category" : "condimente",
                        "comment" : undefined
                    }
                ]
            }
        ],
        "created" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.882-22:00")
        },
        "modified" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.882-22:00")
        },
        "instructions" : [ 
            {
                "order" : 1,
                "for_what" : "rulada",
                "text" : "Cuptor: 180°C"
            }, 
            {
                "order" : 2,
                "for_what" : "rulada",
                "text" : "Toaca ceapa, patrunjelul si usturoiul si amesteca-le intr-un vas mic. Scoate untul din frigider si taie-l in 4."
            }, 
            {
                "order" : 3,
                "for_what" : "rulada",
                "text" : "Pune pieptul de pui intre 2 straturi de folie alimentara si bate-l cu partea plata a batatorului. Scoate folia, asezoneaza. Pune amestecul de ceapa pe fiecare bucata de piept, pune o portie de unt in mijloc. Pliaza partile, apoi ruleaza."
            }, 
            {
                "order" : 4,
                "for_what" : "rulada",
                "text" : "Pune la frigider pentru 1-24 ore."
            }, 
            {
                "order" : 5,
                "for_what" : "rulada",
                "text" : "Pune grasime de gatit intr-o tigaie. Pune usor ruladele si lasa-le 5 min sau pana fac crusta. Pune-le intr-o tava la cuptor pentru 15-18 min."
            }, 
            {
                "order" : 7,
                "for_what" : "ciuperci",
                "text" : "Intr-o oala, pune apa sarata la fiert. Curata ciupercile. Cand fierbe, pune ciupercile in apa la foc moderat timp de 5 min. Toaca usturoiul, ceapa, oregano si patrunjelul."
            }, 
            {
                "order" : 8,
                "for_what" : "ciuperci",
                "text" : "Strecoara ciupercile. Pune-le, alaturi de celelalte ingrediente, intr-un borcan mare si pune capacul. Agita bine borcanul."
            }, 
            {
                "order" : 9,
                "for_what" : "ciuperci",
                "text" : "Lasa la marinat in figider peste noapte."
            }
        ]
    }
}

); db.planning.insert(
{
    "_id" : ObjectId("5568d2ada19356e6aa41c05c"),
    "username" : "website",
    "date" : ISODate("2015-05-17T00:00:00.000-22:00"),
    "recipe" : {
        "_id" : "Salata de pastrav afumat cu cartofi noi",
        "origin" : {
            "url" : "http://www.jamieoliver.com/recipes/fish-recipes/smoked-trout-and-jersey-royal-salad/",
            "language" : "en",
            "image" : "http://s3-eu-west-1.amazonaws.com/jamieoliverprod/_int/rdb2/upload/791_5_1350296500_lrg.jpg",
            "copyright" : "www.jamieoliver.com"
        },
        "labels" : [ 
            "salata", 
            "peste", 
            "pastrav", 
            "cartofi noi"
        ],
        "dish_labels" : [ 
            "fel-principal"
        ],
        "persons" : 4,
        "time" : 30,
        "level" : 1,
        "language" : "ro",
        "ingredients" : [ 
            {
                "for_what" : "salata",
                "list" : [ 
                    {
                        "name" : "cartofi noi",
                        "quantity" : 800,
                        "um" : "g",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "smantana",
                        "quantity" : 2,
                        "um" : "Lg",
                        "category" : "lactate",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "lamaie",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "fructe",
                        "comment" : "coaja si sucul"
                    }, 
                    {
                        "name" : "ceapa rosie",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : "curatata si taiata fin"
                    }, 
                    {
                        "name" : "patrunjel",
                        "quantity" : 1,
                        "um" : "leg",
                        "category" : "condimente",
                        "comment" : "frunzele, taiate grosier"
                    }, 
                    {
                        "name" : "capere",
                        "quantity" : 100,
                        "um" : "g",
                        "category" : "condimente",
                        "comment" : "scurse si eventual clatite"
                    }, 
                    {
                        "name" : "nasturel",
                        "quantity" : 1,
                        "um" : "pumn",
                        "category" : "legume",
                        "comment" : "sau alt tip de salata, tocata"
                    }, 
                    {
                        "name" : "sare de mare",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "piper proaspat macinat",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "pastrav afumat",
                        "quantity" : 300,
                        "um" : "g",
                        "category" : "peste",
                        "comment" : "din surse sustenabile"
                    }
                ]
            }
        ],
        "created" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.889-22:00")
        },
        "modified" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.889-22:00")
        },
        "instructions" : [ 
            {
                "order" : 1,
                "for_what" : undefined,
                "text" : "Pune cartofii intr-un vas cu apa clocotita si fierbe pana sunt gata. Strecoara si, eventual, lasa sa se raceasca"
            }, 
            {
                "order" : 2,
                "for_what" : undefined,
                "text" : "Intre timp, intr-un vas amesteca smantana cu coaja si sucul de lamaie. Pregateste celelalte ingrediente"
            }, 
            {
                "order" : 3,
                "for_what" : undefined,
                "text" : "In vas, adauga cartofii, ceapa, patrunjelul, caperele si nasturelul. Adauga sare si piper dupa gust si amesteca bine"
            }, 
            {
                "order" : 4,
                "for_what" : undefined,
                "text" : "Imparte salata in portii individuale si pune pastravul afumat deasupra, desfacandu-l in straturi"
            }
        ]
    }
}

); db.planning.insert(
{
    "_id" : ObjectId("5568d2ada19356e6aa41c05d"),
    "username" : "website",
    "date" : ISODate("2015-05-18T00:00:00.000-22:00"),
    "recipe" : {
        "_id" : "Somon la tava, de vara",
        "origin" : {
            "url" : "http://www.jamieoliver.com/recipes/fish-recipes/summer-tray-baked-salmon",
            "language" : "en",
            "image" : "http://s3-eu-west-1.amazonaws.com/jamieoliverprod/_int/rdb2/upload/1016_2_1426868777_lrg.jpg",
            "copyright" : "www.jamieoliver.com"
        },
        "labels" : [ 
            "somon", 
            "cartofi", 
            "fasole verde", 
            "legume"
        ],
        "dish_labels" : [ 
            "fel-principal"
        ],
        "persons" : 4,
        "time" : 45,
        "level" : 1,
        "language" : "ro",
        "ingredients" : [ 
            {
                "for_what" : "legume",
                "list" : [ 
                    {
                        "name" : "sare de mare",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "piper proaspat macinat",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "cartofi noi",
                        "quantity" : 700,
                        "um" : "g",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "fasole verde",
                        "quantity" : 200,
                        "um" : "g",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "fasole galbena",
                        "quantity" : 100,
                        "um" : "g",
                        "category" : "legume",
                        "comment" : "optional"
                    }, 
                    {
                        "name" : "mazare",
                        "quantity" : 100,
                        "um" : "g",
                        "category" : "legume",
                        "comment" : "optional"
                    }, 
                    {
                        "name" : "unt",
                        "quantity" : 55,
                        "um" : "g",
                        "category" : "lactate",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "busuioc",
                        "quantity" : 1,
                        "um" : "leg",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "marar",
                        "quantity" : 1,
                        "um" : "leg",
                        "category" : "condimente",
                        "comment" : "sau frunze de fenicul"
                    }
                ]
            }, 
            {
                "for_what" : "somon",
                "list" : [ 
                    {
                        "name" : "somon",
                        "quantity" : 800,
                        "um" : "g",
                        "category" : "peste",
                        "comment" : "cu piele, dezosat, taiat in portii"
                    }, 
                    {
                        "name" : "lamaie",
                        "quantity" : 2,
                        "um" : "buc",
                        "category" : "fructe",
                        "comment" : undefined
                    }
                ]
            }
        ],
        "created" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.894-22:00")
        },
        "modified" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.894-22:00")
        },
        "instructions" : [ 
            {
                "order" : 1,
                "for_what" : undefined,
                "text" : "Incalzeste cuptorul la 230 grade (foc mare)"
            }, 
            {
                "order" : 2,
                "for_what" : undefined,
                "text" : "Umple o oala pe jumatate cu apa si un pic de sare. Pune la foc mare sa fiarba"
            }, 
            {
                "order" : 3,
                "for_what" : undefined,
                "text" : "Intre timp, spala cartofii noi. Curata fasolea verde (si galbena) si tai-o pe diagonala, in bucati de 3 cm"
            }, 
            {
                "order" : 4,
                "for_what" : undefined,
                "text" : "Cand fierbe apa, pune cu grija cartofii si lasa-i sa fiarba 10-12 min (in functie de dimensiunea cartofilor), pana cand sunt aproape gata"
            }, 
            {
                "order" : 5,
                "for_what" : undefined,
                "text" : "Scoate mazarea din pastai"
            }, 
            {
                "order" : 6,
                "for_what" : undefined,
                "text" : "Cand s-au terminat cartofii, pune toata fasolea in apa si mai fierbe inca 4 min"
            }, 
            {
                "order" : 7,
                "for_what" : undefined,
                "text" : "Scurge cartofii si pastaile, si lasa-le un pic sa se usuce. Pune-le intr-o tava 25x35 cm"
            }, 
            {
                "order" : 8,
                "for_what" : undefined,
                "text" : "Imprastie mazarea si bucatele din unt in tava"
            }, 
            {
                "order" : 9,
                "for_what" : undefined,
                "text" : "Deasupra tavii, da pe razatoare coaja de lamie"
            }, 
            {
                "order" : 10,
                "for_what" : undefined,
                "text" : "Stoarce lamaile si toarna sucul, o parte in tava, o parte peste somon"
            }, 
            {
                "order" : 11,
                "for_what" : undefined,
                "text" : "Asezoneaza cu sare si piper si amesteca ce e in tava"
            }, 
            {
                "order" : 12,
                "for_what" : undefined,
                "text" : "Toaca funzele de busuioc si marar si imprastie _jumatate_ in tava"
            }, 
            {
                "order" : 14,
                "for_what" : undefined,
                "text" : "Cresteaza fileurile de somon pe partea cu pielea. Freaca-le cu un pic de unt moale, sare si piper. Pune in crestaturi restul verdeturilor. Pune somonul peste legume, in tava"
            }, 
            {
                "order" : 15,
                "for_what" : undefined,
                "text" : "Pune in cuptor pentru 10-15 min, pana cand somonul si legumele sunt gata"
            }, 
            {
                "order" : 16,
                "for_what" : undefined,
                "text" : "Cand servesti, pune peste si sos din tava"
            }
        ]
    }
}

); db.planning.insert(
{
    "_id" : ObjectId("5568d2ada19356e6aa41c05e"),
    "username" : "website",
    "date" : ISODate("2015-05-19T00:00:00.000-22:00"),
    "recipe" : {
        "_id" : "Perisoare cu sos de rosii",
        "origin" : {
            "url" : "http://www.dulciurifeldefel.ro/perisoare-cu-sos-de-rosii/",
            "language" : "ro",
            "image" : "http://3.bp.blogspot.com/-VMT7e2oPHKU/T2m2RARXhnI/AAAAAAAAKGY/GzBtHmgrHMQ/s1600/perisoare+in+sos+de+rosii.JPG",
            "copyright" : "http://www.dulciurifeldefel.ro/"
        },
        "labels" : [ 
            "carne tocata", 
            "sos rosii"
        ],
        "dish_labels" : [ 
            "fel-principal"
        ],
        "persons" : 4,
        "time" : null,
        "level" : 1,
        "language" : "ro",
        "ingredients" : [ 
            {
                "for_what" : "perisoare",
                "list" : [ 
                    {
                        "name" : "carne tocata",
                        "quantity" : 500,
                        "um" : "g",
                        "category" : "carne",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "morcov",
                        "quantity" : 4,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : "mai mari (sau echivalent)"
                    }, 
                    {
                        "name" : "oua",
                        "quantity" : 3,
                        "um" : "buc",
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "dovlecel",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : "optional"
                    }, 
                    {
                        "name" : "sare de mare",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "piper proaspat macinat",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }
                ]
            }, 
            {
                "for_what" : "sos",
                "list" : [ 
                    {
                        "name" : "ceapa",
                        "quantity" : 2,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "ardei gras rosu",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "usturoi",
                        "quantity" : 2,
                        "um" : "cat",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "oregano",
                        "quantity" : "1",
                        "um" : "Lg",
                        "category" : "condimente",
                        "comment" : "uscat"
                    }, 
                    {
                        "name" : "busuioc",
                        "quantity" : 1,
                        "um" : "leg",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "sos de rosii",
                        "quantity" : 800,
                        "um" : "g",
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "grasime de gatit",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "alte",
                        "comment" : undefined
                    }
                ]
            }
        ],
        "created" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.838-22:00")
        },
        "modified" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.838-22:00")
        },
        "instructions" : [ 
            {
                "order" : 1,
                "for_what" : undefined,
                "text" : "Pune intr-o tigaie (mai inalta) un pic de grasime la incalzit. Intr-o oala mare, pune apa la fiert, cu sare"
            }, 
            {
                "order" : 2,
                "for_what" : undefined,
                "text" : "Toaca marunt, la robot, 1 ceapa, morcovii (mai putin unul), dovlecelul si 1 catel de usturoi. Pune-le in tigaie la calit, cu capacul peste"
            }, 
            {
                "order" : 3,
                "for_what" : undefined,
                "text" : "Intr-un bol mare, pune carnea tocata, ouale, sare si piper"
            }, 
            {
                "order" : 4,
                "for_what" : undefined,
                "text" : "Cand legumele sunt calite, pune-le si pe ele in bol si amesteca totul omogen"
            }, 
            {
                "order" : 5,
                "for_what" : undefined,
                "text" : "Pentru sos: In aceeasi tigaie (acum goala), pune grasime la incalzit. Toaca marunt, la robot, 1 ceapa, 1 morcov si ardeiul si pune-le la calit. Cand s-au inmuiat, adauga sosul de rosii, sare, busuioc si oregano. Si lasa la foc foarte mic"
            }, 
            {
                "order" : 6,
                "for_what" : undefined,
                "text" : "Formeaza chiftelutele si pune-le in oala mare cu apa clocotita. Se fierb la foc mediu pana se ridica la suprafata"
            }, 
            {
                "order" : 7,
                "for_what" : undefined,
                "text" : "Pune chiftelutele in sos si lasa-le pe foc 30 min sau pana cand ajunge la consistenta dorita"
            }
        ]
    }
}

); db.planning.insert(
{
    "_id" : ObjectId("5568d2ada19356e6aa41c05f"),
    "username" : "website",
    "date" : ISODate("2015-05-20T00:00:00.000-22:00"),
    "recipe" : {
        "_id" : "Pui cu mustar, cartofi rapizi si verdeturi",
        "origin" : {
            "url" : "http://www.jamieoliver.com/recipes/chicken-recipes/mustard-chicken-quick-dauphinoise-greens-black-forest-affogato/",
            "language" : "en",
            "image" : "http://s3-eu-west-1.amazonaws.com/jamieoliverprod/_int/rdb2/upload/352_1_1349701358_lrg.jpg",
            "copyright" : "www.jamieoliver.com"
        },
        "labels" : [ 
            "pui", 
            "mustar", 
            "cartofi", 
            "piept de pui", 
            "30 minute", 
            "praz"
        ],
        "dish_labels" : [ 
            "fel-principal"
        ],
        "persons" : 6,
        "time" : 30,
        "level" : 2,
        "language" : "ro",
        "ingredients" : [ 
            {
                "for_what" : "Cartofi gratinati",
                "list" : [ 
                    {
                        "name" : "ceapa rosie",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "cartofi",
                        "quantity" : 1000,
                        "um" : "g",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "nuscoara",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "usturoi",
                        "quantity" : 2,
                        "um" : "cat",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "smantana",
                        "quantity" : 225,
                        "um" : "g",
                        "category" : "lactate",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "ansoa",
                        "quantity" : 4,
                        "um" : "buc",
                        "category" : "condimente",
                        "comment" : "in ulei"
                    }, 
                    {
                        "name" : "parmezan",
                        "quantity" : 80,
                        "um" : "g",
                        "category" : "lactate",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "frunze de dafin",
                        "quantity" : 2,
                        "um" : "buc",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "cimbru",
                        "quantity" : 1,
                        "um" : "leg",
                        "category" : "condimente",
                        "comment" : undefined
                    }
                ]
            }, 
            {
                "for_what" : "asezonare",
                "list" : [ 
                    {
                        "name" : "ulei de masline",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "grasime de gatit",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "sare de mare",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "piper proaspat macinat",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }
                ]
            }, 
            {
                "for_what" : "pui",
                "list" : [ 
                    {
                        "name" : "rozmarin",
                        "quantity" : 2,
                        "um" : "creng",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "piept de pui",
                        "quantity" : 4,
                        "um" : "buc",
                        "category" : "carne",
                        "comment" : "cu piele"
                    }, 
                    {
                        "name" : "mustar macinat",
                        "quantity" : 4,
                        "um" : "Lg",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "praz",
                        "quantity" : 3,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : "mici, sau 1 mare"
                    }, 
                    {
                        "name" : "usturoi",
                        "quantity" : 4,
                        "um" : "cat",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "vin alb",
                        "quantity" : 100,
                        "um" : "ml",
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "smantana",
                        "quantity" : 75,
                        "um" : "ml",
                        "category" : "lactate",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "mustar",
                        "quantity" : 1,
                        "um" : "lg",
                        "category" : "condimente",
                        "comment" : "1 lg cu varf, mustar cu boabe"
                    }
                ]
            }, 
            {
                "for_what" : "verdeturi",
                "list" : [ 
                    {
                        "name" : "frunze de sfecla",
                        "quantity" : 200,
                        "um" : "g",
                        "category" : "legume",
                        "comment" : "Swiss Chard"
                    }, 
                    {
                        "name" : "spanac mic",
                        "quantity" : 200,
                        "um" : "g",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "lamaie",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "fructe",
                        "comment" : undefined
                    }
                ]
            }
        ],
        "created" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.921-22:00")
        },
        "modified" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.921-22:00")
        },
        "instructions" : [ 
            {
                "order" : 1,
                "for_what" : undefined,
                "text" : "Pregateste toate ingredientele si echipamentul. Pune o oala medie si o tigaie (care merge si la cuptor) la foc mic. Pune discul de taiat gros la robot. Porneste cuptorul la 220°C (foc mare). Umple fierbatorul cu apa si porneste-l"
            }, 
            {
                "order" : 2,
                "for_what" : "gratin",
                "text" : "Curata si taie in jumatate ceapa. Spala cartofii si eventual curata-i. Taie-i, impreuna cu ceapa, la robot. Pune totul intr-o tava inalta, pentru cuptor (aprox 25x35cm) si asezoneaza. Rade jumatate de nucsoara, zdrobeste 2 capatani de usturoi (cu coaja) si toarna smantana. Rupe ansoa si rade fin jumatate din parmezan deasupra. Adauga frunzele de dafin, frunzele de cimbru si un pic de grasime de gatit. Cu mainile curate, amesteca totul, si pune tava pe foc mediu. Adauga 200ml apa filtrata si acopera etans (cu folie sau capac)"
            }, 
            {
                "order" : 3,
                "for_what" : "pui",
                "text" : "La tigaie, da focul la mediu. Taie fin frunzele de rozmarin si imprastie-le peste pui. Adauga 1 lg. de mustar macinat peste ficare piept de pui, asezoneaza si freaca/toarna usor niste grasime de gatit. Maseaza toate aromele in carne. Pune pieptul de pui in tigaie, cu pielea in jos. Spala-te bine pe maini. Cu o paleta mare, apasa deasupra pieptul de pui in tigaie sa-l ajuti sa se faca mai rapid. Pieptul e gata cam in 18 min"
            }, 
            {
                "order" : 4,
                "for_what" : "gratin",
                "text" : "Zgaltaie tava, ca sa nu se prinda nimic"
            }, 
            {
                "order" : 5,
                "for_what" : "verdeturi",
                "text" : "Ca sa se gateasca usor, taie fin tijele. Spala frunzele. Punele tijele in oala, adauga apa clocotita din fierbator, un pic de sare si pune capacul"
            }, 
            {
                "order" : 6,
                "for_what" : "gratin",
                "text" : "Scoate folia/capacul. Rade usor un strat de parmezan peste. Pune ce a mai ramas din frunzele de cimbru si baga la cuptor pe raftul de sus pentru 15 min, sau pana cand devine auriu"
            }, 
            {
                "order" : 7,
                "for_what" : "pui",
                "text" : "Taie rapid prazul si pune-l intr-o parte a tavii cu pui"
            }, 
            {
                "order" : 8,
                "for_what" : "gratin",
                "text" : "Pune frunzele in oala. Mai adauga un pic de apa, daca e nevoie"
            }, 
            {
                "order" : 9,
                "for_what" : "pui",
                "text" : "Zdrobeste 4 catei de usturoi, cu tot cu coaja, peste pui. Intoarce pieptul de pui cu pielea in sus si apasa din nou peste ei. Amesteca prazul si varsa vinul alb"
            }, 
            {
                "order" : 10,
                "for_what" : undefined,
                "text" : "Pune spanacul intr-o strecuratoare si toarna verdeturile si apa clocotita peste spanac. Pune un pic de ulei de masline in oala acum goala, adauga sucul de la 1 lamaie. Aseaza toate verdeturile strecurate si amesteca-le, folosind un cleste de bucatarie. Asezoneaza dupa gust si du direct la masa"
            }, 
            {
                "order" : 11,
                "for_what" : "pui",
                "text" : "Verifica daca puiul este gatit de tot, apoi adauga 75ml smantana in tigaie. Pune capacul. Verifica repede gratinul"
            }, 
            {
                "order" : 12,
                "for_what" : "alte",
                "text" : "Incepe sa strangi de pe masa de lucru"
            }, 
            {
                "order" : 13,
                "for_what" : "pui",
                "text" : "In 5 minute, inchide focul. Transfera pieptul de pui pe un fund si taie in felii, pe diagonala. Amesteca 1lg cu varf mustar in sos, asezoneaza daca simti nevoia. Pune sosul pe un platou si puiul deasupra. Stropeste cu un pic de ulei de masline si du la masa"
            }, 
            {
                "order" : 14,
                "for_what" : "gratin",
                "text" : "Du la masa. Pofta buna!"
            }
        ]
    }
}

); db.planning.insert(
{
    "_id" : ObjectId("5568d2ada19356e6aa41c060"),
    "username" : "website",
    "date" : ISODate("2015-05-22T00:00:00.000-22:00"),
    "recipe" : {
        "_id" : "Chiftelute cu mozzarella",
        "origin" : {
            "url" : "http://www.timkemp.com/recipes/entree/jamiemeatball.htm",
            "language" : "en",
            "image" : "/assets/images/recipes/chiftelute_sos_rosii_mozzarella_parmezan.jpg",
            "copyright" : "The Naked Chef"
        },
        "labels" : [ 
            "carne tocata", 
            "sos de rosii", 
            "mozzarella"
        ],
        "dish_labels" : [ 
            "fel-principal"
        ],
        "persons" : 4,
        "time" : null,
        "level" : 1,
        "language" : "ro",
        "ingredients" : [ 
            {
                "for_what" : "chiftelute",
                "list" : [ 
                    {
                        "name" : "carne tocata",
                        "quantity" : 800,
                        "um" : "g",
                        "category" : "carne",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "morcov",
                        "quantity" : 3,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "dovlecel",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "oua",
                        "quantity" : 3,
                        "um" : "buc",
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "oregano",
                        "quantity" : 2,
                        "um" : "Lg",
                        "category" : "condimente",
                        "comment" : "uscat"
                    }, 
                    {
                        "name" : "chimen",
                        "quantity" : 0.5,
                        "um" : "lg",
                        "category" : "condimente",
                        "comment" : "macinat"
                    }, 
                    {
                        "name" : "chilli",
                        "quantity" : 0.5,
                        "um" : "buc",
                        "category" : "condimente",
                        "comment" : "mic, optional"
                    }, 
                    {
                        "name" : "rozmarin",
                        "quantity" : 1,
                        "um" : "creng",
                        "category" : "condimente",
                        "comment" : "tocat fin"
                    }, 
                    {
                        "name" : "sare de mare",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "piper proaspat macinat",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "grasime de gatit",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "busuioc",
                        "quantity" : 1,
                        "um" : "leg",
                        "category" : "condimente",
                        "comment" : "tocat sau rupt"
                    }, 
                    {
                        "name" : "mozzarella",
                        "quantity" : 60,
                        "um" : "g",
                        "category" : "lactate",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "parmezan",
                        "quantity" : 60,
                        "um" : "g",
                        "category" : "lactate",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "ceapa",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "usturoi",
                        "quantity" : 1,
                        "um" : "cat",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "mustar",
                        "quantity" : 1,
                        "um" : "lg",
                        "category" : "condimente",
                        "comment" : "optional"
                    }
                ]
            }, 
            {
                "for_what" : "sos",
                "list" : [ 
                    {
                        "name" : "usturoi",
                        "quantity" : 1,
                        "um" : "cat",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "grasime de gatit",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "chilli",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "condimente",
                        "comment" : "mic"
                    }, 
                    {
                        "name" : "oregano",
                        "quantity" : 2,
                        "um" : "lg",
                        "category" : "condimente",
                        "comment" : "uscat"
                    }, 
                    {
                        "name" : "sos de rosii",
                        "quantity" : 800,
                        "um" : "g",
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "otet rosu",
                        "quantity" : 1,
                        "um" : "Lg",
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "busuioc",
                        "quantity" : 1,
                        "um" : "leg",
                        "category" : "condimente",
                        "comment" : "sau maghiran"
                    }, 
                    {
                        "name" : "sare de mare",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "piper proaspat macinat",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "ulei de masline",
                        "quantity" : 2,
                        "um" : "Lg",
                        "category" : "alte",
                        "comment" : undefined
                    }
                ]
            }
        ],
        "created" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.905-22:00")
        },
        "modified" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.905-22:00")
        },
        "instructions" : [ 
            {
                "order" : 1,
                "for_what" : "chiftelute",
                "text" : "Da drumul la cuptor la 220°C. "
            }, 
            {
                "order" : 2,
                "for_what" : "chiftelute",
                "text" : "Toaca marunt, la robot, ceapa, morcovii, dovlecelul si usturoiul. Pune-le in tigaie la calit, cu capacul peste"
            }, 
            {
                "order" : 3,
                "for_what" : "chiftelute",
                "text" : "Intr-un bol mare, pune carnea tocata, ouale, sare si piper si condimentele"
            }, 
            {
                "order" : 4,
                "for_what" : "sos",
                "text" : "Intr-o tigaie cu fundul gros, caleste usturoiul, apoi adauga chilli si sosul de rosii. Adu la fierbere si lasa la foc mic sa bolboroseasca cel putin jumatate de ora"
            }, 
            {
                "order" : 5,
                "for_what" : "chiftelute",
                "text" : "Cand legumele sunt calite, pune-le si pe ele in bol si amesteca totul omogen"
            }, 
            {
                "order" : 6,
                "for_what" : "chiftelute",
                "text" : "Formeaza bule din amestec si pune-le intr-o tava, la cuptor"
            }, 
            {
                "order" : 7,
                "for_what" : "alte",
                "text" : "Incepe sa strangi pe masa de lucru"
            }, 
            {
                "order" : 8,
                "for_what" : "sos",
                "text" : "Cand e sosul gata, adauga busuic (si maghiran), adauga otetul, uleiul de masline si pune sare si piper dupa gust"
            }, 
            {
                "order" : 9,
                "for_what" : "chiftelute",
                "text" : "Cam peste 10-15 min, chiftelutele sunt gata. Da cuptorul la 200°C. Pune-le intr-o tava mai inalta, toarna peste sosul, apoi mozzarella rupta in bucati si parmezanul ras. Pune totul la cuptor pentru 10-15 min, pana cand parmezanul e auriu"
            }
        ]
    }
}

); db.planning.insert(
{
    "_id" : ObjectId("5568d2ada19356e6aa41c061"),
    "username" : "website",
    "date" : ISODate("2015-05-23T00:00:00.000-22:00"),
    "recipe" : {
        "_id" : "Tocanita de miel cu couscous",
        "origin" : {
            "url" : "http://www.jamieoliver.com/recipes/lamb-recipes/mediterranean-braised-lamb-and-couscous/",
            "language" : "en",
            "image" : "http://s3-eu-west-1.amazonaws.com/jamieoliverprod/_int/rdb2/upload/335_1_1349877333_lrg.jpg",
            "copyright" : "www.jamieoliver.com"
        },
        "labels" : [ 
            "miel", 
            "couscous", 
            "tocanita", 
            "sos de rosii", 
            "supa de pui", 
            "tocanita"
        ],
        "dish_labels" : [ 
            "fel-principal"
        ],
        "persons" : 4,
        "time" : 110,
        "level" : 1,
        "language" : "ro",
        "ingredients" : [ 
            {
                "for_what" : "tocanita",
                "list" : [ 
                    {
                        "name" : "ceapa",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : "mica"
                    }, 
                    {
                        "name" : "grasime de gatit",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "miel",
                        "quantity" : 500,
                        "um" : "g",
                        "category" : "carne",
                        "comment" : "pulpa sau picior"
                    }, 
                    {
                        "name" : "usturoi",
                        "quantity" : 1,
                        "um" : "cat",
                        "category" : "condimente",
                        "comment" : "sfaramat, fara coaja"
                    }, 
                    {
                        "name" : "ardei gras",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : "tocat cubulete"
                    }, 
                    {
                        "name" : "piure de rosii",
                        "quantity" : 1,
                        "um" : "lg",
                        "category" : "alte",
                        "comment" : "sos de rosii concentrat"
                    }, 
                    {
                        "name" : "sos de rosii",
                        "quantity" : 400,
                        "um" : "g",
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "busuioc",
                        "quantity" : 2,
                        "um" : "creng",
                        "category" : "condimente",
                        "comment" : "tocat"
                    }, 
                    {
                        "name" : "sare de mare",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }
                ]
            }, 
            {
                "for_what" : "couscous",
                "list" : [ 
                    {
                        "name" : "couscous",
                        "quantity" : 125,
                        "um" : "g",
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "supa de pui",
                        "quantity" : 150,
                        "um" : "g",
                        "category" : "alte",
                        "comment" : undefined
                    }
                ]
            }
        ],
        "created" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.942-22:00")
        },
        "modified" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.942-22:00")
        },
        "instructions" : [ 
            {
                "order" : 1,
                "for_what" : "tocanita",
                "text" : "Caleste ceapa in grasime de gatit 10 min. Adauga mielul tocat cuburi, usturoiul, ardeiul rosu si piureul de rosii. Varsa sosul de rosii, 400 ml apa si busuioc. Adauga sare dupa gust, pune capacul si pune la fiert inabusit o ora jumatate,pana cand carnea e frageda. Sau pune totul la cuptor (150°C/foc mic) pentru 2 ore"
            }, 
            {
                "order" : 2,
                "for_what" : "couscous",
                "text" : "Pune couscous-ul intr-un bol mare si toarna supa de pui clocotita peste. Ar trebui ca abia sa il acopere. Lasa-l sa stea acoperit cu un capac 10 min. Aeriseste-l cu o furculita inainte de servire"
            }
        ]
    }
}

); db.planning.insert(
{
    "_id" : ObjectId("5568d2ada19356e6aa41c063"),
    "username" : "website",
    "date" : ISODate("2015-05-31T00:00:00.000-22:00"),
    "recipe" : {
        "_id" : "Salata greceasca",
        "origin" : {
            "url" : "http://thepioneerwoman.com/cooking/2011/04/greek-salad/",
            "language" : "en",
            "image" : "http://farm6.static.flickr.com/5267/5626280782_d133ac7d2d_z.jpg",
            "copyright" : "The Pioneer Woman"
        },
        "labels" : [ 
            "salata", 
            "rosii"
        ],
        "dish_labels" : [ 
            "fel-principal"
        ],
        "persons" : 4,
        "time" : 20,
        "level" : 1,
        "language" : "ro",
        "ingredients" : [ 
            {
                "for_what" : "salata",
                "list" : [ 
                    {
                        "name" : "salata verde",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "rosii",
                        "quantity" : 500,
                        "um" : "g",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "castravete",
                        "quantity" : 300,
                        "um" : "g",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "ceapa rosie",
                        "quantity" : 0.5,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "masline negre",
                        "quantity" : 100,
                        "um" : "g",
                        "category" : "condimente",
                        "comment" : "fara samburi"
                    }, 
                    {
                        "name" : "telemea",
                        "quantity" : 200,
                        "um" : "g",
                        "category" : "lactate",
                        "comment" : "/feta"
                    }
                ]
            }, 
            {
                "for_what" : "sos",
                "list" : [ 
                    {
                        "name" : "patrunjel",
                        "quantity" : 0.5,
                        "um" : "leg",
                        "category" : "condimente",
                        "comment" : "proaspat"
                    }, 
                    {
                        "name" : "ulei de masline",
                        "quantity" : 40,
                        "um" : "ml",
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "otet rosu",
                        "quantity" : 2,
                        "um" : "Lg",
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "usturoi",
                        "quantity" : 1,
                        "um" : "cat",
                        "category" : "condimente",
                        "comment" : "pisat"
                    }, 
                    {
                        "name" : "piper proaspat macinat",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "lamaie",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "fructe",
                        "comment" : "suc"
                    }
                ]
            }
        ],
        "created" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.945-22:00")
        },
        "modified" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.945-22:00")
        },
        "instructions" : [ 
            {
                "order" : 1,
                "for_what" : "salata",
                "text" : "Se toaca toate ingredientele in bucati de dimensiuni similare. Iar ceapa in felii foarte subtiri."
            }, 
            {
                "order" : 2,
                "for_what" : "sos",
                "text" : "Se amesteca totul (in afara de lamaie) intr-un borcan mic pana la emulsie. Se toarna peste salata si se adauga sucul de lamaie dupa gust."
            }
        ]
    }
}

); db.planning.insert(
{
    "_id" : ObjectId("5568d2ada19356e6aa41c064"),
    "username" : "website",
    "date" : ISODate("2015-06-01T00:00:00.000-22:00"),
    "recipe" : {
        "_id" : "Salata nicoise",
        "origin" : {
            "url" : "http://www.jamieoliver.com/recipes/fish-recipes/griddled-tuna-kinda-ni-oise-salad/",
            "language" : "en",
            "image" : "http://s3-eu-west-1.amazonaws.com/jamieoliverprod/_int/rdb2/upload/843_1_1421668974_lrg.jpg",
            "copyright" : "Jamie Oliver"
        },
        "labels" : [ 
            "salata", 
            "peste"
        ],
        "dish_labels" : [ 
            "fel-principal"
        ],
        "persons" : 4,
        "time" : 15,
        "level" : 1,
        "language" : "ro",
        "ingredients" : [ 
            {
                "for_what" : "salata",
                "list" : [ 
                    {
                        "name" : "fasole galbena",
                        "quantity" : 350,
                        "um" : "g",
                        "category" : "legume",
                        "comment" : "sau verde/amestec"
                    }, 
                    {
                        "name" : "bagheta",
                        "quantity" : 0.5,
                        "um" : "buc",
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "masline",
                        "quantity" : 70,
                        "um" : "g",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "rosii",
                        "quantity" : 300,
                        "um" : "g",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "salata verde",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "telemea",
                        "quantity" : 20,
                        "um" : "g",
                        "category" : "lactate",
                        "comment" : "feta"
                    }, 
                    {
                        "name" : "lamaie",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "fructe",
                        "comment" : undefined
                    }
                ]
            }, 
            {
                "for_what" : "sos",
                "list" : [ 
                    {
                        "name" : "busuioc",
                        "quantity" : 1,
                        "um" : "leg",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "ansoa",
                        "quantity" : 6,
                        "um" : "buc",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "lamaie",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "fructe",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "ulei de masline",
                        "quantity" : 4,
                        "um" : "Lg",
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "ton",
                        "quantity" : 400,
                        "um" : "g",
                        "category" : "peste",
                        "comment" : "2x200g"
                    }, 
                    {
                        "name" : "otet rosu",
                        "quantity" : 1,
                        "um" : "Lg",
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "mustar",
                        "quantity" : 1,
                        "um" : "Lg",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "miere",
                        "quantity" : 1,
                        "um" : "lg",
                        "category" : "alte",
                        "comment" : "optional"
                    }, 
                    {
                        "name" : "sare de mare",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }
                ]
            }
        ],
        "created" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.948-22:00")
        },
        "modified" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.948-22:00")
        },
        "instructions" : [ 
            {
                "order" : 1,
                "for_what" : "salata",
                "text" : "Pune apa in fierbator. Cuptor: 220°C (foc mare). Curata fasolea, pune-o intr-o oala si toarna apa clocotita din fierbator peste ea + sare. Pune la foc, cu capac. Taie bagheta in cubulete de 2cm si pune-le la cuptor => crutoane."
            }, 
            {
                "order" : 2,
                "for_what" : "sos",
                "text" : "Pune deoparte 10 tije de busuioc. Restul frunzelor de busuioc + ansoa + suc de lamaie + ulei + un pic de apa --> in blender. Pune 40% din sos intr-un castron mic."
            }, 
            {
                "order" : 3,
                "for_what" : "ton",
                "text" : "Freaca tonul cu 10% din sos + sare + piper."
            }, 
            {
                "order" : 4,
                "for_what" : "sos",
                "text" : "Restul sosului toarna-l intr-un castron mare de salata, amestecandu-l cu otetul, mustarul si mierea."
            }, 
            {
                "order" : 5,
                "for_what" : "salata",
                "text" : "Strecoara fasolea, scoate samburii din masline si taie grosier rosiile. Pune toatea astea in vasul de salata, peste sos."
            }, 
            {
                "order" : 6,
                "for_what" : "ton",
                "text" : "Pune tonul pe tava de gril incinsa, cate 2 min pe fiecare parte, pana cand e roz in mijloc. "
            }, 
            {
                "order" : 7,
                "for_what" : "salata",
                "text" : "Toaca salata verde in bucati de 2cm, rupe crutoanele si aranjeaza-le pe un platou mare, langa salata. Imprastie fasolea, maslinele si rosiile deasupra. Rupe fiecare fileu de ton in doua si pune-le in platou. Arunca deasupra frunzele de busuioc puse deoparte la inceput, telemeaua si felii de lamaie."
            }
        ]
    }
}

); db.planning.insert(
{
    "_id" : ObjectId("5568d2ada19356e6aa41c065"),
    "username" : "website",
    "date" : ISODate("2015-06-02T00:00:00.000-22:00"),
    "recipe" : {
        "_id" : "Pui cu orez si mazare",
        "origin" : {
            "url" : "http://www.cakeduchess.com/2013/11/easy-one-pot-chicken-rice.html",
            "language" : "en",
            "image" : "http://i1.wp.com/www.cakeduchess.com/wp-content/uploads/2013/11/one-pot-chicken-and-rice-cakeduchess-1.jpg",
            "copyright" : "Cake Duchess"
        },
        "labels" : [ 
            "o oala", 
            "orez", 
            "pui"
        ],
        "dish_labels" : [ 
            "fel-principal"
        ],
        "persons" : 4,
        "time" : null,
        "level" : 1,
        "language" : "ro",
        "ingredients" : [ 
            {
                "for_what" : "orez",
                "list" : [ 
                    {
                        "name" : "grasime de gatit",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "pui",
                        "quantity" : 1000,
                        "um" : "g",
                        "category" : "carne",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "ceapa",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : "mare"
                    }, 
                    {
                        "name" : "orez alb",
                        "quantity" : 180,
                        "um" : "g",
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "supa de pui",
                        "quantity" : 450,
                        "um" : "ml",
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "sofran",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "condimente",
                        "comment" : "optional"
                    }, 
                    {
                        "name" : "frunze de dafin",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "mazare",
                        "quantity" : 100,
                        "um" : "g",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "sare de mare",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "lamaie",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "fructe",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "piper proaspat macinat",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }
                ]
            }
        ],
        "created" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.955-22:00")
        },
        "modified" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.955-22:00")
        },
        "instructions" : [ 
            {
                "order" : 1,
                "for_what" : undefined,
                "text" : "Pune grasimea de gatit la incins intr-o oala mai mare. Toaca ceapa si pune-o la calit. In 5-10 min, adauga bucatile de pui si lasa-l 5-7 minute pe fiecare parte, la foc mediu."
            }, 
            {
                "order" : 2,
                "for_what" : undefined,
                "text" : "Dizolva sofranul in un pic de apa si adauga-l in oala. Pune si restul ingredientelor inauntru si amesteca. Lasa-l la fiert inabusit 25 minute, pana cand orezul e moale si puiul facut. Verifica periodic si completeaza cu apa la nevoie."
            }
        ]
    }
}

); db.planning.insert(
{
    "_id" : ObjectId("5568d2ada19356e6aa41c066"),
    "username" : "website",
    "date" : ISODate("2015-06-03T00:00:00.000-22:00"),
    "recipe" : {
        "_id" : "Pui cu rozmarin si usturoi + salata de castraveti",
        "origin" : {
            "url" : "https://www.youtube.com/watch?v=VbWymMM35tg",
            "language" : "en",
            "image" : "https://www.atelierdeschefs.com/media/recette-e21217-salade-de-concombre-marine.jpg",
            "copyright" : "Youtube"
        },
        "labels" : [ 
            "pui"
        ],
        "dish_labels" : [ 
            "fel-principal"
        ],
        "persons" : 4,
        "time" : null,
        "level" : 1,
        "language" : "ro",
        "ingredients" : [ 
            {
                "for_what" : "pui",
                "list" : [ 
                    {
                        "name" : "piept de pui",
                        "quantity" : 4,
                        "um" : "buc",
                        "category" : "carne",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "sare de mare",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "piper proaspat macinat",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "chilli",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "condimente",
                        "comment" : "optional"
                    }, 
                    {
                        "name" : "grasime de gatit",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "usturoi",
                        "quantity" : 6,
                        "um" : "cat",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "rozmarin",
                        "quantity" : 3,
                        "um" : "creng",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "cimbru",
                        "quantity" : 0.5,
                        "um" : "leg",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "salvie",
                        "quantity" : 0.25,
                        "um" : "leg",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "vin",
                        "quantity" : 10,
                        "um" : "ml",
                        "category" : "alte",
                        "comment" : undefined
                    }
                ]
            }, 
            {
                "for_what" : "salata",
                "list" : [ 
                    {
                        "name" : "castraveti",
                        "quantity" : 6,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "marar",
                        "quantity" : 0.25,
                        "um" : "leg",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "ulei de masline",
                        "quantity" : 100,
                        "um" : "ml",
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "otet balsamic alb",
                        "quantity" : 30,
                        "um" : "ml",
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "sare de mare",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "piper proaspat macinat",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }
                ]
            }
        ],
        "created" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.958-22:00")
        },
        "modified" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.958-22:00")
        },
        "instructions" : [ 
            {
                "order" : 1,
                "for_what" : "pui",
                "text" : "Pune grasimea de gatit la incalzit intr-o tigaie. Asezoneaza carnea si freac-o bine cu sare si piper si pune-o la calit, doar cat sa-si schimbe un pic culoarea."
            }, 
            {
                "order" : 2,
                "for_what" : "pui",
                "text" : "Zdrobeste grosier usturoiul si taie pe lungime chilli. Intoarce carnea in tigaie. Adauga restul ingredientelor _deasupra_. Pune capacul si lasa la foc foarte mic 35 min."
            }, 
            {
                "order" : 3,
                "for_what" : "pui",
                "text" : "Stropeste cu vinul si ia de pe foc. Pune carnea pe un platou si toarna sosul deasupra."
            }, 
            {
                "order" : 4,
                "for_what" : "salata",
                "text" : "Curata si taie castravetii. Toaca marunt mararul. Intr-un borcan cu capac, pune restul ingredientelor + mararul si agita bine pana la emulsie. Toarna peste castraveti."
            }
        ]
    }
}

); db.planning.insert(
{
    "_id" : ObjectId("5568d2ada19356e6aa41c067"),
    "username" : "website",
    "date" : ISODate("2015-06-05T00:00:00.000-22:00"),
    "recipe" : {
        "_id" : "Pui manastiresc",
        "origin" : {
            "url" : "http://www.culinar.ro/retete/mancaruri/mancaruri-cu-carne/pui-manastiresc/63/4/27293/",
            "language" : "en",
            "image" : "http://www.culinar.ro/retete-upload/pui-manastiresc-800x600-27293.jpg",
            "copyright" : "Culinar.ro"
        },
        "labels" : [ 
            "pui", 
            "o oala"
        ],
        "dish_labels" : [ 
            "fel-principal"
        ],
        "persons" : 4,
        "time" : 90,
        "level" : 1,
        "language" : "ro",
        "ingredients" : [ 
            {
                "for_what" : "pui",
                "list" : [ 
                    {
                        "name" : "pui",
                        "quantity" : 500,
                        "um" : "g",
                        "category" : "carne",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "ciuperci",
                        "quantity" : 300,
                        "um" : "g",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "smantana",
                        "quantity" : 300,
                        "um" : "g",
                        "category" : "lactate",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "unt",
                        "quantity" : 50,
                        "um" : "g",
                        "category" : "lactate",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "ceapa verde",
                        "quantity" : 3,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "usturoi",
                        "quantity" : 3,
                        "um" : "cat",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "bacon",
                        "quantity" : 200,
                        "um" : "g",
                        "category" : "carne",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "vin alb",
                        "quantity" : 200,
                        "um" : "ml",
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "oua",
                        "quantity" : 3,
                        "um" : "buc",
                        "category" : "alte",
                        "comment" : "galbenusuri"
                    }, 
                    {
                        "name" : "piper proaspat macinat",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "sare de mare",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "cimbru",
                        "quantity" : 1,
                        "um" : "leg",
                        "category" : "condimente",
                        "comment" : "proaspat"
                    }
                ]
            }
        ],
        "created" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.962-22:00")
        },
        "modified" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.962-22:00")
        },
        "instructions" : [ 
            {
                "order" : 1,
                "for_what" : "pui",
                "text" : "Cuptor: 180°C. Toaca si caleste ceapa in unt, intr-o oala/tigaie care merge si la cuptor. Dupa 10 min, adauga carnea de pui, cate 5 min pe fiecare parte. Adauga usturoiul pisat si cimbru. Asezoneaza. Pune capac si lasa 15-20 min. "
            }, 
            {
                "order" : 2,
                "for_what" : "restul",
                "text" : "Separat, taie costita afumata si inabuseste-o in unt. Adauga vinul. Taie ciupercile si adauga-le cand vinul s-a evaporat la jumatate, pentru 5 min."
            }, 
            {
                "order" : 3,
                "for_what" : "straturi",
                "text" : "Intr-un vas de yena, pune alternativ carnea de pui si bacon + ciupeci (easupra: ciuperci). Toarna peste smantana de la pui."
            }, 
            {
                "order" : 4,
                "for_what" : "sos",
                "text" : "Zeama de la bacon + galbenusurile --> amesteca. Toarna peste ciuperci."
            }, 
            {
                "order" : 5,
                "for_what" : undefined,
                "text" : "Pune la cuptor 30 min, pana se leaga bine sosul."
            }
        ]
    }
}

); db.planning.insert(
{
    "_id" : ObjectId("556ec141c42ed52e1aa9668b")
}

); db.planning.insert(
{
    "_id" : ObjectId("556ec1a82953b8c31adf3d70")
}

); db.planning.insert(
{
    "_id" : ObjectId("5568d2aca19356e6aa41c057"),
    "username" : "website",
    "date" : ISODate("2015-05-26T00:00:00.000-22:00"),
    "recipe" : {
        "_id" : "Crap la cuptor cu salata de fasole verde",
        "origin" : {
            "url" : "http://www.jamieoliver.com/recipes/vegetables-recipes/good-old-french-bean-salad/",
            "language" : "en",
            "image" : "http://s3-eu-west-1.amazonaws.com/jamieoliverprod/_int/rdb2/upload/233_1_1350898654_lrg.jpg",
            "copyright" : "www.jamieoliver.com"
        },
        "labels" : [ 
            "peste", 
            "fasole verde"
        ],
        "dish_labels" : [ 
            "fel-principal"
        ],
        "persons" : 4,
        "time" : 80,
        "level" : 1,
        "language" : "ro",
        "ingredients" : [ 
            {
                "for_what" : "peste",
                "list" : [ 
                    {
                        "name" : "crap",
                        "quantity" : 2,
                        "um" : "kg",
                        "category" : "peste",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "ceapa",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "morcov",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "lamaie",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "fructe",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "usturoi",
                        "quantity" : 7,
                        "um" : "buc",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "patrunjel",
                        "quantity" : 1,
                        "um" : "leg",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "sare de mare",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "piper proaspat macinat",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "boia",
                        "quantity" : 1,
                        "um" : "Lg",
                        "category" : "condimente",
                        "comment" : "optional"
                    }, 
                    {
                        "name" : "grasime de gatit",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "alte",
                        "comment" : undefined
                    }
                ]
            }, 
            {
                "for_what" : "salata",
                "list" : [ 
                    {
                        "name" : "fasole verde",
                        "quantity" : 1000,
                        "um" : "g",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "mustar",
                        "quantity" : 4,
                        "um" : "Lg",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "otet alb",
                        "quantity" : 2,
                        "um" : "Lg",
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "ulei de masline",
                        "quantity" : 5,
                        "um" : "Lg",
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "sare de mare",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "piper proaspat macinat",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "salota",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : "sau o ceapa mica"
                    }, 
                    {
                        "name" : "capere",
                        "quantity" : 1,
                        "um" : "Lg",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "usturoi",
                        "quantity" : 0.5,
                        "um" : "cat",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "caprifoi",
                        "quantity" : 1,
                        "um" : "mana",
                        "category" : "legume",
                        "comment" : undefined
                    }
                ]
            }
        ],
        "created" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.859-22:00")
        },
        "modified" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.859-22:00")
        },
        "instructions" : [ 
            {
                "order" : 1,
                "for_what" : "peste",
                "text" : "Incalzeste cuptorul la 180°C. Curata si spala crapul. Cresteaza-l pe diagonala. Toaca patrunjelul si taie rondele lamaia si pune-le inauntru si deasupra. Toaca usturoiul si pune-l in crestaturi. Pune deasupra boia. Asezoneaza."
            }, 
            {
                "order" : 2,
                "for_what" : "peste",
                "text" : "Taie morcovul si ceapa si pune-le in tava. Asezoneaza, pune grasimea de gatit si o cana de apa. Pune pestele deasupra si eventual pune grasime de gatit si pe peste, ca sa eviti arderea cozii."
            }, 
            {
                "order" : 3,
                "for_what" : "peste",
                "text" : "Da pestele la cuptor pentru 40-60 min."
            }, 
            {
                "order" : 4,
                "for_what" : "salata",
                "text" : "Intr-o oala mare, pune apa la fiert, la foc mare. Adauga fasolea, pune capacul si lasa-le 4-5 min."
            }, 
            {
                "order" : 5,
                "for_what" : "salata",
                "text" : "Intr-un borcan, pune restul ingredientelor (toaca salota). Pune-i capacul si agita bine => dressing."
            }, 
            {
                "order" : 6,
                "for_what" : "salata",
                "text" : "Strecoara fasolea si cat e calda, amesteca repede cu sosul. Imprastie caprifoi peste."
            }
        ]
    }
}

); db.planning.insert(
{
    "_id" : ObjectId("5568d2aca19356e6aa41c058"),
    "username" : "website",
    "date" : ISODate("2015-05-27T00:00:00.000-22:00"),
    "recipe" : {
        "_id" : "Tocanita de pui cu ghimbir",
        "origin" : {
            "url" : "http://www.canalvie.com/recettes/ragout-de-poulet-1.1071611",
            "language" : "fr",
            "image" : "http://www.canalvie.com/polopoly_fs/1.1102787.1351693767!/image/ragout-poulet-2673.jpg_gen/derivatives/cvbox_410_231/ragout-poulet-2673.jpg",
            "copyright" : "www.canalvie.com"
        },
        "labels" : [ 
            "pui", 
            "tocanita"
        ],
        "dish_labels" : [ 
            "fel-principal"
        ],
        "persons" : 4,
        "time" : 80,
        "level" : 1,
        "language" : "ro",
        "ingredients" : [ 
            {
                "for_what" : "tocanita",
                "list" : [ 
                    {
                        "name" : "usturoi",
                        "quantity" : 3,
                        "um" : "cat",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "ghimbir",
                        "quantity" : 1,
                        "um" : "Lg",
                        "category" : "condimente",
                        "comment" : "dat pe razatoare"
                    }, 
                    {
                        "name" : "coriandru",
                        "quantity" : 1,
                        "um" : "lg",
                        "category" : "condimente",
                        "comment" : "macinat"
                    }, 
                    {
                        "name" : "ardei chilli",
                        "quantity" : 0.3,
                        "um" : "lg",
                        "category" : "condimente",
                        "comment" : "macinat"
                    }, 
                    {
                        "name" : "grasime de gatit",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "pulpe de pui",
                        "quantity" : 4,
                        "um" : "buc",
                        "category" : "carne",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "ceapa",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "morcov",
                        "quantity" : 2,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "varza",
                        "quantity" : 0.25,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "nap",
                        "quantity" : 0.25,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "frunze de telina",
                        "quantity" : 2,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "cartofi",
                        "quantity" : 100,
                        "um" : "g",
                        "category" : "legume",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "supa de pui",
                        "quantity" : 1000,
                        "um" : "ml",
                        "category" : "alte",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "sos de soia",
                        "quantity" : 1,
                        "um" : "Lg",
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "sare de mare",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "piper proaspat macinat",
                        "quantity" : undefined,
                        "um" : undefined,
                        "category" : "condimente",
                        "comment" : undefined
                    }, 
                    {
                        "name" : "anason stelat",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "condimente",
                        "comment" : undefined
                    }
                ]
            }
        ],
        "created" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.865-22:00")
        },
        "modified" : {
            "user" : "migrate",
            "date" : ISODate("2015-05-28T22:57:16.865-22:00")
        },
        "instructions" : [ 
            {
                "order" : 1,
                "for_what" : undefined,
                "text" : "Intr-o oala mai mare, caleste usturoiul, ghimbirul si celelalte condimente, in afara de anasonul stelat. Adauga pulpele de pui 1 minut pe fiecare parte si scoate-l din oala."
            }, 
            {
                "order" : 2,
                "for_what" : undefined,
                "text" : "Toaca legumele. Adauga-le in oala. Mai pune grasime de gatit. Lasa-le 3 min."
            }, 
            {
                "order" : 3,
                "for_what" : undefined,
                "text" : "Adauaga ingredientele lichide, sare, piper si anason. Pune apa doar cat sa acopere legumele. Pune puiul peste, acopera cu un capac si adu totul la punctul de fierbere. Da focul mai incet si lasa sa fiarba incet 1 ora, sau pana cand e gata puiul si sosul are consistenta dorita."
            }
        ]
    }
}

); db.planning.insert(
{
    "_id" : ObjectId("556e106882698c701277f042"),
    "dateString" : "10/06/2015",
    "recipe" : {
        "origin" : {
            "language" : "en",
            "url" : "http://foodsweatandtears.com/2012/04/21/jamies-tray-baked-chicken-squashed-potatoes-creamed-spinah-and-strawberry-slushie/",
            "copyright" : "Jamie Oliver",
            "image" : "http://farm6.staticflickr.com/5239/6953012350_70b494aa67_z.jpg"
        },
        "level" : 1,
        "persons" : 4,
        "language" : "ro",
        "ingredients" : [ 
            {
                "list" : [ 
                    {
                        "quantity" : 350,
                        "um" : "g",
                        "name" : "cartofi",
                        "category" : "legume",
                        "comment" : "noi"
                    }, 
                    {
                        "name" : "rozmarin",
                        "quantity" : 2,
                        "um" : "creng",
                        "category" : "condimente",
                        "comment" : "proaspat"
                    }, 
                    {
                        "name" : "frunze de dafin",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "condimente"
                    }, 
                    {
                        "name" : "usturoi",
                        "quantity" : 3,
                        "um" : "cat",
                        "category" : "condimente"
                    }
                ],
                "for_what" : "cartofi"
            }, 
            {
                "for_what" : "spanac",
                "list" : [ 
                    {
                        "name" : "ceapa verde",
                        "quantity" : 6,
                        "um" : "buc",
                        "category" : "condimente"
                    }, 
                    {
                        "name" : "usturoi",
                        "quantity" : 1,
                        "um" : "cat",
                        "category" : "condimente"
                    }, 
                    {
                        "name" : "cimbru",
                        "quantity" : 0.5,
                        "um" : "leg",
                        "category" : "condimente"
                    }, 
                    {
                        "name" : "nucsoara",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "condimente"
                    }, 
                    {
                        "name" : "unt",
                        "quantity" : 20,
                        "um" : "g",
                        "category" : "lactate"
                    }, 
                    {
                        "name" : "spanac",
                        "quantity" : 300,
                        "um" : "g",
                        "category" : "legume",
                        "comment" : "mic"
                    }, 
                    {
                        "name" : "smantana",
                        "quantity" : 50,
                        "um" : "g",
                        "category" : "lactate"
                    }, 
                    {
                        "name" : "parmezan",
                        "quantity" : 25,
                        "um" : "g",
                        "category" : "lactate"
                    }
                ]
            }, 
            {
                "for_what" : "pui",
                "list" : [ 
                    {
                        "name" : "oregano",
                        "quantity" : 1,
                        "um" : "Lg",
                        "category" : "condimente",
                        "comment" : "uscat"
                    }, 
                    {
                        "name" : "piept de pui",
                        "quantity" : 2,
                        "um" : "buc",
                        "category" : "carne"
                    }, 
                    {
                        "name" : "lamaie",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "fructe"
                    }, 
                    {
                        "name" : "rosii mici",
                        "quantity" : 100,
                        "um" : "g",
                        "category" : "legume",
                        "comment" : "cu crenguta"
                    }, 
                    {
                        "name" : "bacon",
                        "quantity" : 50,
                        "um" : "g",
                        "category" : "carne"
                    }, 
                    {
                        "name" : "rozmarin",
                        "quantity" : 2,
                        "um" : "creng",
                        "category" : "condimente"
                    }, 
                    {
                        "name" : "boia dulce",
                        "quantity" : 1,
                        "um" : "Lg",
                        "category" : "condimente"
                    }
                ]
            }
        ],
        "instructions" : [ 
            {
                "order" : 0,
                "for_what" : "cartofi",
                "text" : "Cuptor: 180°C. Taie cartofii mai mari in jumatate, ca sa fie toti cam de aceeasi dimensiune, sa fiarba in 15 min."
            }, 
            {
                "order" : 1,
                "for_what" : "spanac",
                "text" : "Toaca ceapa verde si usturoiul si caleste-le in unt. Adauga usturoiul tocat, cimbrul si un pic de nucsoara + un pic de apa fierbinte. Lasa asa 3 min."
            }, 
            {
                "order" : 2,
                "for_what" : "pui",
                "text" : "Pune tigaia la incins. Pe o hartie de copt pune oregano, boia, sare si piper + un pic de ulei de masline. Acopera bine carnea de pui cu amestecul de condimente. Pune-o apoi in tigaie, cu untul, pana cand e aurie pe ambele parti (aprox 5 min)."
            }, 
            {
                "order" : 3,
                "for_what" : "spanac",
                "text" : "Pune spanacul in tigaie, eventual in etape."
            }, 
            {
                "order" : 4,
                "text" : "Intr-o tava de cuptor, pune puiu, rosiile si lamaia taiata in 4. Pune cate o felie de bacon e fiecare piept de pui si rozmarinul deasupra. Apoi la cuptor pentru 5 min.",
                "for_what" : "pui"
            }, 
            {
                "order" : 5,
                "for_what" : "spanac",
                "text" : "Amesteca din cand in cand. Daca pare uscat, adauga o lingura de apa."
            }, 
            {
                "order" : 6,
                "for_what" : "cartofi",
                "text" : "Pune-i intr-o tigaie mare, cu un pic de unt, usturoi, rozmarin si frunza de dafin. Zdobeste-i si agita-i din cand in cand, pentru urmatoarele 10 min."
            }, 
            {
                "order" : 7,
                "text" : "10 minute libere. Strange in bucatarie"
            }, 
            {
                "order" : 8,
                "for_what" : "spanac",
                "text" : "Da focul mic, adauga smantana si parmezanul ras. Amesteca bine"
            }, 
            {
                "order" : 9,
                "for_what" : "pui",
                "text" : "Scoate puiul si verifica-l. Cartofii, apoi spanacul."
            }
        ],
        "_id" : "Pui la cuptor cu rosii si bacon, cartofi si spanac cremos",
        "labels" : [ 
            "spanac", 
            " bacon", 
            " pui"
        ],
        "dish_labels" : [ 
            "fel-principal"
        ],
        "time" : 30,
        "username" : "website",
        "created" : {
            "user" : "website",
            "date" : ISODate("2015-06-01T22:22:00.571-22:00")
        },
        "modified" : {
            "user" : "website",
            "date" : ISODate("2015-06-01T22:22:00.571-22:00")
        }
    },
    "username" : "website",
    "created" : {
        "user" : "website",
        "date" : ISODate("2015-06-01T22:22:00.587-22:00")
    },
    "modified" : {
        "user" : "website",
        "date" : ISODate("2015-06-01T22:22:00.587-22:00")
    },
    "date" : ISODate("2015-06-09T00:00:00.000-22:00")
}

); db.planning.insert(
{
    "_id" : ObjectId("556ec44675c308d5decd24b2"),
    "username" : "website",
    "date" : ISODate("2015-06-10T00:00:00.000-22:00"),
    "recipe" : {
        "_id" : "Mihalț sau peste undițar cu sos de masline, telina si piure",
        "origin" : {
            "language" : "en",
            "url" : "http://www.jamieoliver.com/recipes/fish-recipes/grilled-or-roasted-monkfish-with-black-olive-sauce-and-lemon-mash",
            "copyright" : "Jamie Oliver",
            "image" : "http://s3-eu-west-1.amazonaws.com/jamieoliverprod/_int/rdb2/upload/256_1_1349092582_lrg.jpg"
        },
        "level" : 1,
        "persons" : 4,
        "language" : "ro",
        "ingredients" : [ 
            {
                "for_what" : "peste",
                "list" : [ 
                    {
                        "name" : "lamaie",
                        "quantity" : 2,
                        "um" : "buc",
                        "category" : "fructe",
                        "comment" : "coaja si suc"
                    }, 
                    {
                        "name" : "rozmarin",
                        "quantity" : 1,
                        "um" : "creng",
                        "category" : "condimente",
                        "comment" : "doar frunzele"
                    }, 
                    {
                        "name" : "mihalț",
                        "quantity" : 800,
                        "um" : "g",
                        "category" : "peste",
                        "comment" : "file"
                    }
                ]
            }, 
            {
                "for_what" : "sos",
                "list" : [ 
                    {
                        "name" : "masline negre",
                        "quantity" : 200,
                        "um" : "g",
                        "category" : "condimente"
                    }, 
                    {
                        "name" : "ardei iute rosu",
                        "quantity" : 0.5,
                        "um" : "buc",
                        "category" : "condimente"
                    }, 
                    {
                        "name" : "busuioc",
                        "quantity" : 0.5,
                        "um" : "leg",
                        "category" : "condimente",
                        "comment" : "proaspat"
                    }, 
                    {
                        "name" : "maghiran",
                        "quantity" : 0.5,
                        "um" : "leg",
                        "category" : "condimente",
                        "comment" : "proaspat"
                    }, 
                    {
                        "name" : "patrunjel",
                        "quantity" : 0.5,
                        "um" : "leg",
                        "category" : "condimente",
                        "comment" : "proaspat"
                    }, 
                    {
                        "name" : "tulpina de telina",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "legume"
                    }, 
                    {
                        "name" : "usturoi",
                        "quantity" : 1,
                        "um" : "cat",
                        "category" : "condimente"
                    }, 
                    {
                        "name" : "lamaie",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "fructe",
                        "comment" : "suc"
                    }, 
                    {
                        "name" : "piper",
                        "category" : "condimente",
                        "comment" : "proaspat macinat"
                    }, 
                    {
                        "name" : "ulei de masline",
                        "quantity" : 2,
                        "um" : "Lg",
                        "category" : "alte"
                    }, 
                    {
                        "name" : "otet balsamic",
                        "category" : "alte"
                    }
                ]
            }, 
            {
                "list" : [ 
                    {
                        "name" : "cartofi",
                        "quantity" : 1000,
                        "um" : "g",
                        "category" : "legume"
                    }, 
                    {
                        "name" : "sare de mare",
                        "category" : "condimente"
                    }, 
                    {
                        "name" : "unt",
                        "quantity" : 30,
                        "um" : "g",
                        "category" : "lactate"
                    }, 
                    {
                        "name" : "lapte",
                        "quantity" : 100,
                        "um" : "ml",
                        "category" : "lactate"
                    }, 
                    {
                        "name" : "lamaie",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "fructe",
                        "comment" : "suc"
                    }
                ]
            }
        ],
        "instructions" : [ 
            {
                "order" : 0,
                "for_what" : "peste",
                "text" : "Intr-un mojar, zdrobeste 2 lg de sare cu coaja de lamaie si rozmarinul. Cu asta, freaca bine pestele. Pune-l in frigider pentru 1 ora."
            }, 
            {
                "order" : 1,
                "for_what" : "sos",
                "text" : "Amesteca toate ingredientele la robot, mai putin otetul balsamic => sos cu bucati mai mari. Adauga si otetul cate un pic, dupa gust."
            }, 
            {
                "order" : 2,
                "for_what" : "peste",
                "text" : "Cuptor: 220°C (foc mare), cu 20 minute inainte sa scoti pestele din frigider. Cu niste servetele de bucatarie, absoarbe apa din peste si freaca-l cu un pic de ulei de masline."
            }, 
            {
                "order" : 3,
                "for_what" : "cartofi",
                "text" : "Curata si taie cartofii. Pune-i intr-o oala cu apa sarata, clocotita. Cand sunt gata, strecoara-i si zbrobeste-i => piure. Adauga untul, laptele, sucul de lamaie si asezoneaza."
            }, 
            {
                "order" : 4,
                "for_what" : "peste",
                "text" : "Intr-un pic de grasime de gatit, pune pestele sa se rumeneasca 1 minut pe fiecare parte. Pune apoi in cuptor 6-8 min, in functie de grosimea fileurilor."
            }
        ],
        "story" : "Peste carnos cu sos mediteranean. De obicei facem sos dublu, se potriveste atat de bine cu piureul si pestele.",
        "labels" : [ 
            "peste"
        ],
        "dish_labels" : [ 
            "fel-principal"
        ],
        "time" : 50,
        "username" : "website",
        "created" : {
            "user" : "website",
            "date" : ISODate("2015-06-01T23:09:38.960-22:00")
        },
        "modified" : {
            "user" : "website",
            "date" : ISODate("2015-06-01T23:09:38.960-22:00")
        }
    }
}

); db.planning.insert(
{
    "_id" : ObjectId("556ec9e5ec46fe161fee4154"),
    "dateString" : "13/06/2015",
    "recipe" : {
        "origin" : {
            "language" : "en",
            "url" : "http://www.jamieoliver.com/recipes/lamb-recipes/best-lamb-cutlets-with-special-basil-sauce/",
            "copyright" : "Jamie Oliver",
            "image" : "http://s3-eu-west-1.amazonaws.com/jamieoliverprod/_int/rdb2/upload/79_1_1350894982_lrg.jpg"
        },
        "level" : 1,
        "persons" : 4,
        "language" : "ro",
        "ingredients" : [ 
            {
                "for_what" : "miel",
                "list" : [ 
                    {
                        "name" : "cotlet de miel",
                        "quantity" : 12,
                        "um" : "buc",
                        "category" : "carne"
                    }, 
                    {
                        "name" : "cimbru",
                        "quantity" : 0.5,
                        "um" : "leg",
                        "category" : "condimente"
                    }, 
                    {
                        "name" : "ulei de masline",
                        "comment" : "",
                        "category" : "alte"
                    }, 
                    {
                        "name" : "sare de mare",
                        "category" : "condimente"
                    }, 
                    {
                        "name" : "piper",
                        "category" : "condimente",
                        "comment" : "proaspat macinat"
                    }, 
                    {
                        "name" : "patrunjel",
                        "quantity" : 0.5,
                        "um" : "leg",
                        "category" : "condimente"
                    }, 
                    {
                        "name" : "lamaie",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "fructe",
                        "comment" : "suc"
                    }
                ]
            }, 
            {
                "for_what" : "ciuperci",
                "list" : [ 
                    {
                        "name" : "ciuperci",
                        "quantity" : 400,
                        "um" : "g",
                        "category" : "legume",
                        "comment" : "spalate si rupte"
                    }
                ]
            }, 
            {
                "for_what" : "sos",
                "list" : [ 
                    {
                        "name" : "busuioc",
                        "quantity" : 2,
                        "um" : "leg",
                        "category" : "condimente"
                    }, 
                    {
                        "name" : "seminte de pin",
                        "quantity" : 100,
                        "um" : "g",
                        "category" : "alte"
                    }, 
                    {
                        "name" : "otet balsamic",
                        "quantity" : 5,
                        "um" : "Lg",
                        "category" : "alte",
                        "comment" : "3-5 Lg"
                    }
                ]
            }
        ],
        "instructions" : [ 
            {
                "order" : 0,
                "for_what" : "miel",
                "text" : "Bate un pic cotletele cu pumnul sa le aplatizezi un pic. Zdrobeste cimbrul in mortar si amesteca cu ulei de masline. Freaca cu asta carnea, si asezoneaza. Pune deoparte."
            }, 
            {
                "order" : 1,
                "for_what" : "ciuperci",
                "text" : "Pune-le pe gratar cat sa se coloreze usor, apoi aseaza-le intr-un vas."
            }, 
            {
                "order" : 2,
                "for_what" : "miel",
                "text" : "Pune carnea pe gratar. Pentru cotlete de 1.5cm grosime, lasa-le cam 3-4 min pe fiecare parte, pana cand se fac aurii. Cand sunt gata, aseza cotletele langa ciuperci, stropeste cu ulei de masline si agita-le"
            }, 
            {
                "order" : 3,
                "for_what" : "sos",
                "text" : "Intr-un mortar, zdrobeste cu pistilul semintele de pin pana cand se fac pasta. Pune deoparte. Zdrobeste bine busuiocul, amesteca-l cu semintele de pin si subtiaza sosul cu ulei de masline. Pune otet balsamic astfel incat sosul sa aiba un accent puternic."
            }, 
            {
                "order" : 4,
                "for_what" : "miel",
                "text" : "Amesteca inca o data mielul cu ciupercile si marinata."
            }
        ],
        "_id" : "Cotlet de miel cu sos racoritor de busioc, la gratar",
        "story" : "Miel rapid",
        "labels" : [ 
            "miel", 
            " ciuperci"
        ],
        "dish_labels" : [ 
            "gratar", 
            " fel-principal"
        ],
        "time" : 20,
        "username" : "website",
        "created" : {
            "user" : "website",
            "date" : ISODate("2015-06-02T11:33:25.667-22:00")
        },
        "modified" : {
            "user" : "website",
            "date" : ISODate("2015-06-02T11:33:25.667-22:00")
        }
    },
    "username" : "website",
    "created" : {
        "user" : "website",
        "date" : ISODate("2015-06-02T11:33:25.672-22:00")
    },
    "modified" : {
        "user" : "website",
        "date" : ISODate("2015-06-02T11:33:25.672-22:00")
    },
    "date" : ISODate("2015-06-12T00:00:00.000-22:00")
}

); db.planning.insert(
{
    "_id" : ObjectId("556f688ccbd515ca0d6b7638"),
    "dateString" : "14/06/2015",
    "recipe" : {
        "origin" : {
            "language" : "en",
            "url" : "http://www.craftsy.com/class/perfect-pizza-at-home/186?_ct=iuqhsx-kdyluhiqb-huikbj-sekhiu&_ctp=186",
            "copyright" : "Craftsy",
            "image" : "http://cdn.craftsy.com/course/186/titleCard.jpg"
        },
        "level" : 1,
        "persons" : 4,
        "language" : "ro",
        "ingredients" : [ 
            {
                "for_what" : "pizza",
                "list" : [ 
                    {
                        "name" : "faina",
                        "quantity" : 638,
                        "um" : "g",
                        "category" : "brutarie",
                        "comment" : "intermediara"
                    }, 
                    {
                        "name" : "sare de mare",
                        "quantity" : 14,
                        "um" : "g",
                        "category" : "condimente"
                    }, 
                    {
                        "name" : "drojdie",
                        "quantity" : 5,
                        "um" : "g",
                        "category" : "brutarie"
                    }, 
                    {
                        "name" : "apa",
                        "quantity" : 397,
                        "um" : "ml",
                        "category" : "alte"
                    }, 
                    {
                        "name" : "topping pentru pizza",
                        "comment" : "inspiratie sau resturi din frigider",
                        "category" : "alte"
                    }, 
                    {
                        "name" : "ulei de masline",
                        "category" : "alte",
                        "comment" : "un pic, pentru suprafata de lucru"
                    }
                ]
            }
        ],
        "instructions" : [ 
            {
                "order" : 0,
                "text" : "Amesteca ingredientele uscate intr-un vas mare. Adauga apa si amesteca cu o lingura mare de lemn, pana devine omogen si hidratat, cam 1-2min. Lasa aluatul sa se odihneasca 1-5min."
            }, 
            {
                "order" : 1,
                "text" : "Framanta 1-2 min, pana cand aluatul devine moale, suplu si lipicios la atingere."
            }, 
            {
                "order" : 2,
                "text" : "Pe suprafata de lucru, pune un pic de ulei de masline, si transfera aluatul deasupra. Intinde si impatureste aluatul => o minge. Pune-l intr-un vas uns cu ulei si acopera-l."
            }, 
            {
                "order" : 3,
                "text" : "Mai fa 3 intinderi si impaturiri (strech & fold), la interval de 5 min. Dupa fiecare ciclu, aluatul devine mai ferm si mai putin lipicios."
            }, 
            {
                "order" : 4,
                "text" : "Dupa tura finala, pune-l intr-un vas mai mare si acopera-l. Pune-l la frigider (foloseste-l in max 3 zile)."
            }
        ],
        "_id" : "Pizza",
        "story" : "Clasic si versatil",
        "labels" : [ 
            "pizza"
        ],
        "dish_labels" : [ 
            "fel-principal", 
            " picnis"
        ],
        "time" : 60,
        "username" : "website",
        "created" : {
            "user" : "website",
            "date" : ISODate("2015-06-02T22:50:19.755-22:00")
        },
        "modified" : {
            "user" : "website",
            "date" : ISODate("2015-06-02T22:50:19.755-22:00")
        }
    },
    "username" : "website",
    "created" : {
        "user" : "website",
        "date" : ISODate("2015-06-02T22:50:19.784-22:00")
    },
    "modified" : {
        "user" : "website",
        "date" : ISODate("2015-06-02T22:50:19.784-22:00")
    },
    "date" : ISODate("2015-06-13T00:00:00.000-22:00")
}

); db.planning.insert(
{
    "_id" : ObjectId("5574b1474e5eb96582d82b69"),
    "username" : "website",
    "date" : ISODate("2015-06-08T00:00:00.000-22:00"),
    "recipe" : {
        "_id" : "Paste cu sos pesto",
        "origin" : {
            "language" : "en",
            "url" : "http://www.jamieoliver.com/recipes/vegetables-recipes/pesto/#hZcYZT6JiHEuzOtk.97",
            "copyright" : "Jamie Oliver",
            "image" : "http://s3-eu-west-1.amazonaws.com/jamieoliverprod/_int/rdb2/upload/392_1_1350903806_lrg.jpg"
        },
        "level" : 1,
        "persons" : 4,
        "language" : "ro",
        "ingredients" : [ 
            {
                "for_what" : "sos",
                "list" : [ 
                    {
                        "name" : "usturoi",
                        "quantity" : 1,
                        "um" : "cat",
                        "category" : "condimente"
                    }, 
                    {
                        "name" : "busuioc",
                        "quantity" : 3,
                        "um" : "leg",
                        "category" : "condimente"
                    }, 
                    {
                        "name" : "seminte de pin",
                        "quantity" : 100,
                        "um" : "g",
                        "category" : "condimente",
                        "comment" : "usor prajite"
                    }, 
                    {
                        "name" : "parmezan",
                        "quantity" : 75,
                        "um" : "g",
                        "category" : "lactate",
                        "comment" : "proaspat ras"
                    }, 
                    {
                        "name" : "ulei de masline",
                        "category" : "alte"
                    }, 
                    {
                        "name" : "lamaie",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "fructe",
                        "comment" : "optional"
                    }, 
                    {
                        "name" : "piper",
                        "category" : "condimente",
                        "comment" : "proaspat macinat"
                    }
                ]
            }, 
            {
                "for_what" : "paste",
                "list" : [ 
                    {
                        "name" : "paste",
                        "quantity" : 400,
                        "um" : "g",
                        "category" : "alte"
                    }, 
                    {
                        "name" : "grasime de gatit",
                        "category" : "alte"
                    }, 
                    {
                        "name" : "sare de mare",
                        "category" : "condimente"
                    }
                ]
            }
        ],
        "instructions" : [ 
            {
                "order" : 0,
                "for_what" : "paste",
                "text" : "Pune o oala pe foc tare, cu un pic de apa si capac. Da drumul la fierbatorul plin cu apa. Cand clocoteste apa, pune-o in oala, adauga un pic de grasime de gatit si sare + pastele. Lasa-le la fiert cat scrie pe pachet, mai putin 2 min."
            }, 
            {
                "order" : 1,
                "for_what" : "sos",
                "text" : "Prajeste un pic semintele de pin, intr-o tigaie, pana se fac un pic maro."
            }, 
            {
                "order" : 2,
                "for_what" : "sos",
                "text" : "Pune frunzele de busuioc, jumatate de parmezan, usturoiul si uleiul intr-un vas inalt si amesteca bine cu blenderul. Adauga semintele de pin, maruntind din nou. Adauga la sfarsit, doar amestecand cu o lingura, restul de parmezan. Toarna sucul de lamaie, dupa gust."
            }, 
            {
                "order" : 3,
                "for_what" : "paste",
                "text" : "Strecoara pastele si toarna sosul peste."
            }
        ],
        "story" : "Picant, proaspat si rapid",
        "labels" : [ 
            "paste", 
            " sos raw"
        ],
        "dish_labels" : [ 
            "picnic", 
            " fel-principal"
        ],
        "time" : 15,
        "username" : "website",
        "created" : {
            "user" : "website",
            "date" : ISODate("2015-06-01T13:03:28.346-22:00")
        },
        "modified" : {
            "user" : "website",
            "date" : ISODate("2015-06-01T13:03:28.346-22:00")
        }
    }
}
); 