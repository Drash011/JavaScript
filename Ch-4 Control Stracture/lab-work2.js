// Q1 - Minimum of 3 Numbers

let num1 = Number(prompt("Q1\nEnter first number:"));
let num2 = Number(prompt("Enter second number:"));
let num3 = Number(prompt("Enter third number:"));

let min;

if (num1 < num2) {
    if (num1 < num3) {
        min = num1;
    } else {
        min = num3;
    }
} else {
    if (num2 < num3) {
        min = num2;
    } else {
        min = num3;
    }
}

console.log("Q1");
console.log("First Number:", num1);
console.log("Second Number:", num2);
console.log("Third Number:", num3);
console.log("Minimum Value:", min);

document.write("<h2>Q1 - Minimum of 3 Numbers</h2>");
document.write("First Number: " + num1 + "<br>");
document.write("Second Number: " + num2 + "<br>");
document.write("Third Number: " + num3 + "<br>");
document.write("Minimum Value: " + min + "<hr>");



// Q2 - Maximum of 4 Numbers

let n1 = Number(prompt("Q2\nEnter first number:"));
let n2 = Number(prompt("Enter second number:"));
let n3 = Number(prompt("Enter third number:"));
let n4 = Number(prompt("Enter fourth number:"));

let max;

if (n1 > n2) {
    if (n1 > n3) {
        if (n1 > n4) {
            max = n1;
        } else {
            max = n4;
        }
    } else {
        if (n3 > n4) {
            max = n3;
        } else {
            max = n4;
        }
    }
} else {
    if (n2 > n3) {
        if (n2 > n4) {
            max = n2;
        } else {
            max = n4;
        }
    } else {
        if (n3 > n4) {
            max = n3;
        } else {
            max = n4;
        }
    }
}

console.log("\n\nQ2");
console.log("First Number:", n1);
console.log("Second Number:", n2);
console.log("Third Number:", n3);
console.log("Fourth Number:", n4);
console.log("Maximum Value:", max);

document.write("<h2>Q2 - Maximum of 4 Numbers</h2>");
document.write("First Number: " + n1 + "<br>");
document.write("Second Number: " + n2 + "<br>");
document.write("Third Number: " + n3 + "<br>");
document.write("Fourth Number: " + n4 + "<br>");
document.write("Maximum Value: " + max);