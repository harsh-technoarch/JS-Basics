var obj1 = {
    id: 1,
    name: 'Harsh',
    list: {
      a: "Apple",
      b: "banana",
      c: "carrot",
      d: "Dry Furit"
    }
    
  };
  
  var obj2 = {
    id: 2,
    name: 'Abhi',
    fn: function(){
      let newObj = JSON.parse(JSON.stringify(obj1));
      console.log(Object.assign(obj2 , newObj));
       if(this.list.c == "cat"){
         delete this.list.b;
       }else{
         this.list.b ="Cat";
       }
      return this.list
    }
  };