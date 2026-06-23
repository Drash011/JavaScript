let celsius = Number(prompt("Enter Celsius : "));

let fahrenheit = (celsius * 9 / 5) + 32;

console.log("The temperature in Celcius = " + celsius);
console.log("The temperature in Fahrenheit = " + fahrenheit);

document.write(`<h3>The temperature in Celcius = ${celsius}</h3>`)
document.write(`<h3>The temperature in Fahrenheit = ${fahrenheit}</h3>`);