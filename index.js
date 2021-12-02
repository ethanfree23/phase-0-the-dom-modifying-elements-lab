

const body = document.getElementsByTagName("body")[0]; // this is finding the body tag
body.removeChild(body.querySelector("main")); //removechild is a function, and we are calling it to find main and delete it
const newHeader = document.createElement("h1"); // creating a variable and setting it to create an element of "h1 in the body of the document (document.body)"
document.body.appendChild(newHeader); // going into the document -> body -> adding (newHeader)
newHeader.id = "victory"; // this is changing the id of the newHeader, the variable that creates h1 element, to victory
newHeader.innerHTML = "Ethan is the champion" // calling the newHeader variable, we tell it to add the innerHTML string, why it is innerhtml and not innertext, idk


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