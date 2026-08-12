// const parent =document.querySelector('.parent');

// console.log(parent);
// console.log(parent.children);

// parent.children[0].style.color = "red";
// parent.children[1].style.color = "blue";
// parent.children[2].innerText = "3";

// parent.firstElementChild.style.color = "pink";
// parent.lastElementChild.style.color = "green";

const one = document.querySelector('.num');
console.log(one);
one.computedStyleMap.color = 'red';

one.nextElementSibling.style.color = "lightgreen";
one.nextElementSibling.nextElementSibling.style.color = "blue";
one.nextElementSibling.nextElementSibling.nextElementSibling.style.color = "pink";
