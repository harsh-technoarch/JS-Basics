var test = []
console.log("Test Array : ", test);
test.push(1, 2, 3, 4, 5);
console.log("Value Pushed in Test Array", test);
var test2 = [];
console.log("Test2 Array",test2);
test2.push(6, 7, 8, 9, 0);
console.log("Value Pushed in Test2 Array", test2);
var result = test.concat(test2);
console.log("The concatenated Array",result);
