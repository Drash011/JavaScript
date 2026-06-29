let num = prompt("Enter a number:");

console.log("Entered Number: " + num);

document.write("Entered Number: " + num + "<br><br>");

let first = Number(num[0]);
let last = Number(num[num.length - 1]);

let sum = first + last;

console.log("First Digit = " + first);
console.log("Last Digit = " + last);
console.log("Sum = " + sum);

document.write("First Digit = " + first + "<br>");
document.write("Last Digit = " + last + "<br>");
document.write("Sum = " + sum);