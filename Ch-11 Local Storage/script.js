document.getElementById('add-btn').addEventListener('click', () => {
    localStorage.setItem('name', 'Drashti Thummar');
    localStorage.setItem('course', 'Front End Development');
    localStorage.setItem('age', 19);
});

document.getElementById('update-btn').addEventListener('click', () => {
    localStorage.setItem('name', 'Drash011');
    localStorage.setItem('course', 'Full Stack Development');
});

document.getElementById('delete-btn').addEventListener('click', () => {
    localStorage.removeItem('name');
});

document.getElementById('get-btn').addEventListener('click', () => {
    console.log(localStorage.getItem('name'));
    console.log(localStorage.getItem('course'));
    console.log(localStorage.getItem('age'));
});