// Print Keys
let student = {
    name: "Drashti",
    age: 21,
    city: "Surat"
};

for (let key in student) {
    console.log(key);
    document.write(key + "<br>");
}

// Print Values
let student2 = {
    name: "Drashti",
    age: 21,
    city: "Surat"
};

for (let key in student2) {
    console.log(student2[key]);
    document.write(student2[key] + "<br>");
}

// Print Keys and Values
let student3 = {
    name: "Drashti",
    age: 21,
    city: "Surat"
};

for (let key in student3) {
    console.log(key + " : " + student3[key]);
    document.write(key + " : " + student3[key] + "<br>");
}