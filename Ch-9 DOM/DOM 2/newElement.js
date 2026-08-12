let div = document.createElement("div");
const parent =document.querySelector('.parent');

div.classList.add("box");
div.textContent = "Hello Javascript";

document.body.appendChild(div);


parent.children[0].style.color = "red";
parent.children[1].style.color = "blue";
parent.children[2].innerText = "3";

div.style.color = "purple";