let a = Number(prompt("Enter A : "));
let b = Number(prompt("Enter B : "));

console.log("Input A = " + a);
console.log("Input B = " + b);

document.write(`<big>Input A = ${a}</big><br>`);
document.write(`<big>Input B = ${b}</big><br><br>`);

a = a * b;
b = a / b;
a = a / b;

console.log("Input A = " + a);
console.log("Input B = " + b);

document.write(`<big>Input A = ${a} </big><br>`);
document.write(`<big>Input B = ${b} </big><br>`);