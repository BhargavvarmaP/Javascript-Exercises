//Using if-else in Javascript
var pwd="Hello",len=pwd.length;
if(len<=8){
    console.log("password must be greater than 8 characters");
}
else {
    console.log("password with Alpha-Numberic is recommended");
}
//Using else-if in Javascript
var incpm=50000;
if(incpm>=25000&&incpm<=100000){
    console.log("Your Income permonth is : " +incpm +"\nPay 10% Tax ");
}
else if(incpm>=100000){
    console.log("Your Income permonth is : " +incpm+"\nPay 20% Tax");
}
else{
    console.log("No tax");
}
//Using Switch case
var grade="B";
switch(grade) {
    case 'A' : console.log("Excellent");
              break;
    case 'B' : console.log("Good");
                break;
    case 'C' : console.log("Improve");
                break;
    default: console.log("Unknown Value");
}