for(let x=5;x<23;x=x+2){
    console.log(x);
}
// while loop
console.log("while");
let y=20;
output=""
while(y<32){
    // console.log(y++);
    output += y+" ";
    y++;
}
console.log(output);
console.log("do-while");
out="";
y1=2;
do{
    out+=y1+" ";
    y1=y1+2;
}while(y1>10);
console.log(out);

// break and continue;
console.log("break and continue");
for(let x=4;x<=10;x++){
    if(x==6)continue;
    if(x==9)break;
    console.log(`x is ${x}`);
}
// while loop , x-5 to 15 and prints only even no. on the console.
 
z=5;
while(z<16){
    if((z & 1) ===0)console.log(z);
    z++;
}

//       var-let
// here it is done with var keyword.
console.log("let-var time")
var x=10; // here x is global func.
console.log("1.outside func.",x);
function func(){
    var a=23;
    console.log("x inside func ",x);
    console.log("a inside func ",a);
    {
        var k=2;
        console.log("k inside block scope ",k);
    }
    console.log("k outside block inside func scope ",k);
}
console.log("2. x outside func ",x);
func();
// console.log("k outside block outside func scope ",k); - it gives same error reference error here too.
// console.log(" a outside func ",a);-- it gives reference error as var is fun scope.

console.log("let keyword time comes here.");
// where as let is a block scope so outside block let won't be there.

// arrow function.
let add = (a,b)=>{
    return a+b;
}
console.log(add(23,53));

let dobuleIt = x=>x*2;
console.log("double it function is invoked here,",dobuleIt(23));
// spread operator- rest operator.

//spread operator.
let ar1=[4,5,5,23,53,23,532,532,22,332];
console.log("spread opertor is used ",add(...ar1));
console.log(...ar1);
console.log(ar1);

// Rest operator.
let [a,b,...ar2]=ar1;
console.log("a,b,ar2 while using rest operator is: ", a, b, ar2);

// merge two arrays.
const mathS=['amit','ravi'];
const scienceS=['neha','anand'];
let allS=[...mathS,...scienceS];// using spread opertor.
console.log("All students Array is: ",allS);

// write fun. that accepts any no of marks and returns their sum.
// here in sol paramter  is rest operoator and inside this too 
// ...arr2 is using rest operator here only.
function add1(...arr){
    if(arr.length===0)return 0;
    let [a,...arr2]=arr;
    return a + add1(...arr2);
}

console.log(add1(23,353,523,-1000));
console.log(add1(...[23,353,523,-1000]));// here spread operator convert this array into multiple arguments.

