// This is Day 16 of Learning JavaScript in the 60 Days

//1st Section : Used Code Only When Comment Out Second part
// $0 : It is used to get to the current select element in the console of the website 

// $1 : It is used to get to the previous selected element in the console of the website

console.log(document.body.firstChild);
a = document.body.firstChild;
console.log(a.parentNode);// When return when node is an element or text or any
console.log(a.parentElement);// When only return when node is an element
console.log(a.firstChild.nextSibling);

//2nd Section 
//Element Only Navigation

let b = document.body;
console.log("First Child of b is : " , b.firstChild);
console.log("First Element Child of b is : " , b.firstElementChild);

const changeBgRed = () =>{
    document.body.firstElementChild.style.background = "red";
}