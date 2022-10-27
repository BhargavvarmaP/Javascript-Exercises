//Using Class
class newCar{
    constructor(name,year){ /*constructor helps us to 
        create number of objects without declaring objects individually*/
        this.name=name;
        this.year=year;
    }
}
let car1=new newCar("Toyota",1998);
let car2=new newCar("Hyundai",2010);
console.log("First car is : "+car1.name);
console.log("Second car is : "+car2.name);
//Using method in class to do operations
class testResult{
    constructor(name,percentage){
        this.name=name;
        this.percentage=percentage;
    }
    result(a){
         if(this.percentage<50){
            return a="Fail";
        }
        else {
            return a="Pass";
        }
    }
}
    let person=new testResult("Krishna",56);
    let person2=new testResult("Rama",48);
    console.log("person name is : "+person.name+"\n Result is : "+person.result(String));
    console.log("person name is : "+person2.name+"\n Result is : "+person2.result(String));
//Using 2 methods in class to do operations
class studentAge{
    constructor(studentname,birthyear){
        this.studentname=studentname;
        this.birthyear=birthyear;
    }
    age(x){
        return x = year-this.birthyear;
    }
    degree(y){
        return y = "B.tech";
    }
}
let student1=new studentAge("Rakesh",1998);
let student2=new studentAge("Mahesh",2010);
let date=new Date();
let year=date.getFullYear();
console.log("Student Name is : "+student2.studentname+"\nAge is : "+student2.age(year)+" years old "+"\nStudying : "+student2.degree(String));
