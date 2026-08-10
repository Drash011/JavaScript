console.log("Document Object Model (DOM)");

console.log(document);

const heading = document.getElementById("heading");

console.log("ID : ", heading.id);
console.log("CLASS : ", heading.className);
console.log("Align : ", heading.align);

console.log("Get Attributes : ", heading.getAttribute('id'));

heading.setAttribute('class', `${heading.className} myHeading`);
heading.setAttribute('name', 'second');

// heading.style.color = "deeppink";
// heading.style.backgroundColor = "skyblue";
// heading.style.borderRadius = "50px";;

heading.style.cssText = "color: lavender; background-color: purple; border-radius: 10px; text-align: center; padding: 10px;";

console.log(heading.textContent);
console.log(heading.innerText);
console.log(heading.innerHTML);

// heading.textContent= `${heading.textContent} Drashti Thummar`;

// heading.innerText = "DOM";

heading.innerHTML = "<h2> Drashti Thummar </h2> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJAzu5aTrvg0yPTkww7slPkkHuIjxHKsxRnF6YOnvsQ&s=10'>";
