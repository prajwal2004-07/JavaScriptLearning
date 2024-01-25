// This is Day 13 of Learning JavasCRIPT


// JavaScript on the Browser 
// Browser Developer Tools

// Element:- All HTML Elements
// Console:- All the Errors + Log
// Network:- All Network Requests

// Advantages of using separate script file using src script tag
// 1. Separation of Concern
// 2. Browser Caching


/* <script src="">
    console.log("I am best")// This Code will be Invalid 
</script> */


//console Methods
console.log(console); // It gives all Console Methods
console.assert(5<3);// It gives assertion if the logic is false
console.error("This is error");
//console.clear();// It clears the console

obj = {
    a:1,
    b:2,
    c:3
};
console.table(obj);// It creates a Table
console.warn("Please don,t drink");
console.info("THis is an Importtant")
console.time();
console.time("a");
console.timeEnd("a");
console.time("p");
console.timeEnd("p")
// console.log(p);
console.time("forLoop")// It shows the runtime of the Loop
for(let i=0; i<100000; i++){
    console.log(i);
}
console.timeEnd("forLoop")

//Js alert, prompt and confirm

alert("Enter a value of a");
let a = prompt("Enter here", "1000");
a=Number.parseInt(a);
alert("You Enter a type of " + typeof a);
let write = confirm ("Do you want to write it on page");
if(write){
    document.write(a);
}else{
    document.write("Please alloe me to writr");
}
