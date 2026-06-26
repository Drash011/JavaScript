// Q1 : Alphabet Skipper
document.write("<h2>Q1 : Alphabet Skipper</h2>");

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let i = 0;

console.log("Q1 Output:");

do {
    console.log(alphabet[i]);
    document.write(alphabet[i] + " ");
    i = i + 4;
} while (i < alphabet.length);

document.write("<hr>");


// Q2 : Count Total Digits
document.write("<h2>Q2 : Digit Counter</h2>");

let num = Number(prompt("Enter any number"));

let count = 0;
let temp = num;

while (temp > 0) {
    count++;
    temp = parseInt(temp / 10);
}

console.log("Input : " + num);
console.log("Total number of digits : " + count);

document.write("Input : " + num + "<br>");
document.write("Total number of digits : " + count);

document.write("<hr>");


// =======================
// Q3 : Sum of First and Last Digit
document.write("<h2>Q3 : Digit Addition</h2>");

let number = Number(prompt("Enter any number"));

let last = number % 10;
let first = number;

while (first >= 10) {
    first = parseInt(first / 10);
}

let sum = first + last;

console.log("Input : " + number);
console.log("First Digit : " + first);
console.log("Last Digit : " + last);
console.log("Sum of First and Last Digit : " + sum);

document.write("Input : " + number + "<br>");
document.write("First Digit : " + first + "<br>");
document.write("Last Digit : " + last + "<br>");
document.write("Sum of First and Last Digit : " + sum);