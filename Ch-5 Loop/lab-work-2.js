// Q1 : Print 1 to 10 using do-while
document.write("<h2>Q1 : Print 1 to 10</h2>");

let i = 1;

console.log("Q1 Output:");
do {
    console.log(i);
    document.write(i + " ");
    i++;
} while (i <= 10);

document.write("<hr>");



// Q2 : Print 10 to 1 using for loop
document.write("<h2>Q2 : Print 10 to 1</h2>");

console.log("Q2 Output:");
for (let j = 10; j >= 1; j--) {
    console.log(j);
    document.write(j + " ");
}

document.write("<hr>");



// Q3 : Print Even Numbers from 1 to N using do-while
document.write("<h2>Q3 : Print Even Numbers from 1 to N</h2>");

let n = Number(prompt("Enter any number"));

console.log("Input : " + n);
document.write("Input : " + n + "<br><br>");

let k = 2;

console.log("Q3 Output:");
do {
    if (k <= n) {
        console.log(k);
        document.write(k + " ");
    }
    k += 2;
} while (k <= n);

document.write("<hr>");



// Q4 : Fibonacci Series up to N Numbers using for loop
document.write("<h2>Q4 : Fibonacci Series</h2>");

let num = Number(prompt("Enter any number"));

console.log("Input : " + num);
document.write("Input : " + num + "<br><br>");

let a = 0;
let b = 1;
let c;

console.log("Q4 Output:");

for (let x = 1; x <= num; x++) {

    console.log(a);
    document.write(a + " ");

    c = a + b;
    a = b;
    b = c;
}