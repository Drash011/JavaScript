// Q1 : Sum of 1 to N using for loop
document.write("<h2>Q1 : Sum of 1 to N</h2>");

let n = Number(prompt("Enter any number"));

let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log("Input : " + n);
console.log("The sum of all numbers : " + sum);

document.write("Input : " + n + "<br>");
document.write("The sum of all numbers : " + sum);

document.write("<hr>");



// Q2 : Factorial using for loop
document.write("<h2>Q2 : Factorial of N</h2>");

let num = Number(prompt("Enter any number"));

let fact = 1;

for (let i = 1; i <= num; i++) {
    fact *= i;
}

console.log("Input : " + num);
console.log("The factorial is : " + fact);

document.write("Input : " + num + "<br>");
document.write("The factorial is : " + fact);

document.write("<hr>");



// Q3 : Multiplication Table
document.write("<h2>Q3 : Multiplication Table</h2>");

let table = Number(prompt("Enter any number"));

console.log("Input : " + table);
document.write("Input : " + table + "<br><br>");

for (let i = 1; i <= 10; i++) {

    console.log(table + " X " + i + " = " + (table * i));

    document.write(table + " X " + i + " = " + (table * i) + "<br>");
}