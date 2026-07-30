let students = [

    {
        id: 101,
        name: "Rahul",
        age: 20,
        course: "JavaScript",
        marks: 78,

        details: function() {
            return `${this.name} is studying ${this.course}`;
        }
    },

    {
        id: 102,
        name: "Priya",
        age: 19,
        course: "Web Development",
        marks: 85,

        details: function() {
            return `${this.name} is studying ${this.course}`;
        }
    },

    {
        id: 103,
        name: "Amit",
        age: 21,
        course: "JavaScript",
        marks: 62,

        details: function() {
            return `${this.name} is studying ${this.course}`;
        }
    }

];


function addStudent(student) {

    let found = students.filter(s => s.id === student.id);

    if (found.length > 0) {

        alert("Student ID Already Exists");

    } else {

        students.push(student);

        alert("Student Added Successfully");
        console.log("Student Added Successfully");

    }

}

let newStudent = {

    id: Number(prompt("Enter Student ID")),
    name: prompt("Enter Student Name"),
    age: Number(prompt("Enter Student Age")),
    course: prompt("Enter Course"),
    marks: Number(prompt("Enter Marks")),

    details: function() {

        return `${this.name} is studying ${this.course}`;

    }

};

addStudent(newStudent);


function updateStudent(id, name, course, marks) {

    let student = students.filter(s => s.id === id);

    if (student.length > 0) {

        student[0].name = name;
        student[0].course = course;
        student[0].marks = marks;

        alert("Student Updated Successfully");
        console.log("Student Updated Successfully");

    } else {

        // alert("Student Not Found");
        return student;

    }

}

let updateId = Number(prompt("Enter Student ID to Update"));

let updateName = prompt("Enter New Name");

let updateCourse = prompt("Enter New Course");

let updateMarks = Number(prompt("Enter New Marks"));

updateStudent(updateId, updateName, updateCourse, updateMarks);


function deleteStudent(id) {

    let oldLength = students.length;

    students = students.filter(s => s.id !== id);

    if (students.length < oldLength) {

        alert("Student Deleted Successfully");
        console.log("Student Deleted Successfully");

    } else {

        alert("Student Not Found");

    }

}

let deleteId = Number(prompt("Enter Student ID to Delete"));

deleteStudent(deleteId);


document.write("<h2>All Students</h2>");
console.log("------ All Students ------");

for (let student of students) {

    console.log(student);

    document.write(`
    
    <div style="border:1px solid black;padding:10px;margin:10px;">
    
        <b>ID :</b> ${student.id}<br><br>

        <b>Name :</b> ${student.name}<br><br>

        <b>Age :</b> ${student.age}<br><br>

        <b>Course :</b> ${student.course}<br><br>

        <b>Marks :</b> ${student.marks}

    </div>

    `);

}


document.write("<h2>Student Object Details</h2>");
console.log("------ Student Object Details ------");


let selectedStudent = students[0];

document.write("<div style='border:1px solid black;padding:10px;margin:10px;'>");

for (let key in selectedStudent) {

    if (typeof selectedStudent[key] !== "function") {

        console.log(key + " : " + selectedStudent[key]);

        document.write(`<b>${key}</b> : ${selectedStudent[key]}<br><br>`);

    }

}

document.write("</div>");


document.write("<h2>Result</h2>");
console.log("------ Result ------");

for (let student of students) {

    let result = student.marks >= 35 ? "Pass" : "Fail";

    console.log(student.name + " : " + result);

    document.write(`
    
    <div style="border:1px solid black;padding:10px;margin:10px;">
    
        <b>${student.name}</b> : ${result}
    
    </div>

    `);

}


let topper = students[0];

for (let student of students) {

    if (student.marks > topper.marks) {

        topper = student;

    }

}

console.log("------ Topper ------");
console.log(topper);
document.write("<h2>Topper</h2>");

document.write(`
<div style="border:1px solid black;padding:10px;margin:10px;">

    <h3>${topper.name}</h3>

    <b>Marks :</b> ${topper.marks}

</div>
`);


document.write("<h2>this Keyword</h2>");
console.log("------ this Keyword ------");

for (let student of students) {

    console.log(student.details());

    document.write(`
    
    <div style="border:1px solid black;padding:10px;margin:10px;">
    
        ${student.details()}
    
    </div>

    `);

}