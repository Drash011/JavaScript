/**
 * Operator:
 * 
 * => Operator is Symbol, Which helps to perform Mathametical ans logical operation between operands.
 * 
 * => Operand : Variables & Values.
 * 
 * Types Of Operators :
 * 
 * 1. Unary Operator :
 *                     - Only for one operand
 * 
 *                      1.Incerment (++) :
 *                                       i] Pre Increment (++oprand); 
 *                                       ii] Post Increment (oprand++); 
 * 
 *                      2.Decerment (--) :
 *                                       i] Pre Decrement (--oprand); 
 *                                       ii] Post Decrement (oprand--); 
 * 
 * 
 * 2. Binery Operator :
 *                      - Two or Multiple operands.
 * 
 *                      1.Arithmetic Operator :
 *                                              [+  -  *  /  %  **]
 *                      1.Assignment Operator :
 *                                              [=  +=  -=  *=  /=  %=]
 *                      1.Comparison Operator :
 *                                              [==  !=  >  <  >=  <=  ===  !==]
 *                      1.Logical Operator :
 *                                              [&&  || !]
 * 
 * 3.Ternery Operator :
 *                       (condition)
 *                                  ? true statment
 *                                  : false statment;
 *                                  
*/

let name;
let age;
let first;
let second;

name = prompt("Enter your name :");
age = +prompt("Enter your age :");
first = +prompt("Enter first Number :");
second = +prompt("Enter second Number :");

console.log(`Name : ${name}`);
console.log(`Age : ${age}`);
console.log(`First : ${first}`);
console.log(`Second : ${second}`);
console.log(`Addition : ${first + second}`);
console.log(`Substraction : ${first - second}`);
console.log(`Multipication : ${first * second}`);
console.log(`Devision : ${first / second}`);


document.write(`<h1 align ='center'>Operator</h1><br>`);
document.write(`<big>Name : ${name}</big><br><br>`);
document.write(`<big>Age : ${age}</big><br><br>`);
document.write(`<big>First : ${first}</big><br><br>`);
document.write(`<big>Second : ${second}</big><br><br>`);
document.write(`<big>Addition : ${first + second}</big><br><br>`);
document.write(`<big>Substraction : ${first - second}</big><br><br>`);
document.write(`<big>Multipication : ${first * second}</big><br><br>`);
document.write(`<big>Devision : ${first / second}</big><br><br>`);