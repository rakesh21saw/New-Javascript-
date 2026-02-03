/* 
// truthy
 Everything in js is true or false (in boolean context means true or false)
 This doesnot mean their value itself is false or true, but thet are treated 
 as false or true if taken in boolean context.

 trutgy value 
  everything else

 // falsy value.
 false values 

 false, 0, -0, On(Bigent value), ""(empty string), null, undefined, Nan
*/

if (true) {
    console.log("true value"); // true value
    
} else{
    console.log("false value");   
}
//
if (false) {
    console.log("true value");
    
} else{
    console.log("false value");   // false value 
}
//
if (0) {
    console.log("true value");
    
} else{
    console.log("false value");   // false value
}
//
if (1) {
    console.log("true value"); // true value
    
} else{
    console.log("false value");   
}
//
if (null) {
    console.log("true value");
    
} else{
    console.log("false value");   // false value
}

// 
if ("") {
    console.log("true value hoga");
    
} else{
    console.log("false value hoga");   // false value
    
}
// 
 
let x ="" //(empty string)
if (x) {
    console.log("x: kuch tho hona chaiye tha");   
} else{
    console.log("heheheh");  // false value
}
//
let num =0 
if (num) {
    console.log("num: kuch tho hona chaiye tha");  
} else{
    console.log("ky  karu mai");  // false value
}