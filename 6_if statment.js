// if statment - it will execute only when all condition is true, if condition is false code will not execute.

let age = 29;
if(age>=21){
  console.log("we can vote");
  console.log("we can drive");
  console.log("we are adult");
 
}
//
let age1 = 21;
if(age1<=18){
    console.log("can not vote");  // output will not print bz condition not true its false
}

//

let age2 = 20

if(age2>21){
    console.log(" you can marry");// output will not print bz consition not true, its false
    let a = 10;  // another variable
    console.log(5*a); // it will not print bz upar yani age wali statment false hai.   
}

//

let age3 = 24

if(age3>21){
    console.log(" you can marry"); // output = you can marry
    let a = 10;
    console.log(5*a); //output =50, it will print bz upar yani age wali statment true hai.   
}
//
let firstname = "rakesh"
if (firstname== "rakesh") {
    console.log(`welcome ${firstname}`);  // welcome rakesh
}
let firstname1 = "pushpa"
if (firstname1== "rakesh") {
    console.log(`welcome ${firstname1}`);  // will not print bz condition is false
}
 
// q1- create a traffic light system that shows what to do based on colour?

let light1 = "Green"
let light2 = "Red"
let light3 = "yellow"

if (light1 = "Green") {
    console.log("you can go");   
}

if (light2="Red") {
    console.log("you can not go");   
}
if (light3="yellow") {
    console.log("go carefully");
    
}