/* Let - syntex of declearing variable
Using let variable  can be updated not redeclered. and const  can neither be updated or 
re decleared,let or const block scoped.
*/
//
let a = 10;
console.log(a); // output = 10
//
let b ; // yaha  b ke andar koi value store nhi hua but hmne sirf varible define   kiya hai
console.log(b); //  output = undefined

//
let age = 23;
 age = age +1; // let variable  can be updated 
 console.log(age);  // output =24

 //

 let g = "India";
//let g = 4; // we cant re-decleared otherwise it will throw error
g = "nation" // we can update or reassigen.
console.log(g);

let h = 18;
{
    let h = "bbbbbb";   // block scoped
    console.log(h);
    
}
console.log(h);

//

let num1 = 10;
let num2 = 20;
let sum = num1+num2;
console.log(sum); // output = 30


// Const - value of constant can not be changed with re-assignment and they can not be re-decleared

const  year = 2025
 console.log(year);

 //year = year+5    // let change the value/ update / re-assigned the year value
 // console.log(year); // output = error
 
 const pi = 3.14

 /* VAR:
  var - old syntex of writing variable , var is globally and blocked scoped
 using var  variavle can be redeclered or can be updated while programming. 
  prefer not to use var because of issue in block scope and functional scope.
*/
var e = 10;
var e = "name"; // re decleared and update
var e ="INDIA"; // re decleared or reassigen.
console.log(e); // output = India  not name or 10

var f =12;

{  // scope
    var f = 15
    console.log(f); 
}
console.log(f);
 
// q.1

let age1 = 25;
age1+5 // no updation in age bz i did not use = sign or assigment operator
console.log(age1); // output will be 23 not 25 

let age2 = 25;
age2 = age2 +5; // here updated the age value bz we i used = sign
console.log(age2); // output= 25

// q2

let hindi = 40;
let english = 50;
let math =  60;
let avg = (hindi+english+math)/5;
console.log(avg); // output = 30
let avg2 =(hindi,english,math)/10;
console.log(avg2); // **












 


 
