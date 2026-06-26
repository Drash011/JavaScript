// Q1 : Print 1 to 10
document.write("<h2>Q1 : Print 1 to 10</h2>");

let i = 1;

console.log("Q1 Output:");
while (i <= 10) {
    console.log(i);
    document.write(i + " ");
    i++;
}

document.write("<hr>");



// Q2 : Print 10 to 1
document.write("<h2>Q2 : Print 10 to 1</h2>");

let j = 10;

console.log("Q2 Output:");
while (j >= 1) {
    console.log(j);
    document.write(j + " ");
    j--;
}

document.write("<hr>");



// Q3 : Print 1 to N
document.write("<h2>Q3 : Print 1 to N</h2>");

let n = Number(prompt("Enter any number"));

console.log("Input: " + n);
document.write("Input : " + n + "<br><br>");

let k = 1;

console.log("Q3 Output:");
while (k <= n) {
    console.log(k);
    document.write(k + " ");
    k++;
}

document.write("<hr>");
              


// Q4 : Print Odd Numbers from N to 1
document.write("<h2>Q4 : Print Odd Numbers from N to 1</h2>");

let num = Number(prompt("Enter any number"));

console.log("Input: " + num);
document.write("Input : " + num + "<br><br>");

if (num % 2 == 0) {
    num--;
}

console.log("Q4 Output:");
while (num >= 1) {
    console.log(num);
    document.write(num + " ");
    num -= 2;
}

document.write("<hr>");



// Q5 : Leap Years Between Two Numbers
document.write("<h2>Q5 : Leap Years Between Two Numbers</h2>");

let start = Number(prompt("Enter First Year"));
let end = Number(prompt("Enter Second Year"));

console.log("Start Year: " + start);
console.log("End Year: " + end);

document.write("Start Year : " + start + "<br>");
document.write("End Year : " + end + "<br><br>");

console.log("Leap Years:");

while (start <= end) {

    if ((start % 400 == 0) || (start % 4 == 0 && start % 100 != 0)) {
        console.log(start);
        document.write(start + " ");
    }

    start++;
}