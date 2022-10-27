/*Variables
intialisation*/
var a=10,b="world",c=false;
console.log(a,b,c);//Displays variable values
console.log(typeof(a),typeof(b),typeof(c)); //Displays what type of variables using typeof method
var x="hello"; //string values
var y="STRING";
console.log(x,y);
console.log(x.toUpperCase(),y.toLowerCase()); //uppercase,lowercase methods
console.log(x.length,y.length); //length of string
console.log(x.charAt(4),y.charAt(0));//character at position returns true or false
console.log(x.split(""),y.split(""));//split the string method
console.log(x.startsWith("h"),y.endsWith("g"));//starts with , ends with method returns true or false
var p=5,q=6;
console.log("Addition of "+ p + " and " + q + " is :" + (p+q),"\nMultiplication of "+ p + " and " + q + " is :" + (p*q),);//mathematical operation
console.log("Substraction of "+ p + " and " + q + " is :" + (p-q),"\nDivison of "+ p + " and " + q + " is :" + (p/q));
console.log("******This is all about variables******");