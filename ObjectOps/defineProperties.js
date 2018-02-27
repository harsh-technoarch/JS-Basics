const obj = {};

Object.defineProperties(obj , {
    property1 : {
        value : 45,
        writable: true
    },
    property2 : {}
});
console.log(obj.property1);