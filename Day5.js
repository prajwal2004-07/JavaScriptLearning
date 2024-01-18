//This is Day5 of Learning JavaScript

//Practice Set fot Chapter 2

//Q1. Use logical operators to find whether the age of person lies between 10 and 20

let age = prompt("Enter Your Age: ");
age = parseInt(age);
if (age>10 && age < 20){
    console.log("You age lies between 10 and 20");
}
else {
    console.log("You age not lies between 10 and 20");
}

//Q2. Demonstrate the use of Switch case Statement in Javascript

let age2 = prompt("Enter Your Age: ");
age2 = parseInt(age2);

switch(age){
    case 12:
        console.log("Your age is 12");
        break;
    case 13:
        console.log("Your age is 13");
        break;
    case 14:
        console.log("Your age is 14");
        break;
    case 15:
        console.log("Your age is 15");
        break;
    default: 
        console.log("Your age id not special");    
}

//Q3. Write a javascript Program to find whether the number is divisible by either 2 and 3

let num = prompt("Enter a Number: ");
num = Number.parseInt(num);
if (num%2==0 && num%3==0){
    console.log("The", num , "is divisible by 2 and 3 " );
}else {
    console.log("The", num , "is not divisible by 2 and 3 " );
}

//Q4. Write a JavaScript Program to find whether the number is divisible by either 2 or 3

let num2 = prompt("Enter a Number: ");
num2 = Number.parseInt(num2);
if (num%2==0){
    console.log("The", num2 , "is divisible by 2 " );
}if (num%3==0){
    console.log("The", num2 , "is divisible by  3 " );
}
else {
    console.log("The", num2 , "is not divisible by 2 or 3 " );
}

//Q5. Print " You can Drive " or "You can ont Drive" based on age being greater than 18 using ternary operator
let age3 = prompt("Enter your Age: ");
console.log((age3 >= 18)? "You can Drive Now" : "You can not Drive");


// Loops

// Types of Loops in jS

// For Loop
// For in Loop
// For of Loop
// While LoopDo
// while Loop

// For L

for (let i=0; i<34; i++){
    console.log(i);
}