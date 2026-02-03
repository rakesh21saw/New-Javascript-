// Print numbers from 1 to 10 using a while loop
// ➤ Output: 1 2 3 ... 10

// Print all odd numbers from 1 to 20
// ➤ Output: 1 3 5 ... 19

// Calculate the sum of numbers from 1 to N (e.g., N = 50)
// ➤ Output: 1275

// Print the digits of a number in reverse
// ➤ Input: 1234 → Output: 4 3 2 1

let x= 1;

while (x<=10) {
    //console.log(x);
    x++
    }

    
    let odd =1;

    while (odd<=20) {
        //console.log(odd);
        odd= odd+2;   
    }


    let odd2 =1;

    while (odd2<=21) {
       
        if (odd2==18) {
            break;
        }
       
        //console.log(odd2);
        odd2=odd2+2
    }

 rev= 10;

while (rev>=0) {
    //console.log(rev);
    rev--;
    
    
}

let table =7;

while (table<=50) {
    if (table> 42) {
       break; 
}
console.log(table);
table+=7;

}