/*
loops- used to iterate(repeat) a piece of code.
Loops perform an operation (i.e., a chunk of work) a number of times, 
usually once for every item in an array or list, or to simply repeat an operation 
until a certain condition is met.

Loop Type	Use Case / Kab use karte hai
for loop -	      Jab aapko pata ho ki kitni baar loop chalega
while loop -	  Jab aapko nahi pata kitni baar chalega, bas condition true hone tak chalana hai
do...while loop	-  Kam se kam ek baar to chale hi chale
for...of loop -	    Array, String jaise iterable cheezo ke elements ko access karne ke liye
for...in loop -	    Object ke keys iterate karne ke liye

JavaScript supports different kinds of loops:

for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true
*/

/* 
For loop - The for statement creates a loop with 3 optional expressions:

 for (initialisation;condition;updation) {

    // do something// print//log
 }
here
 step 1 > Initalisation - means kisi bhi counter variable ko initilasie karte hai matlab ye trck karega 
                         koi kaam kitni baar hua hai.

   step 2 > condition defines the condition for executing the code block.

   step 3 > updation- 
*/


/*
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
//

//  inilisation > check condition or ending point > execute  > updation

for (let x = 1; x <=5; x++) {
    console.log(x);   
}
    inilisation > check condition or ending point > execute  > updation
*/
for (let x = 1; x <=5; x++) { // forward loop
    console.log(x);   
}
//
for ( let y=5;y>=1;y--) { // backword loop

     console.log(y);    
}
//

for ( let z=10;z>=1;z=z-3) { // backword loop
    console.log(z);    
}
