//1
const body = document.getElementsByTagName("body")[0];
body.removeChild(body.querySelector("main"));

//2
let newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id = "victory";
newHeader.innerHTML = "Ethan is the champion"