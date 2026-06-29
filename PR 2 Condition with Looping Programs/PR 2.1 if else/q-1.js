let num = Number(prompt("Enter a number:"));

console.log("Entered Number: " + num);
document.write("Entered Number: " + num + "<br><br>");

if (num > 0)
{
    console.log("Positive Number");
    document.write("Positive Number");
}
else if (num < 0)
{
    console.log("Negative Number");
    document.write("Negative Number");
}
else
{
    console.log("Zero");
    document.write("Zero");
}