//This is Day 14 of Learning JavaScript

//window : Window is a Global Object
// BOM : Browser Object MOdel
// DOM : Document Object MOdel

window.console.log(window);
console.log(document);
console.log(document.body);

document.body.style.background = "yellow";
document.body.style.color ="red";


// // Chapter 6 Practice Set

//Q1. Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive

let age = prompt("Enter Your Age: ");
age = Number.parseInt(age);

//This is easy method
if (age > 18){
    alert("You Can Drive");
}else {
    alert("You can not drive");
}

//This is Second Method
const canDrive = (age) => {
    return age>=18?true:false;
} 
if(canDrive(age)){
    alert("You Can Drive");
}else {
    alert("You can not drive");
}

// //Q2. In Q1 use Confirm to ask the user if he want to see the prompt again


let runAgain = true;
while (runAgain){
    
    let age = prompt("Enter Your Age: ");
    age = Number.parseInt(age);


    if(age > 0){
        console.error("Plwase enter a valid age");
    }
    if(canDrive(age)){
        alert("You Can Drive");
    }else {
        alert("You can not drive");
    }

    runAgain =confirm("Do you want to see prompt again?");
}


//Q3. IN the previous Question use console error to log the error if the age entered is negetive

// Sol : 52-54 Line is Solution of Q2 

//Q4. Write a program to change the url to google.om (redirector) if user enters a number greater than 4

let num = prompt("Enter one Number ");
num = Number.parseInt(num);

if (num > 4){
    location.href="https://www.google.com"
}
//Q5. Change the background of the page to yelloe red or any other code based on user input through propt

let color = prompt("Enter the Page Background Color");

document.body.style.background = color