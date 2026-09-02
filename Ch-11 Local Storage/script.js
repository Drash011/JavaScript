// document.getElementById('add-btn').addEventListener('click', () => {
//     localStorage.setItem('name', 'Drashti Thummar');
//     localStorage.setItem('course', 'Front End Development');
//     localStorage.setItem('age', 19);
// });

// document.getElementById('update-btn').addEventListener('click', () => {
//     localStorage.setItem('name', 'Drash011');
//     localStorage.setItem('course', 'Full Stack Development');
// });

// document.getElementById('delete-btn').addEventListener('click', () => {
//     localStorage.removeItem('name');
// });

// document.getElementById('get-btn').addEventListener('click', () => {
//     console.log(localStorage.getItem('name'));
//     console.log(localStorage.getItem('course'));
//     console.log(localStorage.getItem('age'));
// });

document.getElementById('add-btn').addEventListener('click', () => {


    products = [{
        name: 'iPhone 17 Pro Max',
        price: 141900,
        brand: 'Apple',
        Storage: '1TB',
        color: ['Black', 'White', 'Blue', 'Green', 'Red'],
        image: 'c:\\Users\\thumm\\Downloads\\iPhone-17-pro-max.jpg',
        description: 'UNIBODY DESIGN. FOR EXCEPTIONAL POWER — Heat-forged aluminium unibody enclosure for the most powerful iPhone ever made.',
    }, ];

    localStorage.setItem('products', JSON.stringify(products));

    const getProducts = JSON.parse(localStorage.getItem('products'));

    console.log(getProducts);
});