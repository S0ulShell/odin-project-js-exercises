const getTheTitles = function(array) {
    
    let titles = [];

    array.forEach(function (arrayItem) {
        titles.push(arrayItem.title);
        console.log(titles);
    });
    return  titles;
};

// Do not edit below this line
module.exports = getTheTitles;
