//This is Day 12 of Learning JavaScript

//Map Filter and Reduce

//Arrays Map Method
let arr = [45,22,55];
let a = arr.map((value, index, array) => {// Creates a new Array by Performance aome operations on each array element
    console.log(value, index, array);
    return value + index; // I can Add the Number
});
console.log(a);

//Arrays filter Method : Filter the array and Values passes and test it  and create new Array
let arr2 = [1,2,3,87,98,58,54,253];
let a2 = arr.filter((a2)=> {
    return a<10;
})
console.log(a2); 


//Arrays Reduce Method : Reduces an array to a Single value

let arr3 = [1,2,3,4,5,6,7,8,9,10];

// Internal Structure
// 1+2 = 3
// 3+3=6
// 6+4=10..
const reduceArray = (h1, h2) => {
    return h1 + h2;
}
let newarr3 = arr3.reduce(reduceArray);
//Either I can Create a Function or variable 

// let newarr3 = arr3.reduce((h1, h2)=>{
//     return h1 + h2;
// });
console.log(newarr3);

// Practice Set Questions on Arrays

// Q1.Create an array of Numbers and take input from the user to all numbers to the array

let array1 = [12,45,56,78,12];
let addNewNum = prompt("Enter a Number to Add in the Array: ");
addNewNum = Number.parseInt(addNewNum);
array1.push(addNewNum);
console.log(array1);
// It was not run on vs code because of Prompt


//Q2. Keep adding numbers to the array in 1 until 0 is added to the array

// I am using Q1 Loop
let addNewNums;
do {
    addNewNums = prompt("Enter a Number: ");
    addNewNums = Number.parseInt(addNewNums);
    array1.push(addNewNums);
}while (addNewNums!= 0);

console.log(array1);

//Q3. Filter For Numbers Divisible by to from a given array

let array3 = [12, 10 ,50 ,85 , 65 , 44 , 75 , 25 , 36, 47 ];
let divisibleNum = array3.filter((x) =>{
    return x % 10 == 0;
});
console.log(divisibleNum);

//Q4. Create an array of square of given numbers

let array4 = [1, 2, 3, 4, 5 ,6 , 7, 8 ,9, 10];

let square = array4.map((x) => {
    return x*x;
});
console.log(square);

//Q5. Use reduce to calculate factorial of a given numbers from an atrray of first n natural numbers (n being the number where factorial needs to be calculated)

let array5 = [1, 2, 3, 4, 5 ,6 , 7, 8 ,9, 10];

let fact = array5.reduce((x1, x2) => {
    return x1*x2;
})
console.log(fact);

