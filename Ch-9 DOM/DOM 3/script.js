// Mouse Event
const btn = document.getElementById('btn');

// btn.addEventListener(event, callBack);

btn.addEventListener('click', (event) => {
    console.log(event.type);
    alert("Button Clicked...");
});

document.querySelector('#dblbtn').addEventListener('dblclick', (e) => {
    console.log(event.type);
    alert("Double CLicked...");
});