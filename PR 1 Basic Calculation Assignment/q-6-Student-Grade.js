let name = prompt("Enter Student Name");

let sub1 = Number(prompt("Enter Subject 1 Marks"));
let sub2 = Number(prompt("Enter Subject 2 Marks"));
let sub3 = Number(prompt("Enter Subject 3 Marks"));
let sub4 = Number(prompt("Enter Subject 4 Marks"));
let sub5 = Number(prompt("Enter Subject 5 Marks"));

console.log("Input:");
console.log("Name = " + name);
console.log("Subject 1 = " + sub1);
console.log("Subject 2 = " + sub2);
console.log("Subject 3 = " + sub3);
console.log("Subject 4 = " + sub4);
console.log("Subject 5 = " + sub5);

document.write(`<big>Input:</big><br><br>`);
document.write(`<big>Name = ${name}</big><br>`);
document.write(`<big>Subject 1 = ${sub1}</big><br>`);
document.write(`<big>Subject 2 = ${sub2}</big><br>`);
document.write(`<big>Subject 3 = ${sub3}</big><br>`);
document.write(`<big>Subject 4 = ${sub4}</big><br>`);
document.write(`<big>Subject 5 = ${sub5}</big><br><br>`);

let total = sub1 + sub2 + sub3 + sub4 + sub5;
let percentage = total / 5;
let grade;

if (percentage >= 90)
    grade = "A+";
else if (percentage >= 80)
    grade = "A";
else if (percentage >= 70)
    grade = "B";
else if (percentage >= 60)
    grade = "C";
else if (percentage >= 40)
    grade = "D";
else
    grade = "Fail";

console.log("Output:");
console.log("Total = " + total);
console.log("Percentage = " + percentage);
console.log("Grade = " + grade);

document.write(`<big>Output:</big><br><br>`);
document.write(`<big>Total = ${total}</big><br>`);
document.write(`<big>Percentage = ${percentage}%</big><br>`);
document.write(`<big>Grade = ${grade}</big><br><br>`);