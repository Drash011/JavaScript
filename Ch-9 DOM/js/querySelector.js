// querySelector()
// ID
const heading = document.querySelector("#heading");

console.log(heading);

console.log("ID : ", heading.id);
console.log("CLASS : ", heading.className);
console.log("TAG : ", heading.tagName);

heading.style.backgroundColor = 'lavender';
heading.style.color = 'purple';
heading.style.padding = '20px';
heading.style.borderRadius = '8px';
heading.style.border = '1px solid purple'


// Tag
const image = document.querySelector("img");

console.log(image);

image.style.borderRadius = '20px';
image.style.width= '300px';
image.style.height= '300px';
image.style.margin = '0px auto';
image.style.display = 'block';


// querySelectorAll()
// Class
const mainHeading = document.querySelectorAll(".mainHeading");

console.log(mainHeading);

mainHeading[1].style.backgroundColor = '#cdffcd';
mainHeading[1].style.color = '#005a00';
mainHeading[1].style.padding = '20px';
mainHeading[1].style.width = '70%';
mainHeading[1].style.margin = '20px auto';
mainHeading[1].style.fontWeight = '600';
mainHeading[1].style.border = '2px solid #005a00';
mainHeading[1].style.borderRadius = '10px';


// Tag
const h1List = document.querySelectorAll("h1");

console.log(h1List);

h1List[1].style.backgroundColor = '#d8bfff';
h1List[1].style.color='#23005a';
h1List[1].style.padding = '20px';
h1List[1].style.margin = '20px auto';
h1List[1].style.fontWeight = '600';
h1List[1].style.border = '2px solid #23005a';
h1List[1].style.borderRadius = '10px';
h1List[1].style.textAlign = 'center';