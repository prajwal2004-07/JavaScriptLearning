//This is Day 18 of Learning Of Javascript


//Seaching the DOM
let name = document.getElementById("name");
name.style.color = "Red";

//document.querySelectorAll(".ClassName"): It helps to select all classes by by css selcetor class name
//document.querySelectorAll("#IdName")
// It helps to select id by css selector id name

console.log(document.getElementsByTagName("a"));// it helps to search the a type of element you can seach any element

console.log(document.querySelector(".nav-item").getElementsByTagName("a"))