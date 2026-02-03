/*
If the function is created as a part of an expression, it's called a “Function Expression
 
const variable = function (arg1,arg2) {

 // do something

}

*/

const sum = function (a,b) {
     return a+b;
}
sum(2,3); 
console.log(sum(2,3));// 5
//
let hello= function() {
    console.log("HELLO MY FRIND");   
}
hello(); 

//  let change the value of hello

hello = function() {
    console.log("namaste MY FRIND");   
}

hello();


/* HIGH ORDER FUNCTION- A function that does one or both below
  . takes one or multiple function as argument.
  . returns a function
*/

let greet = function() {
    console.log("pakistan ko uda do");
}

greet();
greet();
greet ();//pakistan ko uda do, here we printed grreet three times.

// now instesd of writing greet() , many times we can create a function to print many times

// M1
function multipleGreet(func,count) {
    for (let z = 0; z <=count; z++) {
        func()   
    }   
}
 let greet1 = function() {
    console.log("pakistan ko uda do");
 }
 multipleGreet(greet,1000)// greet will execute 1000 times.

//M2
function multiplewin(func,count) {
    for (let z = 0; z <=count; z++) {
        func()   
    }  
}
multiplewin(function() {console.log("India jitega")},50); // india jitega will print 50 times



// High order function= Returns as function