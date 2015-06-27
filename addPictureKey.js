// use plandemasa

var recipeImagesPath = '/assets/recipes/';
var filenameSeparator = '_';
var width = 250;
var height = 300;

function getImagefile(type, filename, width, height, ext) {
    return recipeImagesPath + filename + filenameSeparator + width + filenameSeparator + height + (type ? (filenameSeparator + type) : '') + '.' + ext;
}


db.recipes.find({title: "Chiftelute cu mozzarella"}).forEach(function(data) {
    print(data._id);
    if (data.image) {
        var spl = data.image.split('.');
        var ext = _.last(spl); //extension
        var filename = _.initial(spl);
        data.picture = {
            sm: getImagefile('sm', filename, width, height, ext),
            md: getImagefile('md', filename, width, height, ext),
            lg: getImagefile('lg', filename, width, height, ext),
            gt_lg: getImagefile('gt_lg', filename, width, height, ext)
        };
        data.image = getImagefile(filename, width, height, ext);
        // console.log(data.title, data.picture);
    }
    //else just return remote image 
    else {
        data.image = data.origin.image;
    }

    if (data.picture) print(data.picture.sm);
    // else print(data.image);

    db.recipes.update({
        _id: data._id
    }, {
        "$set": {
            picture: data.picture
        }
    });
});
