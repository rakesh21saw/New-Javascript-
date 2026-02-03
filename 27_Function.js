//
function country(){
   console.log("India"); // here  it will not execute.
}
// to execute the function or run function we need to call the fumction
country(); // called call function= - output = india

// 

function printName (){
    console.log("Rakesh"); 
    console.log("saw");
    
}
printName(); // Rakesh // saw

//  loop in function
 
function print1to5() {
    for(let x=1; x<=5; x++){
        console.log(x);  
    }    
}
 print1to5();

 // if else statment in function.

 function adult () {

    let age = 18;
    if (age>=18) {
        console.log("he can vote");   
    } else{
        console.log("can not vote");   
    }
 }

 adult();// he can vote

 //
 function adult1 () {

    let age = 13;
    if (age>=18) {
        console.log("he can vote");   
    } else{
        console.log("can not vote");   
    }
 }
adult1(); //can not vote

// Q1 - print a poem

function poem() {
    console.log("chanda mam dur ke pua pakwe gur ke");
    console.log("apne khaiye thali me mumma ke de pyali me");  
}
poem();

// q2- Create a function to roll a disc and always display the value of the disc ( 1 to 6).

function disc() {
    console.log(Math.floor(Math.random()*6))+1;     
}
disc();
disc();
disc();
disc();

