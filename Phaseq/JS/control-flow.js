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