// Day 6 of Learning JavaScript

//Problem to add some NUmbers using Looop

// let sum = 0;
// let num = prompt("Enter the NUmber Up to print: ");
// num = Number.parseInt(num);
// for (let i=0; i<num; i++){
//     sum+=i;
// }
// console.log("Sum of First " +num + " natural numbers is "+ sum);


// for in loop

let obj = {
    harry : 90,
    shubh : 45,
    shivaka : 56,
    ritika : 57,
    shiv : 23  
};
for(let a in obj){
    console.log("Marks of a " + a + " are " + obj[a]);
}

//for of loop

for (b of "Harry"){
    console.log(b);
}

//While loop

let n =prompt("Enter the Number: ");
n = Number.parseInt(n);

let i=0;
while(i<n){
    console.log(i);
    i++;
}

//do While loop

let n1 =prompt("Enter the Number: ");
n1 = Number.parseInt(n1); //n =1

let j=0;
do{
    console.log(j);
    j++;
} while(j>n1);

// It iterate minimum one time  even if the condition is false


//Functions in JS

// function onePlusAverage(a, b){
//     return 1+(x+y)/2;
// }

// let  a=2;
// let  b=3;

// console.log("One Plus Average of a and b is "+ onePlusAverage(a,b));