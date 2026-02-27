

const person1={
    name:"Hello",
    greeting:function(){
        console.log()
    }
};

const person2={
    name:"Bob"
}
function greeting(salutation,message){
    console.log(`Hello ${salutation} ${this.name} ${message} `);
}


greeting(person1); // here it will print undefined here as in name
// as here this.name will return undefined as here there is no object binding here.


greeting.call(person1,"Shree","Good to see u again.");// so call is used here 
greeting.call(person2,"Mr.","How are u?");

console.log("apply function");
// here we use array to pass the arguments in this.
greeting.apply(person1,["Shri","Nice to meet with u."]);
greeting.apply(person2,["Mr.","Have u done that?"])

console.log(`\n bind function..`);
// 

const person3={
    name:"Charlie"
};

let f1=greeting.bind(person3,'good','nice to see');
f1("Wooo!!!!!!!!","What a nice day we have together!!!! ");

console.log("Promise.......");

function add(a,b){
    return a+b;
}

let myPromise = new Promise(
    (f11,f21)=>{
        console.log(`Print f1 ${f11} and f2 ${f21}`);
        // here if it pass then f1 will be called
        // here if it fails then f2 will be called here.
        let res = add(25,3);
        if(res>10)
        f11(res);
        else f21(new Error(`Here the add statement is less than or equal to 10 and that is ${res}`));
    }
)

myPromise
   .then(result => console.log("Resolved:", result))
   .catch(error => console.log("Rejected:", error.message));


console.log(`This is after the promise but it run's first than
     promise as promise is asyn programming one.`);
