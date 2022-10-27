//Using functions with no parameters
getA();//calling function
function getA() {
    var x=2;
    console.log(x);
}
//Using function with parameters
function sum(a,b) {
  return a+b;
}
var y=sum(1,2);
console.log(y);
//objects using in function
function getObjct(){
    let car={
        company:"Toyota",
        model:"Innova",
        year:2009
    };//declared object inside function
    console.log(car);
    console.log(typeof(car));//scope of object inside function
    console.log(car.model);
}
getObjct();//function call
console.log(typeof(car));//scope of object outside function 
//using objects as function parameters
function returnObjct(c,d){
   return {word : c,
         number : d}
}
let z=returnObjct("hello",20);
console.log(z);
console.log(typeof(z));
//Arrow Function
let p=(s)=>{return s*s;}
console.log(p(4));
console.log(typeof(p));