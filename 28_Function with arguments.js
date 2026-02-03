

/* Function with arguments or parameter - values(arguments) we pass to the function

function functionName(aeg1,arg2){
   // do something
}
*/

function printName(Name) { 
    console.log(Name);    
}
// Let suppose we passing a value
 printName ("Guddu"); // guddu
 //

 function printInfo(Name,age,) { 
    console.log(`${Name}'s age is ${age}`);    
}

// Let suppose we passing the value name as roko and age as 29
printInfo ("roko",29); // roko's age is 29
printInfo("kohli",38) // kohli's age is 38
printInfo("karan") // karan's age is undefined

// jo bhi value pass karenge wo order wise hmare argument me jaa ke store hota hai.
printInfo(15)     // 15's age is undefined

// addition of two numbers

function addition(num1, num2) {
    console.log(num1 + num2);  
}

addition(4,5);// 9

addition(4,"5") // 45

let addtwonum = addition(10,5); // let store both argument inside a variable
console.log(addtwonum); // undefined

//q- Create a function that give us the average of 3 number.

function average( value1,value2,value3) {
    let avg = (value1+value2+value3)/3;
    console.log(avg);  
}
average(3,5,7);//5

average(8,9,6)// 7.66

// q- create a function that prints the multiplication table  of a number.


function Printable() {
    for (let table = 2; table <=20; table=table+2) {
        console.log(table);
        
    }
}
Printable(2);

// let write in a general form for print a tble

function Printable(n) {
    for (let table = n; table<=n*10; table+=n) {
        console.log(table);
        
    }
}
Printable(5);// table of 5

