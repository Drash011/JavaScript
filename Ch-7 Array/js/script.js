console.log('ARRAY LENGTH');
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size);


console.log('ARRAY TO STRING');
const fruit = ["Banana", "Orange", "Apple", "Mango"];
let myList = fruit.toString();
console.log(myList);


console.log('ARRAY AT');
const nums = [10, 20, 30, 40];
let num = nums.at(2);
console.log(num);


console.log('ARRAY JOIN = add symbol between string');
const symbol = ["Banana", "Orange", "Apple", "Mango"];
let char = symbol.join(" * ");
console.log(char);


console.log('ARRAY POP = Remove last element and return deleted element');
const abc = ["Banana", "Orange", "Apple", "Mango"];
let ABC = abc.pop();
console.log(ABC);


console.log('ARRAY POP = Add last element and return new length of the array');
const pqr = ["Banana", "Orange", "Apple", "Mango"];
let PQR = pqr.push("Kiwi");
console.log(PQR);
