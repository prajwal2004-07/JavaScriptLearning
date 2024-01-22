// This is Day 10 of Learning JavaScript in 60Days

// Chapter 5 : Arrays

// Define : Arrays are ther Variable which can hold more than one value

let myMarks = [12,15,14,23, "Prajwal", "TestMarks", undefined, false];
console.log(myMarks);
console.log(myMarks[0]);
console.log(myMarks[1]);
console.log(myMarks[2]);
console.log(myMarks[3]);
console.log(myMarks[4]);
console.log(myMarks[5]);
console.log(myMarks[6]);
console.log(myMarks[7]);
console.log(myMarks[8]);// I will get Undefined the index 8 does not exist;
console.log(myMarks.length);

myMarks[8] = "Good";
console.log(myMarks);//Adding a value in the Array
myMarks[8] = "VeryGood";
console.log(myMarks);// Adding a new Value of the Existing Array

console.log(typeof myMarks);

// Challenge

for (let i=0; i<myMarks.length; i++){
    console.log(myMarks[i]);
}

// Array Methods

let num = [1,2,2,45,56];
let str = num.toString();// Now the num is converted into string
console.log(str, typeof str)  ;

let join = num.join("-");
console.log(join, typeof join);// It can Join the Given character to between all arrays or string

//pop method in array

let r = num.pop();
console.log(r, num.pop, typeof r);// r = 56 which is the last element of an array 
//num.pop = Function: pop
// typeof r = number;

//push method in array

let p = num.push(15);
console.log(num);// It help to add new Value at the end of the array
console.log(p, num.push, typeof p);// p=5 return array length
//num.push = Function: push
// typeof r = number;

//shirt method
let q = num.shift();// It removes  the Element from the start of the array 
console.log(q, num);

//unshift method
let s = num.unshift(1);// It add  the Element from the start of the array 
console.log(s, num);
// pop , push, shift, unshift