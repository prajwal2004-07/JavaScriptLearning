// Day 2 of Learning Javascript

//There are 7 Types of Dataypes in Javascript

//Primitives and Objects

//Primitives Datatypes in Js
// nn bb ss u

let a = null;
let b = 56;
let c = true;
let d = BigInt("45679821");
let e = "Prajwal";
let f = Symbol("I am a nice Symbol");
let g = undefined;

console.log(a,b,c,d,e,f,g);

let h = d + BigInt("45");

console.log(h);
// let i = h + 14;  
// console.log(i);  // It shows Error

// To know the Typw of DataType 

console.log(typeof d, g);

let j;
console.log(typeof j);


//   Non -Primitive Data Type / Objects in Javascript

const item = {
    "prajwal" : true,
    "jay" : null,
    "hement" : undefined,
    "vidhan" : 26,
};

//It Print its Value
console.log(item["prajwal"]);

//It is undefined Value
console.log(item["hemant"]);

//It is not assigned that's why it gives undefined value
console.log(item["ajay"]);


/////////////////////////////////////////////////////

//Practice Set Chapter 1

// Q1. Create a Variable of type string and try to add a number to it

let str = "Prajwal";
let num = 2004;
let add = str + num;
console.log(add); // add = Prajwal2004

// Q2. Usse typeof operator to find the datatype of the string in last question

console.log(typeof (str + num));  // type is String

// Q3: Create a const Object in Js can you change it to hold a number later

const hi = {
    name : "Prajwal",
    rollNo : 149,
    section: "A"
};

// hi = "Prajwal"; // It can not be change it gives a TypeError : Assignment to constant variable
console.log(hi);

//Q4 : Try to add a new key to the constant problem 3 

hi ["friend"] = "Hemjay";
console.log(hi);  //  Key can be added
// hi vairable is constant but it is just a reference for the Object

//Q5 : Write a js program to create a word meaning dictionary of 5 Words

const dictionary = {
    appropriate : "suitable or proper in the circumstances.",
    knock : "to strike a sounding blow with the fist, knuckles, or anything hard, especially on a door, window, or the like, as in seeking admittance, calling attention, or giving a signal",
    gic : "Guaranteed Investment Certificate: a form of investment that earns interest but is guaranteed not to incur loss",
    nop : "not our publication",
    ding : "to cause to make a ringing sound."
};