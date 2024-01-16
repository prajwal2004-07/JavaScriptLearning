//This is Day 3 of Learning javascript

//Expressions and Condition.

console.log("Operatiors in JS");

let a = 12;
let b = 10;
// ArithMatic Operators
//-----------------------------------------------
console.log("a + b = ",a+b);
console.log("a - b = ",a-b);
console.log("a * b = ",a*b);
console.log("a / b = ",a/b);
console.log("a ** b = ",a**b);
console.log("a % b = ",a%b); 

//incremrnt and Decrement Operator

console.log("a++ = ", a++);
console.log("a = ",a);
console.log("++a = ", ++a)
console.log("a = ",a);


// Assignment Operators
// =
// +=
// -=
// *=
// /=
// %=
// **=

//Comparision Operators

// ==
// !=
// ===
// !==
// >
// <
// >=
// <=
// ?

let comp1 = 6;
let comp2 = 5;

console.log(comp1==comp2);
console.log(comp1!=comp2);
console.log(comp1===comp2);
console.log(comp1!==comp2);

comp2 = "6";

console.log(comp1==comp2);
console.log(comp1!=comp2);
console.log(comp1===comp2);
console.log(comp1!==comp2);

// === Check even data type also

//Logical Operartors

// &&
// ||
// !

console.log("Logical Operators");
let x = 5;
let y = 6;

console.log(x<y && x==5); //true && true = true
console.log(x>y && x==5); //false && true = false
console.log(x>y || x==5); //false || true = true
console.log(!(x>y || x==5)); // !(true)  = false

// 7 + 8 = 15 in these 7 & 8 are the Operands and the + is Operator

// Commment Type
//There are two types of Comment

//1. Single-Line Comment : // ABCDEF 
/*2. Multi-Line Commment : /*ABCDE
                            F */
