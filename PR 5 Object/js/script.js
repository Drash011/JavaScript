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

    let found = students.find(s => s.id === student.id);

    if (found) {

        console.log("Student ID Already Exists");

        document.write("<p class='success'>Student ID Already Exists</p>");

    } else {

        students.push(student);

        console.log("Student Added Successfully");

        document.write("<p class='success'>Student Added Successfully</p>");

    }

}

addStudent({

    id: 104,
    name: "Neha",
    age: 22,
    course: "React",
    marks: 91,

    details: function() {

        return `${this.name} is studying ${this.course}`;

    }

});


function updateStudent(id, name, course, marks) {

    let student = students.find(s => s.id === id);

    if (student) {

        student.name = name;
        student.course = course;
        student.marks = marks;

        console.log("Student Updated");

        document.write("<p class='success'>Student Updated Successfully</p>");

    }

}

updateStudent(102, "Priya Patel", "Full Stack", 95);

function deleteStudent(id) {

    let index = students.findIndex(s => s.id === id);

    if (index != -1) {

        students.splice(index, 1);

        console.log("Student Deleted");

        document.write("<p class='success'>Student Deleted Successfully</p>");

    }

}

deleteStudent(103);

document.write("<h2>All Students</h2>");

console.log("------- All Students -------");

for (let student of students) {

    console.log(student);

    document.write(`

<div class="card">

<b>ID :</b> ${student.id}<br><br>

<b>Name :</b> ${student.name}<br><br>

<b>Age :</b> ${student.age}<br><br>

<b>Course :</b> ${student.course}<br><br>

<b>Marks :</b> ${student.marks}

</div>

`);

}


document.write("<h2>Student Object Details</h2>");

console.log("------ Student Details ------");

let selectedStudent = students[0];

document.write("<div class='card'>");

for (let key in selectedStudent) {

    if (typeof selectedStudent[key] != "function") {

        console.log(key + " : " + selectedStudent[key]);

        document.write("<b>" + key + "</b> : " + selectedStudent[key] + "<br><br>");

    }

}

document.write("</div>");


document.write("<h2>Result</h2>");

console.log("------ Result ------");

for (let student of students) {

    let result = student.marks >= 35 ? "Pass" : "Fail";

    console.log(student.name + " : " + result);

    document.write("<div class='card'><b>" + student.name + "</b> : " + result + "</div>");

}


let topper = students[0];

for (let student of students) {

    if (student.marks > topper.marks) {

        topper = student;

    }

}

console.log("Topper :", topper.name, topper.marks);

document.write("<h2>Topper</h2>");

document.write("<div class='card'><h3>" + topper.name + "</h3><b>Marks :</b> " + topper.marks + "</div>");


document.write("<h2>this Keyword</h2>");

console.log("------ this Keyword ------");

for (let student of students) {

    console.log(student.details());

    document.write("<div class='card'>" + student.details() + "</div>");

}