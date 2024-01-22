//This is day 9 of learing Javascript

//Chapter 4 Practice Set

//Q1. What will the following print in JavaScript 
//console.log("har\"".length);

console.log("har\"".length);

//Q2. Explore thr includes start with and End with Function of a string

let sentence = "I have the Jio prepaid Sim";
let str1 = "Jio";

console.log(sentence.includes(str1));

//Q3. Write a program to convert a given string to Lowercase

let str2 = "Prajwal";//prompt("Enter any Word to Convert Lowercase");
console.log(str2.toLowerCase());

//Q4. Extract the anout out of the string "Please give Rs 100";

let str3 = "Please give Rs 1000";
let amount = str3.slice("Please give Rs ".length);
// amount = str3.slice(15);
console.log(amount);
console.log(typeof amount);
amount = Number.parseInt(amount);
console.log(typeof amount);

//Q5. try to change 4th character of a given string were you able to do it 

let friend = "jay";
friend[1] = "i";
console.log(friend);// friend value is not change String is Immutable 