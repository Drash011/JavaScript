// q-1
console.log("Question 1: Find Negative Elements");
document.write("<h2>Question 1: Find Negative Elements</h2>");
let arr = [10, -5, 20, -15, 30, -8];
let negative = arr.filter(num => num < 0);
console.log(arr);
console.log(negative);
document.write(negative.join(", "));

// q-2
console.log("Question 2: Find Largest Element");
document.write("<h2>Question 2: Find Largest Element</h2>");
let arr2 = [10, 20, 50, 40, 15];

let largest = arr2[0];

for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] > largest) {
        largest = arr2[i];
    }
}

console.log(arr2);
console.log(largest);
document.write(largest);

// q-3
console.log("Question 3: Find Maximum Element");
document.write("<h2>Question 3: Find Maximum Element</h2>");
let arr3 = [12, 25, 40, 80, 5];
let max = arr3[0];
for (let i = 1; i < arr3.length; i++) {
    if (arr3[i] > max) {
        max = arr3[i];
    }
}

console.log(arr3);
console.log(max);
document.write(max);

// q-4
console.log("Question 4: Find Minimum Element");
document.write("<h2>Question 4: Find Minimum Element</h2>");
let arr4 = [20, 15, 40, 2, 60];
let min = arr4[0];
for (let i = 1; i < arr4.length; i++) {
    if (arr4[i] < min) {
        min = arr4[i];
    }
}

console.log(arr4);
console.log(min);
document.write(min);

// q-5
console.log("Question 5: Find Duplicate Elements");
document.write("<h2>Question 5: Find Duplicate Elements</h2>");
let arr5 = [10, 20, 30, 20, 40, 10];
let duplicate = [];

for (let i = 0; i < arr5.length; i++) {
    for (let j = i + 1; j < arr5.length; j++) {
        if (arr5[i] === arr5[j] && !duplicate.includes(arr5[i])) {
            duplicate.push(arr5[i]);
        }
    }
}

console.log(arr5);
console.log(duplicate);
document.write(duplicate.join(", "));

// q-6
console.log("Question 6: Sum of Elements");
document.write("<h2>Question 6: Sum of Elements</h2>");
let arr6 = [10, 20, 30, 40];

let sum = 0;

for (let i = 0; i < arr6.length; i++) {
    sum += arr6[i];
}

console.log(arr6);
console.log(sum);
document.write(sum);

// q-7
console.log("Question 7: Print First, Middle and Last Element");
document.write("<h2>Question 7: Print First, Middle and Last Element</h2>");
let arr7 = [10, 20, 30, 40, 50];

console.log(arr7);
console.log("First:", arr7[0]);
console.log("Middle:", arr7[Math.floor(arr7.length / 2)]);
console.log("Last:", arr7[arr7.length - 1]);

document.write("First: " + arr7[0] + "<br>");
document.write("Middle: " + arr7[Math.floor(arr7.length / 2)] + "<br>");
document.write("Last: " + arr7[arr7.length - 1]);

// q-8
console.log("Question 8: Sum of Elements at Even Indexes");
document.write("<h2>Question 8: Sum of Elements at Even Indexes</h2>");
let arr8 = [10, 20, 30, 40, 50, 60];

let sum2 = 0;

for (let i = 0; i < arr8.length; i++) {
    if (i % 2 === 0) {
        sum2 += arr8[i];
    }
}

console.log(arr8);
console.log(sum2);
document.write(sum2);