//
// Nesting is writing if-else inside if-else ststment. it can have many levels.

let marks = 50
if (marks>=33) {
    console.log("pass the exam"); // will print
    if (marks>=60) {
        console.log("Division:1`st");  
    } 
      else{
         console.log("Grade:A");// will print
         
    }  
}

//
let marks1 = 80
if (marks1>=33) {
    console.log("pass kyu nhi hota"); // will print
    if (marks1>=60) {
        console.log("Division:1`st");  // will print
    } 
      else{
         console.log("Grade:A");
         
    }  
}
//
let marks2 = 32
if (marks2>=33) {
    console.log("pass");
    if (marks2>=60) {
        console.log("Division:1`st");  
    } 
      else{
         console.log("Grade:A");    
    }  
} 
 else{
    console.log("better luck next time"); // it will print only
    
 }