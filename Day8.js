//This is Day 8 of Learning JavaScript

let name ="Prajwal\"";
console.log(name.length);

name ="Prajwal"; //the escape character don't take extra character space
console.log(name.length);

console.log(name.toUpperCase());//to convert upper case
console.log(name.toLowerCase());//to convert lower case
console.log(name.slice(2,6));// to slice the string 
console.log(name.slice(2));
console.log(name.replace("pra", "Uj"));
console.log(name.replace("Pra", "Uj"));

//String Adding
//concating
let myFriend1 = "Jay";
let myFriend2 = "Hemant";
let string = name.concat(" is a good friend of "+ myFriend1 + " and " + myFriend2);

console.log(string);

let srt = "            ui     ";
console.log(srt.trim());

//Strings are immutable 

for(let ch=0; ch<string.length; ch++){
    console.log(string[ch]);
}
    