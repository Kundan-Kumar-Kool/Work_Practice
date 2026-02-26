
class Student{
    constructor(name,age,cn){
    this.name=name;
    this.age=age;
    this.card_no=cn;
 }
 //actions(methods/functions)
  study(subject,no_of_hours) {
    console.log("Inside study method ",this.name+" is going to study "+subject+" for "+no_of_hours);
 }
 taskfreetime(task,no_of_hours){
    console.log(`In the free time ${this.name} will do ${task} and the task will continue for ${no_of_hours} hours`);
 }
};
// creating a object of Student
let stu1=new Student("Good",23,1232);
let stu2=new Student("Smile",13,1235);

stu1.study("Maths",5);
stu1.taskfreetime("yoga",1);

console.log(stu1," stu2 ",stu2);
console.log("stu2 name and age is ",stu2.name," ",stu2.age);
console.log(typeof stu2);

// here destructuring of object is taken.
function greet({name,age}){
    console.log("Greeting to ",name," and ur age is:",age);
    name="kind";// it will only change the local one here as name is 
    // primitive data type actually.
}
greet(stu1);
console.log(stu1);

function greet2(obj){
    obj.study("Science",12);
    console.log("Greeting to ",obj.name," and u age and card_no is: ",obj.age," ",obj.card_no);
    obj.card_no=2353; // so here entire object is passed so here
    // we can change the object properties and object is passed 
    // here by reference. - which is not consider as best practise.
    
}

console.log("card_no is: ",stu1.card_no);
greet2(stu1);
console.log("card_no is: ",stu1.card_no);

console.log("  break  ");
// create an employee class with name,designation and salary properties.
// let's it also have methods -computeTax(rate)
// Then also create a function that will compare 2 employee's salary and print the employee name who had higher salary.


class Employee{
    constructor(name,designation,salary){
        this.name=name;
        this.designation=designation;
        this.salary=salary;
    }
    // methods
    computeTax(rate){
        console.log(`Your rate for tax is ${rate} percent and ur tax amount is ${(rate/100)*this.salary}.`)
    }
    compareSalary(salary2,emp2){
       if(this.salary>salary2){
           console.log(`${this.name} has more salary than ${emp2}`);
       }
       else console.log(`${this.name} has less salary than ${emp2}`)
    }
    compSalary({...emp2}){
        let nameofHigherSalaryEmployee= this.salary>=emp2.salary? this.name:emp2.name;
        console.log('Greater salary employee is '+nameofHigherSalaryEmployee);
    }
}

let emp1=new Employee("Mohit","SE",200000);
let emp2=new Employee("Rohit","SE",140000);

emp1.computeTax(5);
emp1.compareSalary(emp2.salary,emp2.name);
emp1.compSalary(emp2);