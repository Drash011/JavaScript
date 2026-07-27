// Object with Array

// Student
let student = {
    name: "Drashti",
    marks: [80, 90, 95]
};

console.log(student.marks);


// Employee
let employee = {
    name: "Rahul",
    skills: ["HTML", "CSS", "JavaScript"]
};

console.log(employee.skills[1]);


// Product
let product = {
    name: "Laptop",
    price: [50000, 55000]
};

console.log(product.price[0]);


// Array with Object
// Student
let students2 = [
    { name: "Amit", age: 20 },
    { name: "Neha", age: 21 },
    { name: "Raj", age: 22 }
];

console.log(students2[1].name);


// Employee
let employee2 = [
    { id: 1, name: "Amit" },
    { id: 2, name: "Rahul" }
];

console.log(employee2[0].id);


// Mobile
let mobile = [
    { brand: "Samsung", price: 25000 },
    { brand: "Apple", price: 70000 }
];

console.log(mobile[1].brand);