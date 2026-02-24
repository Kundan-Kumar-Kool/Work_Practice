let student1={
    name:"smile",
    age:23,
    email:"smile123@gmail.com",
    card_no:23232532,
};
function greet(nm){
    console.log("Hello - greet "+nm)
}
greet(student1.name);

// here we are using object destructing in which we are passing obj.
// and in the obj. it should match with one of the parameter in that.
// here we are just extracting it from that object.
function greet2({name,email}){
    console.log("Hello greet2 ",name, " and email is: ",email);
}
greet2(student1);

function greet3(obj){
    console.log("Hello-greet3: ",obj.name, " your email is: ",obj.email);
}
greet3(student1);

// create a fun that acccepts age of student and return his/her eligibility to vote
function voteEligibility({age}){
    if(age>=18){
        console.log("You are eligible to vote as u have age: ",age);
    }
    else console.log("You are not eligible to vote may be u are less than 18 as u age is :", age);
}
voteEligibility(student1);

// updating object properties.

let student2={
    ...student1, // here now student2 will get all the data of stu-1
    
}
console.log("student1 ",student1, " student2 ",student2);

let student3={
    ...student1,
    name:"Cool",
    age:19,
    // email:null, -- here it will simply override the properties.
    // card_no:null,
}
console.log("studnet3 ",student3);
