// use plandemasa

var recipeImagesPath = '/assets/recipes/';
var filenameSeparator = '_';
var width = 250;
var height = 300;

function getImagefile(type, filename, width, height, ext) {
    return recipeImagesPath + filename + filenameSeparator + width + filenameSeparator + height + (type ? (filenameSeparator + type) : '') + '.' + ext;
}

print('------------unset---------------');
db.planning.update({}, {
    "$unset": {
        "recipe.picture": 1,
        "title": 1,
        "recipe.imageDefault": 1
    }
});
db.recipe.update({}, {
    "$unset": {
        "picture": 1,
        "imageDefault": 1
    }
});


print('------------planning------------');
db.planning.find().forEach(function(data) {
    // print(data.recipe._id);
    if (data.recipe.image) {
        var spl = data.recipe.image.split('.');
        var ext = _.last(spl); //extension
        var filename = _.initial(spl);
        data.recipe.picture = {
            sm: getImagefile('sm', filename, width, height, ext),
            md: getImagefile('md', filename, width, height, ext),
            lg: getImagefile('lg', filename, width, height, ext),
            gt_lg: getImagefile('gt_lg', filename, width, height, ext),
            def: getImagefile(null, filename, width, height, ext)
        };
        data.recipe.imageDefault = data.recipe.picture.def;

        print(data.recipe.picture.def);

        db.planning.update({
            _id: data._id
        }, {
            "$set": {
                "recipe.picture": data.recipe.picture
            }
        });
    } else {
        data.recipe.imageDefault = data.recipe.origin.image;
    }

    db.planning.update({
        _id: data._id
    }, {
        "$set": {
            "recipe.imageDefault": data.recipe.imageDefault
        }
    });
});

print('------------recipes------------');
db.recipes.find().forEach(function(data) {
    // print(data._id);
    if (data.image) {
        var spl = data.image.split('.');
        var ext = _.last(spl); //extension
        var filename = _.initial(spl);
        data.picture = {
            sm: getImagefile('sm', filename, width, height, ext),
            md: getImagefile('md', filename, width, height, ext),
            lg: getImagefile('lg', filename, width, height, ext),
            gt_lg: getImagefile('gt_lg', filename, width, height, ext),
            def: getImagefile(null, filename, width, height, ext)
        };
        data.imageDefault = data.picture.def;

        print(data.picture.def);
        db.recipes.update({
            _id: data._id
        }, {
            "$set": {
                picture: data.picture
            }
        });
    } else {
        data.imageDefault = data.origin.image;
    }

    db.recipes.update({
        _id: data._id
    }, {
        "$set": {
            imageDefault: data.imageDefault
        }
    });
});
