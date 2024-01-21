//This is Day 7 of Learning JavaScript in 60 Days

function averageOfTwoNumbers (x,y){
    return (x+y)/2;
}

let x = 10;
let y = 20;

console.log("Average of " + x +" and " + y + " is " + averageOfTwoNumbers(x,y));

// Without Argument Function 

const hello = () => {
    console.log("Hello I am engineer Prajwal");
    return "Byyy";
}
hello();

let c = hello();

console.log(c);

console.log("------------------------------------------------------------------")

//Practice Questions on Loops

//Q1. write a program to print the marks of a student in an object using for loop

let marks = {
    prajwal : 89,
    jay : 25,
    hemant : 99,
};

for (let i=0; i<Object.keys(marks).length; i++){
    console.log("The marks of "+ Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}

console.log("------------------------------------------------------------------")
// Q2. Solve q1 using for in loop

for (let key in marks){
    console.log("The marks of " + key + " are " + marks[key]);
}

console.log("------------------------------------------------------------------")


//Q3. Write a Progrma to print try agian until the  user enters the Correct ans 

// let correcNumber =45;
// let findNumber ;
// while (findNumber!= correcNumber){
//     console.log("Try Again");
//     findNumber = prompt("Enter the Number");
    
// } 
// console.log("You Enter the Right Number !!!!");
// console.log("------------------------------------------------------------------");

// Q4. Write a funxtion to find mean of 5 Numbers

const mean = (a,b,c,d,e) => {
    return(a+b+c+d+e)/5;
}
console.log(mean(5,10,15,20,25))

console.log("Question Completed");


// Chapter 4 Started
// String 
let name = "Harry";
let friendName = "Prajwal";
console.log(name.length);// String
console.log(name , friendName[0]);

//Template Literals
// BackTicks == ``;

// String Interpulatuion 
let boy1 = "Promod";
let boy2 = "Nikhil";

let sentence1 = `boy1 is a friend of boy2`;
console.log(sentence1);

let sentence2 = `${boy1} is a friend of ${boy2}`;
console.log(sentence2);

// Escape Sequence Characters

// \n = for new Line 
// \t : tab
// \r : carriage return

console.log("Prajwal\n\tbawanthare \'Escap\re ")