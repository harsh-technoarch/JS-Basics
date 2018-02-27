function shape(){
    this.name = "Round";
}

function Rectangle(){
    shape.call(this);
}

Rectangle.prototype = Object.create(shape.prototype);
const rect = new Rectangle();
console.log(rect.name);