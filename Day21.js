//This is Day 18 of learning of JS
//Chapter 7 Practice set

//Q1. Create a navbar and change the color of its first element red

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";
//Q2. Create a table without tbody now use "View page Source" button to click whether it has tbody or not

// 

//Q3. Create an element with 3 childrens Now chane the color of first and last element to green

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green";

document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green";
//Q4. Writea a Javascript code to change background of all <li> tages to cyan

Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.background = "cyan";
});
//Q5. Which of the following is used to look for the farthest ancestor that matches a given CSS Selector

// options
// a. mathes
// b. closet
//c. contains
//d. noenme of these // Ans