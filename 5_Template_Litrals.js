/*
// JavaScript Template Literals (Template Strings)

JavaScript template literals are strings that allow us to embed variables or expressions directly within them. 
They are enclosed in backticks ``.
We can use template literals to embed JavaScript expressions or variables with the help of the ${...} syntax
*/

let name = "Alice";
let greeting = `Hello ${name}`;
//Here, `Hello ${name}` is a template literal and we have embedded the name variable directly within it.
console.log(greeting); // Output: Hello Alice

//

const a = 5;
const b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}`);
