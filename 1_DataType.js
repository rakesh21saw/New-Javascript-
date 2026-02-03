 // console.log();- To write (log) a massageon the console
  
  let say ="Hello"
 console.log(say);
 
 /*
 VARIABLE - A variable is simply the name of a storage location
 the variable of java script can be changed during a PerformanceNavigationTiming.apply

 //Datatype

  Primitive data type- are a set of basic data types in java script.

 Premitive data type are call by value. 

 There are 7 primitive data types (N N, B B  S S, U)

 Number, NULL, Boolean, bigant,STRING, SYMBOL,undefined.
 */
 let score = 100 // number - it can be negative or positive , integer, decimal.
 let temp = null // null
 let work = true // boolean - it can be trur ot false
 let  bigscore1 = 1004739386.09876// bigant
 let Name = "india" // string
 let id = Symbol("123") // symbol
 let email;// undefined

 // How to find data type
console.log(typeof score);
console.log(typeof null);//** Here type of null is object */
console.log(typeof undefined);// type of undefined is undefined.

/*
1. NUmbers in JS - positive(14), negative(-7), intgers(10,20), floating number with decimal(4.6,-8.9)

// Nan in js- The nan lobal property is a value representing not a number
// NaN is a non-configurable, non-writable property.
// e.g- 0/0, NaN-1,nan*1, nan*nan
// NaN (Not a Number) is a numeric data type that means an undefined value or value that cannot be represented
*/
let a = 0
let b = 0
console.log(a/b); // output will be NaN

// 2. Boolean in js - Boolean reprsent a truth value -> true/false, yes/no.

let age = 25;
 let isAdult = true; // here wa can not write true in capital like True
console.log(isAdult);
console.log(typeof isAdult ); // boolean

//
let age1 = 25;
 let isAdult1 = "true";
console.log(isAdult1);
console.log(typeof isAdult1); //  string


// 3. String - string are text or sequance of charecters

let name = "rakesh";
console.log(name);
console.log(typeof name);
//
let movie = 'dhrtiputra';
console.log(movie);
//
let x = "2121        5656";
console.log(x);
//
let char = "a"
console.log(char);
//
let emp= ""; // space
console.log(emp);
console.log(typeof emp);
// 
let fruit = 'this is "apple"'
console.log(fruit);

// let fruit = 'this is 'apple''
//console.log(fruit); // it will throw error bz we can not put single quote in single quote

// string Indices - in programming indeces means position

let hero = "ironman"
console.log(hero[2]);// o
console.log(hero[4]); // m
//
let search = "hohlshohgddcvhjutesxvjoiytdxcv"
console.log(search[100]); // output will be undefined bz we dont have here 100 charecter

// how to print length 

let student = "asdwert"
console.log(student);
console.log(student.length);
console.log(typeof student.length); // datatype is number

// 

let teacher = "hbnjudxcfgdrtyibvcfyjkmbvfhjl;lkjgcdsdsdfgnkl;poiutrdsxcvbnmnbvcxdfgh"
console.log(teacher);
console.log(teacher[17]);
console.log(teacher.length);

//

let school = "DAV PUBLIC" 
console.log(school);
console.log(school.length);
console.log(school.length-2);
console.log(school[school.length-2]);



// 4. undefined - A variable that has not been assigned a value is of type undefined

let value; 
console.log(value); // undefined

console.log(typeof value); // undefined

// 5. Null- A null value reprsent the intentional absense of any object value. null to be explicitly assigned.

let y = null; // null to be explicitly assigned.

console.log(y); // output - null
console.log(typeof y); // object***





































