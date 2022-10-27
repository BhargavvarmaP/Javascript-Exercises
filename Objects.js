//To know intialising object using let keyword
let a=new String("hi");
console.log(a);
let b=new Number(52);
console.log(b);
let c=new Boolean(false);
console.log(c);
//Easy and efficient way to intialise object
let d = {
    name : "Raju",
    age : 25,
    isMarried : false
} ;
console.log(d);
console.log(d.name);
console.log(d['name']);//another way of getting values from object
console.log(d.age);
d.age=30;//changing value
console.log(d.age);//returns updated value
//Using typeof to know what type of values we are giving
console.log(typeof d.age);
console.log(typeof d); 
//Using functions in object
let car = {
    model : "Innova",
   company : "Toyota",
   year : 2009,
   owner : function(){
               console.log("Owner name is Raju");
   }
}
console.log(car);
console.log(car.model);
car.owner();//calling function from object
console.log(typeof(car.owner));
//nested objects
var bank = {
      Acnumber : "00987484464",
      bankname : "SBI",
      Acholder : {
        name : "Raju",
        age : 22,
        dob :"25july1998"
      } 
}
console.log("*******Nested Objects*******");
console.log(bank);
console.log(bank.Acholder.name);
console.log(bank['Acholder']['name']);
console.log("***********THIS is all about OBJECTS********");