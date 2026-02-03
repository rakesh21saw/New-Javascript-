//
/* RETURN KEYWORD - return keyword is used to return some value from the function.

 INPUT ------------->Function(does some work)------------> Output



 function functionName(arg1,arg2....) {
    // do something

    retuen val;
 }
    */

 function sum(a,b) {
    return a+b;
    
 }
 sum(); //  here value ko return kiya sirf,ye kabhi print nhi hoga bz value ko console.log tho kiya hi nhi

 // 
 function sum1(a,b) {
    return a+b; 
    
 }
 let s = sum1(4,9)
 console.log(s);
// or
console.log(sum1(4,9));//13 // jab bhi kabhi value return hota hao tho usko kisi bariable ke andar store kar sakte hai ya directly use kar sakte hai.

//  Caluclate sum of any three number.

function sum2(a,b) {
    console.log(a+b);
    return a+b; 
    
 }
 sum2(sum2(10,20),40)// 70

 // Any code written in the function after the return statement is not execute.

 function addtwoNumbers(num1, num2) {
    let addition2 = num1 + num2
    console.log(addition2); // It will print in output
    
    return addition2  // Any code written in the function after the return statement is not execute
 
    console.log("Rakesh"); // it will not print bz its comeing after return keyword.

 }
addtwoNumbers(20,80);//100

//

function IsAdult(age) {
    if (age>21) {
        return "daru pi sakta hai";
        
        
    } else{
        return "nhi pi sakta";

    }
      console.log("bye bye");// it will not print
      
}
let x= IsAdult(25);// it is excuted but no given any  output, it returns the value but did not printed.

console.log(x);// instruction given to print,- outpur= daru pi sakta hai

// q-1 - Create a Function that returns the sum of number from 1 to n.

function sumtwo(n) {
   let sum = 0;
   for (let a = 1; a <= n; a++) {
      sum = sum + a;       
   }
   return sum;
}

let C = sumtwo(4);
console.log(C); // 10
