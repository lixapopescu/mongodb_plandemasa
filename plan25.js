db.recipes.insert(
{
    "_id" : "Chiftelute de peste la cuptor",
    "origin" : {
        "language" : "en"
    },
    "level" : 1,
    "persons" : 4,
    "language" : "ro",
    "ingredients" : [ 
        {
            "for_what" : "chiftelute",
            "list" : [ 
                {
                    "name" : "peste alb",
                    "quantity" : 800,
                    "um" : "g",
                    "category" : "peste"
                }, 
                {
                    "name" : "morcovi",
                    "quantity" : 4,
                    "um" : "buc",
                    "category" : "legume"
                }, 
                {
                    "name" : "dovlecel",
                    "quantity" : 1,
                    "um" : "buc",
                    "category" : "legume",
                    "comment" : "mai mare"
                }, 
                {
                    "name" : "ceapa",
                    "quantity" : 1,
                    "um" : "buc",
                    "category" : "legume",
                    "comment" : "mai mare"
                }, 
                {
                    "name" : "lamaie",
                    "quantity" : 2,
                    "um" : "buc",
                    "category" : "fructe",
                    "comment" : "suc si coaja"
                }, 
                {
                    "name" : "bicarbonat de sodiu",
                    "quantity" : 1,
                    "um" : "Lg",
                    "category" : "alte",
                    "comment" : "optional"
                }, 
                {
                    "name" : "oua",
                    "quantity" : 3,
                    "um" : "buc",
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
            "text" : "Cuptor: 220°C. Intr-o tigaie, pune grasimea de gatit, la foc mediu. Curata legumele (ceapa, morcov, dovlecel, usturoi) si toaca-le la robot, apoi pune-le la calit 10 min."
        }, 
        {
            "order" : 1,
            "text" : "Pune pestele in robot si toca-l (eu prefer mai marunt) la robot. Intr-un vas mare, amesteca-l cu ouale si sarea."
        }, 
        {
            "order" : 2,
            "text" : "Varsa legumele calite in vasul cu peste si amesteca omogen. Formeaza bilute, pune-le pe o tava cu hartie de copt si pune-le la cuptor 7 min."
        }
    ],
    "story" : "Usoare si rapide",
    "labels" : [ 
        "peste", 
        " legume ascunse"
    ],
    "dish_labels" : [ 
        "picnic", 
        " fel-principal"
    ],
    "image" : "/assets/images/recipes/chiftelute_peste_cuptor.jpg",
    "time" : 25,
    "username" : "website",
    "created" : {
        "user" : "website",
        "date" : ISODate("2015-06-13T22:19:08.464+02:00")
    },
    "modified" : {
        "user" : "website",
        "date" : ISODate("2015-06-13T22:19:08.464+02:00")
    }
});

db.planning.insert(
{
    "_id" : ObjectId("557c903c364b968e06e9dddd"),
    "dateString" : "21/06/2015",
    "recipe" : {
        "origin" : {
            "language" : "en"
        },
        "level" : 1,
        "persons" : 4,
        "language" : "ro",
        "ingredients" : [ 
            {
                "for_what" : "chiftelute",
                "list" : [ 
                    {
                        "name" : "peste alb",
                        "quantity" : 800,
                        "um" : "g",
                        "category" : "peste"
                    }, 
                    {
                        "name" : "morcovi",
                        "quantity" : 4,
                        "um" : "buc",
                        "category" : "legume"
                    }, 
                    {
                        "name" : "dovlecel",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : "mai mare"
                    }, 
                    {
                        "name" : "ceapa",
                        "quantity" : 1,
                        "um" : "buc",
                        "category" : "legume",
                        "comment" : "mai mare"
                    }, 
                    {
                        "name" : "lamaie",
                        "quantity" : 2,
                        "um" : "buc",
                        "category" : "fructe",
                        "comment" : "suc si coaja"
                    }, 
                    {
                        "name" : "bicarbonat de sodiu",
                        "quantity" : 1,
                        "um" : "Lg",
                        "category" : "alte",
                        "comment" : "optional"
                    }, 
                    {
                        "name" : "oua",
                        "quantity" : 3,
                        "um" : "buc",
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
                "text" : "Cuptor: 220°C. Intr-o tigaie, pune grasimea de gatit, la foc mediu. Curata legumele (ceapa, morcov, dovlecel, usturoi) si toaca-le la robot, apoi pune-le la calit 10 min."
            }, 
            {
                "order" : 1,
                "text" : "Pune pestele in robot si toca-l (eu prefer mai marunt) la robot. Intr-un vas mare, amesteca-l cu ouale si sarea."
            }, 
            {
                "order" : 2,
                "text" : "Varsa legumele calite in vasul cu peste si amesteca omogen. Formeaza bilute, pune-le pe o tava cu hartie de copt si pune-le la cuptor 7 min."
            }
        ],
        "_id" : "Chiftelute de peste la cuptor",
        "story" : "Usoare si rapide",
        "labels" : [ 
            "peste", 
            " legume ascunse"
        ],
        "dish_labels" : [ 
            "picnic", 
            " fel-principal"
        ],
        "image" : "/assets/images/recipes/chiftelute_peste_cuptor.jpg",
        "time" : 25,
        "username" : "website",
        "created" : {
            "user" : "website",
            "date" : ISODate("2015-06-13T22:19:08.464+02:00")
        },
        "modified" : {
            "user" : "website",
            "date" : ISODate("2015-06-13T22:19:08.464+02:00")
        }
    },
    "username" : "website",
    "created" : {
        "user" : "website",
        "date" : ISODate("2015-06-13T22:19:08.470+02:00")
    },
    "modified" : {
        "user" : "website",
        "date" : ISODate("2015-06-13T22:19:08.470+02:00")
    },
    "date" : ISODate("2015-06-21T00:00:00.000+02:00")
});