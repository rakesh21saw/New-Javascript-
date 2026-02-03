// Array methods.

// Push - add to end
// unshift - add to start
// pop - delete from end & return it
// shift - delete from stsrt & return

// push()- the push method add a new element to an aaray at the end and it returns a new array length.

let cars = ["thar","maruti","toyto"]
console.log(cars.length);//3

cars.push ("bmw")
console.log(cars);// [ 'thar', 'maruti', 'toyto', 'bmw' ]

console.log(cars.length);//4


// pop ()- the pop method removes the last element from an aaray

let fruits = ["kela","santra","amrud","lichi"]
console.log(fruits.length);//4

fruits.pop()
console.log(fruits);// [ 'kela', 'santra', 'amrud' ]
console.log(fruits.length); //3

//
let num = [1,2,3,4,5]
num.pop()
console.log(num);// [ 1, 2, 3, 4 ]

// unshift- the undshift method add a new element to an array at begining.

let colour = ["red","black","green"]
colour.unshift("yellow")
console.log(colour);//[ 'yellow', 'red', 'black', 'green' ]

// Shift()- shift method removes first array element and shift all other elements to a lower index.

let x = [1,2,3,4,5,6]
x.shift()
console.log(x); //[ 2, 3, 4, 5, 6 ]
//
 let followers = ["a","b","c"]
 let block = followers.shift()
 console.log(followers);//[ 'b', 'c' ]
 console.log(block);// a

 // indexof - returns index of something.

 let primary = ["red","green","yellow"];
 console.log(primary.indexOf("green"));//1
 console.log(primary.indexOf("Green")); // -1

 //includes : search for a value or we can find the value is included or not.

 let myarr = [1,2,3,4,5,6]
 console.log(myarr.includes(5)); // true 
 console.log(myarr.includes(8)); // false
 
 
 
 
 
 





