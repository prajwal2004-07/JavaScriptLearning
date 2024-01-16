//This is Day 4 of Learning Javascript

//Conditional Statement

// let a = prompt("What's Your Age: ");
// a = Number.parseInt(a);//converting the string to number
// console.log(a);

//Three types of Consitional Statement

// 1. if
// 2. if-else
// 3. if-else-if-else
//-----------------------------------------------
let ak = 45;
if (ak = 45){
    console.log('Hello Everyone !!!');
}

let sub = "eng"
if (sub = "eng"){
    console.log("Welcome to English Class");
}


let age = 18;
if (age<0){
    console.log("Invalid Age!!!");
}
else if (age<9){
    console.log("You can't even think of drive");
}else if(age > 10 && age <18) {
    console.log("You can think of  driving but wait some years");
}else{
    console.log("You can drive"); 
}


//Ternary Operator

console.log("You can ", age < 18 ?"not drive": "drive");