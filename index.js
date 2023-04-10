// Write your code here!

const mainElementID = document.getElementById("main");

mainElementID.remove();

const newHeader = document.createElement("h1");

newHeader.id = "victory";

newHeader.textContent = "Joe is the champion";

document.body.append(newHeader);