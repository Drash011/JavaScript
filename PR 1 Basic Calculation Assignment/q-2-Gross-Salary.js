let salary = Number(prompt("Enter Base Salary : "));
let hra = Number(prompt("Enter HRA % : "));
let da = Number(prompt("Enter DA % : "));
let ta = Number(prompt("Enter TA % : "));

let grossSalary = salary + (salary * hra / 100) + (salary * da / 100) + (salary * ta / 100);

console.log("Base Salary = " + salary);
console.log("HRA = " + hra + "%");
console.log("DA = " + da + "%");
console.log("TA = " + ta + "%");
console.log("Gross Salary = " + grossSalary);


document.write(`<h3>Base Salary = ${salary}</h3>`);
document.write(`<h3>HRA = ${hra}%</h3>`);
document.write(`<h3>DA = ${da}%</h3>`);
document.write(`<h3>TA = ${ta}%</h3>`);
document.write(`<h3>Gross Salary = ${grossSalary}</h3>`);