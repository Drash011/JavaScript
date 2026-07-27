// Object Keys
let student = {
    name: "Drashti",
    age: 21,
    city: "Surat"
};

for (let key of Object.keys(student)) {
    console.log(key);
    document.write(key + "<br>");
}

// Object Values
let student2 = {
    name: "Drashti",
    age: 21,
    city: "Surat"
};

for (let value of Object.values(student2)) {
    console.log(value);
    document.write(value + "<br>");
}

// Object Entries
let student3 = {
    name: "Drashti",
    age: 21,
    city: "Surat"
};

for (let [key, value] of Object.entries(student3)) {
    console.log(key + " : " + value);
    document.write(key + " : " + value + "<br>");
}

// String Values
let student4 = {
    name: "Drashti",
    age: 21,
    city: "Surat",
    marks: 90
};

for (let value of Object.values(student4)) {

    if (typeof value === "string") {
        console.log(value);
        document.write(value + "<br>");
    }

}