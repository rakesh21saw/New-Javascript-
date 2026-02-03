/*
//  jo work hm for loop se kar sakte hai wahi same kaam hm while loop se bhi kar sakte hai.

while(condition){   // jab tak condition true hota hai while loop kaam karta rahta hai.
    //do something
}
*/

let x = 1;
while(x<=5) {  // forward
console.log(x);
x++;
}
//
let even =2;
while (even<=20) {  // forward
    console.log(even);
    even= even+2;
       
}
//

let table =5
while (table<=50) {  // forward
    console.log(table);
    table= table+5;     
}
//
let y =5;
while (y>=1) {  // backword
    console.log(y);
    y--   
}
//
let even1 = 20;
while (even1>=2) { // backword
    console.log(even1);
    even1= even1-2;      
}
//
let table1 = 70;
while (table1>=7) {  // backword
    console.log(table1);
    table1= table1-7;
    
}

// Break keyword= loop execution stop.

// hm chahte hai sirf two tak print ho
let num = 1;
while(num<=5) {  
    if(num == 3);{
        break;
    }
        
console.log(num);
num++;
}

