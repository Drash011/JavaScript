let n = Number(prompt("Enter number of terms:"));

console.log("Terms: " + n);
document.write("Terms: " + n + "<br><br>");

let num = 1;
let add = 1;

document.write("Series: ");

for (let i = 1; i <= n; i++) {
    console.log(num);
    document.write(num + " ");

    num = num + add;
    add++;
}
