// Q1 - Minimum Number

let num1 = Number(prompt("Q1\nEnter first number:"));
let num2 = Number(prompt("Enter second number:"));

let min;

if (num1 < num2) {
    min = num1;
} else {
    min = num2;
}

console.log("First Number:", num1);
console.log("Second Number:", num2);
console.log("Q1: Minimum Value =", min);


document.write("<h2>Q1 Minimum Value</h2>");
document.write("First Number: " + num1 + "<br>");
document.write("Second Number: " + num2 + "<br>");
document.write("Minimum Value = " + min + "<hr>");


// Q2 - Positive/Negative/Neutral

let number = Number(prompt("Q2\nEnter any number:"));

let result;

if (number > 0) {
    result = "Positive";
}
else if (number < 0) {
    result = "Negative";
}
else {
    result = "Neutral";
}

console.log("Entered Number:", number);
console.log("Q2:", result);

document.write("<h2>Q2 Check Positive, Negative or Neutral</h2>");
document.write("Entered Number: " + number + "<br>");
document.write("This number is " + result + "<hr>");


// Q3 - Average Marks

let maths = Number(prompt("Enter Maths Marks:"));
let english = Number(prompt("Enter English Marks:"));
let science = Number(prompt("Enter Science Marks:"));

let average = (maths + english + science) / 3;

console.log("Maths Marks:", maths);
console.log("English Marks:", english);
console.log("Science Marks:", science);
console.log("Average Marks:", average);

document.write("<h2>Q3 Output</h2>");
document.write("Maths Marks: " + maths + "<br>");
document.write("English Marks: " + english + "<br>");
document.write("Science Marks: " + science + "<br>");
document.write("Average Marks: " + average);