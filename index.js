

//1
const main = document.getElementById('.main')
document.querySelector('main').remove();

// const body = document.getElementsByTagName("body")[0]; // this is finding the body tag
// body.removeChild(body.querySelector("main")); //removechild is a function, and we are calling it to find main and delete it


//2 
const newHeader = document.createElement('h1')
document.body.appendChild(newHeader);

// const newHeader = document.createElement("h1"); // creating a variable and setting it to create an element of "h1 in the body of the document (document.body)"
// document.body.appendChild(newHeader); // going into the document -> body -> adding (newHeader)


//3 

newHeader.id = "victory"

// newHeader.id = "victory"; // this is changing the id of the newHeader, the variable that creates h1 element, to victory


//4

newHeader.innerHTML = "ethan is the champion"

// newHeader.innerHTML = "Ethan is the champion" // calling the newHeader variable, we tell it to add the innerHTML string, why it is innerhtml and not innertext, idk


// 12.1.21 (first time)
// const body = document.getElementsByTagName("body")[0];
// body.removeChild(body.querySelector("main"));
// let newHeader = document.createElement("h1");
// document.body.appendChild(newHeader);
// newHeader.id = "victory";
// newHeader.innerHTML = "Ethan is the champion"

// 11.20 ish
// const body = document.getElementsByTagName("body")[0];
// body.removeChild(body.querySelector("main"));
// let newHeader = document.createElement('h1');
// document.body.appendChild(newHeader);
// newHeader.id = "victory";
// newHeader.innerHTML = "Ethan is the champion"


// this took me 8 hours...



/*
NOTES:

CHANGING THE DOM WITH DEVTOOLS AND JAVASCRIPT

The return value of document.querySelector('h1'); is the DOM node, which is also a JavaScript object.

Query methods like querySelector() return a value (DOM node), which we can save the results of the query into a variable.

~~~~~~~~
DOM IS A TREE

DOM programming is asking JS to:
1) ask the DOM to find elements
2) remove selected elements or add new ones
3) adjust a property of the selected elements


Class and ID are metadata

we can use:
getElementByID(), getElementsByClassName(), and getElementsByTagName().

we can turn this into a variable
ie
const elements = document.getElementsByClassName("yourClassNameHere");

class selectors use .class-name
with the ID selector, do not use  #

when getElementSSSSSbyWhatever, it takes all of them



 */