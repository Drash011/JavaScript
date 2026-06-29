let num = Number(prompt("Enter a number:"));

console.log("Entered Number: " + num);
document.write("Entered Number: " + num + "<br><br>");

if (num % 2 == 0) {
    console.log("Even Number");
    document.write("Even Number<br>");
}
else {
    console.log("Odd Number");
    document.write("Odd Number<br>");
}

if (num % 5 == 0) {
    console.log("Divisible by 5");
    document.write("Divisible by 5");
}
else {
    console.log("Not Divisible by 5");
    document.write("Not Divisible by 5");
}