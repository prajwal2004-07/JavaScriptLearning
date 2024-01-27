//This is Day 15 Of learning Javascript


// Accessing Children
console.log(document.body.firstChild);// it is the first child  it gives #text in my console cause it counted the text after the body tag and before the div tag of Day15 HTML file
console.log(document.body.lastChild);// It gives the last child of the element
console.log(document.body.childNodes);// It gives all the element of the tag

// element.firstChild[0] === element.firstChild
// element.childNodes[element.childNodes-1] === element.lastChild;

// elemtent.hasChildNodes() : It is a method WHich is used to check whether child element are there are not

//Child nodes look likes an array but it not an array