//Intialising Arrays object
var fruits = ["apple","banana","orange"],primes=[2,3,5,7,11,13];
console.log(fruits,primes);
console.log(typeof(fruits));
console.log(fruits[1],primes[4]);
//Arrays length
var fruitslen=fruits.length;
console.log(fruitslen);
//Arrays intialising using new keyword
var movies=new Array();
movies[0]="Avatar";
movies[1]="Avengers";
console.log(movies);
var colors=new Array("black","blue","brown");
console.log(colors);
//Instialising Arrays in objects
var cars={
    year : 2019,
    companies : ["Toyota","Suzuki","Hyundai","Audi"],
    company : {
        Toyota : {
            name : "Toyota",
            Model : "Innova",
            countries : ["India","USA","Sweden"]
        },
        Suzuki : {
            name : "Suzuki",
            Model : "Swift",
            countries : ["India","USA","Sweden"]
        },
        Hyundai : {
            name : "Hyundai",
            Model :"VXS-101",
            countries : ["India","USA","Sweden"]
        }

    } 
}
console.log(cars);
console.log(cars.companies,typeof(cars.companies));
console.log(cars['company']['Toyota']['countries']);
//Arrays length
var len=cars['company']['Toyota']['countries'].length;
console.log(len);
//Arrays Methods
//concatinating fruits array and colors array
var arrayconcat=fruits.concat(colors);
console.log(arrayconcat);
//adding new elements using concat operation
var  fruits=fruits.concat(['Tomato','berrries']);
console.log(fruits);
//method to pop last element of array
console.log(fruits.pop());
//toString method to convert arrays to string
console.log(fruits.toString());
//method to push element into array
console.log(fruits.push("kiwi"));//returns new length of array
console.log(fruits);
//shifiting elements
console.log(fruits.shift());//lower index element be shifted out
console.log(fruits.unshift("Grapes"));/*shifted lower index element be added or 
by defining new element it will shift to lower index of array and returns length of array*/
console.log(fruits.unshift("apple"));//apple added in lower index of array
console.log(fruits);
//