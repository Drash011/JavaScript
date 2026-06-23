let birthYear = Number(prompt("Enter Birth Year"));

console.log("Input Birth Year = " + birthYear);
document.write(`<big>Input Birth Year = ${birthYear}</big><br><br>`);

let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

let category;

if (age < 13)
    category = "Child";
else if (age < 20)
    category = "Teenager";
else if (age < 60)
    category = "Adult";
else
    category = "Senior Citizen";

console.log("Output Age = " + age);
console.log("Category = " + category);

document.write(`<big>Output Age = ${age}</big><br>`);
document.write(`<big>Category = ${category}</big><br><br>`);