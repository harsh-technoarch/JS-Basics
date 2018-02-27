var result = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]

var found = result.find(function(elm){
    return (elm) > 6;
});
console.log("The value found is :",found);
