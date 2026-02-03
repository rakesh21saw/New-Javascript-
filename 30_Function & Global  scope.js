//
/* SCOPE - Scope determines the accesssibility of variable , object, and function from diffrent parts.

1. Function scope
2. Block scope
3. Lexical scope
*/

// Function Scope- Variables defined inside a function are not accesssable(Visible) from outside the function.

function calsum(a,b) {
    let sum = a+b;  
}
//calsum(sum); // give error 

// lets call 
function calsum(a,b) { 
    let sum = a+b;  // ye variable sum function ke andar define hua hai , tho ye sum variable ko function ke andar hi use kar sakte hai
}                   // ye bahar accessble nhi hoga 

//calsum(1,2); // give error= will not print

// 
function calsum(a,b) {
    let sum = a+b;  
    console.log(sum);
    
}
calsum(1,2); // 3

// let suppose create a same variavle outside the functiion.
let sum = 50; //GLOBAL SCOPE

function calsum(a,b) {
    let sum = a+b;   // FUNCTION SCOPE
    console.log(sum);
     
}
calsum(2,5); // 7

// NOTE- Jab bhi kisi code ke pass same name ke varible hoga like ek global ho nd dusra function ho
// yaha pe sirf Function scope print hoga bz ye jaysa specific hai

//

let sum1 = 50; //GLOBAL SCOPE //e bahar hi print ho sakta hai sirf


function calsum1(a,b) {
    let sum1 = a+b;   // FUNCTION SCOPE
    console.log(sum1);
     
}
calsum1(20,5); // 25

console.log(sum); // 50  = ye bahar hi print ho sakta hai sirf

//

let sum2= 80; //GLOBAL SCOPE

function calsum2(a,b) {
    //let sum2 = a+b;   let suppose function ke andar koi variable defined nhi hai.

    console.log(sum2); // 80 - hm function ke andar hm global scope wale variable use kar sakte hai jab function ke andar koi variable nhi hai
}
calsum2(15,30); // it will not print bz function ke andar koi variable hi nhi hai

console.log(sum2); // 80- 


