var test = [
    1,
    "mon",
    2,
    "tue",
    3,
    "wed",
    4,
    "thur",
    5,
    "sat",
    6,
    "sun"
];
console.log("Initial Array", test); 

test.splice(2,0,"fri");
console.log("Adding in Existing Array",test);
test.splice(2,1,"sun");
console.log("one element at given Index",test);
test.splice(2,2,"fri");
console.log("Deleting one element",test);
// ("index" , "no, of elements to be deleted", "value");