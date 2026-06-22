document.write("<h1 align = 'center'>Lab Work 2.2</h1>");

// q-1  Area of Circle
document.write(`<br><h2>Q.1 Area of Circle</h2><br>`);
console.log(`\n\nQ.1 Area of Circle\n`);
let r = parseFloat(prompt("Enter radius:"));

let area = Math.PI * r * r;

console.log("Area of Circle = " + area);
document.write(`<big>Area of Circle =  ${area} </big>`);



// q-2  Area of Square
console.log();
document.write(`<br><br><h2>Q.2 Area of Square</h2><br>`);
console.log(`\n\nQ.2 Area of Square\n`);

let l = parseFloat(prompt("Enter length:"));

area = l * l;

console.log("Area of Square = " + area);
document.write(`<big>Area of Square =  ${area} </big>`);



// q-3  Area of Triangle
console.log();
document.write(`<br><br><h2>Q.3 Area of Triangle</h2><br>`);
console.log(`\n\nQ.3 Area of Triangle\n`);

let b = parseFloat(prompt("Enter base:"));
let h = parseFloat(prompt("Enter height:"));

area = (b * h) / 2;

console.log("Area of Triangle = " + area);
document.write(`<big>Area of Triangle =  ${area} </big>`);



// q-4  Simple Interest
console.log();
document.write(`<br><br><h2>Q.4 Simple Interest</h2><br>`);
console.log(`\n\nQ.4 Simple Interest\n`);

let p = parseFloat(prompt("Enter Principal Amount:"));
r = parseFloat(prompt("Enter Rate:"));
let n = parseFloat(prompt("Enter Time:"));

let si = (p * r * n) / 100;

console.log("Simple Interest = " + si);
document.write(`<big>Simple Interest =  ${si} </big>`);



// q-5  Perimeter of Circle
console.log();
document.write(`<br><br><h2>Q.5 Perimeter of Circle</h2><br>`);
console.log(`\n\nQ.5 Perimeter of Circle\n`);

r = parseFloat(prompt("Enter radius:"));

let perimeter = 2 * Math.PI * r;

console.log("Perimeter of Circle = " + perimeter);
document.write(`<big>Perimeter of Circle =  ${perimeter} </big>`);