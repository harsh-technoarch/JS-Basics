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
    "fri",
    6,
    "sat",
    7,
    "sun",
    8,
    "first",
    9,
    "last",
    0
];
console.log(test);
var dex = test.indexOf("fri");
console.log(dex);
// With Specific Index // Now it will find the index after the 10th index of this array
test.push("fri");
console.log(test);
var dex = test.indexOf("fri",10);
console.log(dex);