//To know what type of variable we declared we use typeof Operator
var a=10.0,b="Hello",c=false;
console.log("*****Typeof Operator******")
console.log(a,b,c);
console.log(typeof(a),typeof(b),typeof(c));
//To know what we declared is object or not we use instanceof Operator
let x=new String("Hello");
console.log("******Instanceof Operator******")
console.log(x);
console.log(x instanceof String);//returns true or false means object or not
var y="hi";
console.log(y instanceof String);//returns false
// + operator converts string to number
var z="52";
console.log("********* + Operator ********")
console.log(z);
console.log(typeof(z));
z=+z;
console.log(z);
console.log(typeof(z));
var p="world",q=true;
p=+p;
q=+q;
console.log(p);//returns Nan Not a Number
console.log(typeof(p));
console.log(q);//returns 1 if true or 0 if false
console.log(typeof(q));
// ++,--and == operator;
var r=10;
console.log("****** ++,-- and == Operator*****")
r=++r;
console.log(r);
r=--r;
console.log(r);
console.log(r==10);//returns true or false value
// Logical && , || and,or Operator returns
var l=10,m=15;
console.log("***** &&,|| operators *****");
console.log(l<15 && m<20);//returns true or false value
console.log(l<9 || m<20);
console.log(l<5 || m<5,l<5 && m<5);



