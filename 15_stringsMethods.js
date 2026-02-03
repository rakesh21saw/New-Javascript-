/*
Strigs are immutable in js
no change can be made to string 
whenever we do try to make a change, a new string is created and old one remains same
*/

// String methos.

//JavaScript provides a variety of string methods to manipulate and work with text.

//1. toLowerCase():Converts the string to lowercase.
 // Output: hello 
//note- 1.str.toLowerCase(), ye orignal string ke andar koi changes nhi karega, ye method ek new string create karegawith the new value.
      //2.strings are immutable

let str = 'HELLO';
console.log(str.toLowerCase()); // Output: hello 

//

//2.toUpperCase(): Converts the string to uppercase.
let msg = 'india';
console.log(msg.toUpperCase()); // Output: HELLO

//3.trim(): Removes whitespace from both ends of the string.

let print = '         Hello world!         ';
console.log(print.trim()); // Output: 'Hello, world!'

// 4. string method with Arguments- argument is a some value that we pass to the method.
 //format - stringName.method(arg)

//5. indexof

let msg1="love you india"
console.log(msg1.indexOf("love"));

let msg2="love my india"
console.log(msg2.indexOf("my"));

let msg3="love you india"
console.log(msg3.indexOf("India"));// optput will be -1 bz India exist hi nhi karta (india exist karta hai)

let msg4="love my india"
console.log(msg4.indexOf("i"));

let msg5="love my india"
console.log(msg5.indexOf("like"));//optput will be -1 bz like exist hi nhi karta

//6.Method chaining- using one method after another. order of execution will be left to right.
// str.toUperCause().trim()

let msg6 = "   mango       "
let newmsg6 = msg6.trim()
console.log(newmsg6);
console.log(newmsg6.toLocaleUpperCase());

//or
let msg7 = "   orange       "
let newmsg7 = msg7.trim()
console.log(newmsg7);
newmsg7 = newmsg7.toLocaleUpperCase()
console.log(newmsg7);

// lets do method chaining here
let msg8 = "   bananaana      "
let newmsg8 = msg8.trim().toUpperCase();// method chaining
console.log(newmsg8);

/* 7. slice method - Return a part of the orignal string as a new string

slice(start, end): Extracts a part of the string and returns it as a new string.
note:   A. ending value is non inclusive.
        B. We can add negative value in that.
*/

 let word = 'Hello, world!';
console.log(word.slice(0, 5)); // Output: Hello

let word1 = 'duniya harami hai';
console.log(word1.slice(0, 4)); // Output: duni
console.log(word1.slice(2,8)); // output: niya h
console.log(word1.slice(2)); // output: niya harami hai

let say = "Lenevo"
console.log(say.slice(0));// lenevo
console.log(say.slice(3,say.length))

// B. We can add negative value in that.

let car= "safari" // total lenghth = 6 -1= 5
console.log(car.slice(-1)); // i
console.log(car.slice(5)) // i
console.log(car.slice(-3)); // 6-3=3 // ari will print

//8. Replace method- searches a value in the string & return a new string with the value replaced

let bike= "HERO HONDA"
console.log(bike);// HERO HONDA

console.log(bike.replace("HONDA","INDIA")); // HERO INDIA
console.log(bike.replace("HERO","MY"));

//9. Repeat method- Returns a string with the number of copies of a string.
// str.repeat()

let laptop = "hp"
console.log(laptop.repeat(2));// hphp

      









