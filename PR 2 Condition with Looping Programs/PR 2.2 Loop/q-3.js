let num = prompt("Enter a number:");

console.log("Entered Number: " + num);
document.write("Entered Number: " + num + "<br><br>");

while (num.length > 1) {
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum = sum + Number(num[i]);
    }

    num = String(sum);
}

console.log("Single Digit = " + num);
document.write("Single Digit = " + num);
