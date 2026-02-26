
function Student(name,age,cn){
    this.name=name;
    this.age=age;
    this.card_no=cn;

    this.study=function(){
        console.log("Hello, let's study here...");
    };
    Student.prototype.cool=function(){
        console.log("just take break to get cool...");
    }
}
// creating a object of Student
let stu1=new Student("Good",23,1232);
let stu2=new Student("Smile",13,1235);

stu1.study();
console.log(stu1," stu2 ",stu2);
console.log("stu2 name and age is ",stu2.name," ",stu2.age);
console.log(typeof stu2);
stu2.study();
stu2.cool(); 
// here destructuring of object is taken.
function greet({name,age}){
    console.log("Greeting to ",name," and ur age is:",age);
    name="kind";// it will only change the local one here as name is 
    // primitive data type actually.
}
greet(stu1);
console.log(stu1);

function greet2(obj){
    console.log("Greeting to ",obj.name," and u age and card_no is: ",obj.age," ",obj.card_no);
    obj.card_no=2353; // so here entire object is passed so here
    // we can change the object properties and object is passed 
    // here by reference. - which is not consider as best practise.
    
}

console.log("card_no is: ",stu1.card_no);
greet2(stu1);
console.log("card_no is: ",stu1.card_no);