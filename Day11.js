//This is Day 11 of Learning JavaScript

let num = [45,65,78,23,45,12,89,58];
console.log(num.length);
delete num[0];// it deletes the element of the array but not delete position the length of the array cannot changed
console.log(num, num.length);  
num [0] = 45;// we can reassign values
console.log(num);

let num1 = [47,14,25,58,69,63];

let newArray = num.concat(num1);// It can help to add more tyan one array and it cant the the main array 
console.log(newArray);

num1.sort();// it can help to sort the array but it sort as a string so it short as a num spelling 
console.log(num1);

const compare = (a, b) => {
    return b-a;
}
let num2 = [47,45,41,45,58,59,56,35,52,51,68,75,25,65,4];
num2.sort(compare);
console.log(num2);

const compare2 = (a, b) => {
    return a-b;
}
num2.sort(compare2);
console.log(num2);

let deletedItem = num2.splice(2,5,45,56,55,789,987);
console.log(deletedItem, num2);

let num3 = [54, 22, 3 , 2,45,56,55,78 ];// It Deletes the Item from the given index
let nwNum3 = num3.slice(3);
console.log(num3.slice(3, 9));
console.log(nwNum3);


// Type of Loop :- For Each Loop
let loop =[12,24,36,48];
loop.forEach((element) => {
    console.log(element * element);
})

// Array From

let name = "Prajwal";
let arr = Array.from(name);
console.log(arr);

//for ...of 
for (let i of num){
    console.log(i);
}

// for ...in
for (let i in num){
    console.log(num[i]);
}

