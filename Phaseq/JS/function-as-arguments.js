function f1(str){
    console.log(`I got this text ${str}`);
}

function f2(str1,f){
    console.log(`I got this text ${str1}`);
    console.log(`I will give this text ${str1} to ${f}`)
    f(str1);
}

f2("Good to see u here, Man",f1);


console.log(`Let's go ahead to some other functions.`);
// here closure property is too used here.
function f(x,y){
    console.log(`Inside f func.x value is ${x} and y value is ${y}` );
    return function sayHello(a,b){
         console.log(`Inside sayHello, Hello to you!`);
         console.log(`So here value of a is ${a} and b value is ${b}`);
         console.log(`If talk about the x and y value which is of its outer func. is ${x} and ${y} 
            so closure is happening here.`);
    };
}
let x=f(2,5);
console.log(x);
x(22,55);// here that is being called here, as x is now a function.