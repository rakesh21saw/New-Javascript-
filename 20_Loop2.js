// print all odd number (1 to 15) by forward

for (let odd = 1; odd <= 15; odd= odd+2) {
    console.log(odd);
}

// print all odd number (1 to 15) by reverse

for (let odd = 15; odd>=1; odd= odd-2) {
    console.log(odd);
}

// print all even number (1 to 20) by forward

for (let even = 2; even <=20; even=even+2) {
    console.log(even);   
}

// print all even number (1 to 20) by backword

for (let even = 20; even>=2; even=even-2) {
    console.log(even);   
}
 
// Infinite Loops:  isme kabhi bhi ending condition false hoti hi nhi hai.ye chlta hi rehta hai.
// An infinite loop is a piece of code that keeps running forever as the 
// terminating condition is never reached
 

for (let num = 1; num >=0; num++) {
    //console.log(num);  
}
//
for (let num1 = 1; num1<5; num1--) {
    //console.log(num1);  
}

//

for (let num2 =1; ; num1++) { // // empty condition
    //console.log(num2);  
}

// print the multiplication table for 5
 
for (let table = 5; table <=50; table=table+5) { // forward 
    console.log(table);
      
}
//

for (let table = 50; table>=5; table=table-5) { // backword
    console.log(table);    
}


// Nested for loop

for (let num3= 1; num3<=5; num3++) {  // outer loop
    //console.log(num3);

    for (let num4= 1; num4<=3; num4++) {  // inner loop
        console.log(num4);
}
}

//

for (let num3= 1; num3<=5; num3++) {  // outer loop
    console.log(`outerloop ${num3}`);
    
        for (let num4= 1; num4<=3; num4++) {  // inner loop
            console.log(num4);
    }
    }
