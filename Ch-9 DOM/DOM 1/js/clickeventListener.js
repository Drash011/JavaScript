// querySelector()
// ID
const heading = document.querySelector("#heading");

console.log(heading);

console.log("ID : ", heading.id);
console.log("CLASS : ", heading.className);
console.log("TAG : ", heading.tagName);

heading.style.backgroundColor = 'lavender';
heading.style.color = 'purple';
heading.style.padding = '20px';
heading.style.borderRadius = '8px';
heading.style.border = '1px solid purple'


const fname = document.querySelector("#FName");
const lname = document.querySelector("#LName");
const gr_id = document.querySelector("#GR_ID");
const course = document.querySelector("#Course");
const btn = document.querySelector("#btn");

fname.style.padding = '10px';
fname.style.border = '2px solid gray';
fname.style.borderRadius = '5px';
fname.style.width = '200px';
fname.style.display = 'block';
fname.style.margin = '0px auto'


lname.style.padding = '10px';
lname.style.border = '2px solid gray';
lname.style.borderRadius = '5px';
lname.style.width = '200px';
lname.style.display = 'block';
lname.style.margin = '0px auto'


gr_id.style.padding = '10px';
gr_id.style.border = '2px solid gray';
gr_id.style.borderRadius = '5px';
gr_id.style.width = '200px';
gr_id.style.display = 'block';
gr_id.style.margin = '0px auto'


course.style.padding = '10px';
course.style.border = '2px solid gray';
course.style.borderRadius = '5px';
course.style.width = '200px';
course.style.display = 'block';
course.style.margin = '0px auto'


btn.style.padding = '10px 20px';
btn.style.border = '2px solid gray';
btn.style.display = 'block';
btn.style.margin = '0px auto'
btn.style.backgroundColor = 'black';
btn.style.color = 'white';

// Click Event 
btn.addEventListener("click", () => {
    if (
        fname.value !== "" &&
        lname.value !== "" &&
        gr_id.value !== "" &&
        course.value !== ""
    ) {
        alert(`Hello ${fname.value} ${lname.value}
GR ID: ${gr_id.value}
Course: ${course.value}

🌟 Keep learning, keep growing, keep shining!`);
    } else {
        alert("Fill the Details.....");
    }
});