console.log("Document Object Model (DOM)");

console.log(document);

const heading = document.getElementById("heading");

console.log("ID : ", heading.id);
console.log("CLASS : ", heading.className);
console.log("Align : ", heading.align);

console.log("Get Attributes : ", heading.getAttribute('id'));

heading.setAttribute('class', `${heading.className} myHeading`);