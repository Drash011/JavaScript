//Object.keys()
let student = {
    name: "Drashti",
    age: 21,
    city: "Surat"
};

console.log(Object.keys(student));


// Object.values()
let student2 = {
    name: "Drashti",
    age: 21,
    city: "Surat"
};

console.log(Object.values(student2));


// Object.entries()
let student3 = {
    name: "Drashti",
    age: 21,
    city: "Surat"
};

console.log(Object.entries(student3));

for (let [key, value] of Object.entries(student3)) {}