var result = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]

    function LargestNo(elm){
     return (elm) > 6;
}
var found = result.findIndex(LargestNo);
console.log("The index on which the No is : ",found);

