let num1 = Number(prompt("Enter First Number"));
let num2 = Number(prompt("Enter Second Number"));

console.log("Number 1 = " + num1);
console.log("Number 2 = " + num2);

document.write(`<big>Number 1 = ${num1}</big><br>`);
document.write(`<big>Number 2 = ${num2}</big><br><br>`);

let add = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;

console.log("Addition = " + add);
console.log("Subtraction = " + sub);
console.log("Multiplication = " + mul);
console.log("Division = " + div);

document.write(`<big>Output:</big><br><br>`);
document.write(`<big>Addition = ${add}</big><br>`);
document.write(`<big>Subtraction = ${sub}</big><br>`);
document.write(`<big>Multiplication = ${mul}</big><br>`);
document.write(`<big>Division = ${div}</big><br>`);