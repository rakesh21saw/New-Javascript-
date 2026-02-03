/* Linear collection of things.
An aaray is a special variable , which can hold more than one value.
array always writen in square bracket[]
eg.
const array = [1,2,3,4,56,67,......]
let instafollower = [sanket,rahul,raj,ankit,demo...]

An array can hold many value under a single name and we can access the value by refeering to an number.

JS array can be resizable and can contains a mix of diffrent data type.
*/

let student1 = "aman"
//console.log(student1)

let student2 = "mohan"
//console.log(student2);

let student3 = "rohan"
//console.log(student3);

let student4 = "sohan"
//console.log(student4);

// let create a array.

let students = ["aman","mohan","raman","sohan"];

console.log(students);  // [ 'aman', 'mohan', 'raman', 'sohan' ]

// 
let num = "aman"
console.log(num[1]);//m
console.log(num.length); // 4
console.log(typeof num); // string
//
let value = [1,2,3,4]
console.log(value); // [ 1, 2, 3, 4 ]
console.log(value.length); //4
console.log(typeof value); // object

// **
let value2= [1,2,3][4,5,6];
console.log(value2);// undefined

// Creating Arrays.

// in array it is not necessary to store similar type of datatype, we can store multiple data types.

let marks = [90.80,70,60,];

let names =["rahul","gudiya","aman"];
//

let info = ["aman",26,5.8];

console.log(info);// [ 'aman', 26, 5.8 ]

console.log(info.length); //3

console.log(info[2]); // 5.8

 

// we can also craete an empty array

let arry = [];

console.log(arry);//[]
console.log(arry.length);//0

// Arrays are mutable matlab array ke andar jo value hota hai usko change kiya jaa sakta hai

let fruit = ["kela","annar","angur"]
console.log(fruit);// [ 'kela', 'annar', 'angur' ]
console.log(fruit.length); //3


// now let isko mutable bnate hai

fruit[2] = "aam"
console.log(fruit);// [ 'kela', 'annar', 'aam' ] 

fruit[8]= "amrud"
console.log(fruit);//[ 'kela', 'annar', 'aam', <5 empty items>, 'amrud' ]
console.log(fruit.length);//9
console.log(fruit[5]); // undefined bz waha koi fruit name hai hi nhi, 5 th position pe emplty hai















