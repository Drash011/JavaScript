let angle1 = Number(prompt("Enter First Angle : "));
let angle2 = Number(prompt("Enter Second Angle : "));

let angle3 = 180 - (angle1 + angle2);

console.log("First Angle = " + angle1);
console.log("Second Angle = " + angle2);
console.log("Third Angle = " + angle3);

document.write(`<h3>First Angle = ${angle1}</h3><br>`);
document.write(`<h3>Second Angle = ${angle2}</h3><br>`);
document.write(`<h3>Third Angle = ${angle3}</h3><br>`);