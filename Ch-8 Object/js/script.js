let students = {
    fname: "Drashti",
    lname: "Thummar",
    roll_No: 12006,
    phone: 1234567895,
    marks: {
        Math: 89,
        Science: 92,
        Economics: 95,
        Statistics: 98,
        English: 97
    }

}


document.write("<h1>Student Data </h1> <hr/> ");
document.write(`<p> <strong>First Name :</strong> ${students.fname}</p>`);
document.write(`<p> <strong>Last Name :</strong> ${students.lname}</p>`);
document.write(`<p> <strong>Roll Number :</strong> ${students.roll_No}</p>`);
document.write(`<p> <strong>Phone Number :</strong> ${students.phone}</p>`);
document.write(`
<p>
  <strong>Exam Marks:</strong><br>
  Math = ${students.marks.Math}<br>
  Science = ${students.marks.Science}<br>
  Economics = ${students.marks.Economics}<br>
  Statistics = ${students.marks.Statistics}<br>
  English = ${students.marks.English}
</p>
`);