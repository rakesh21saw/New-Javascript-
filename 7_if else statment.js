//

//
let age = 14;
if (age>21) {
    //console.log("you can vote");  //  condition not true so it will be not print
} 
else if (age<18){
    //console.log("you can not vote");// you can not vote , here statment is true 
}
//
let age1 = 23;
if (age1>21) {
   // console.log("you can vote"); 
} 
else if (age1>=18){
    //console.log("you can drive");
    // dono condition true hai isliye ye dono console.log print nhi hoga
}

//
let age2 = 23;
if (age2>21) {
    //console.log("you can vote1"); // you can vote
} 
else if (age2>=18){
    //console.log("you can drive"); // will not print bz first statment is true
} else if(age2<18){
    //console.log("you can not marry");// will not print bz first statment is true
    
}
// 
let age3 = 15;
if (age3>21) {
    //console.log("you can vote1"); // false statment, it will not print
} 
else if (age3>=18){
    //console.log("you can drive");// // false statment, it will not print
} else if(age3<18){
    //console.log("you can not marry to hina"); //you can not marry to hina: statment is true
    
}
// 

let marks = 75
if (marks>=80) {
    console.log("result: A+"); // will not print 
} else if (marks>=60){
    console.log("A");   // it will print
} else if (marks<33){
    console.log("fail");  // it will not print
}
// 

let marks1 = 85
if (marks1>=80) {
    console.log("result: A+"); // will print  bz condition is true
} else if (marks1>=60){
    console.log("A");    // it will not print
} else if (marks1<33){
    console.log("fail");   // it will  notnot print
}

let marks2 = 20
if (marks2>=80) {
    console.log("result: A+"); // will  not print
} else if (marks2>=60){
    console.log("A");    // it will not print
} else if (marks2<33){
    console.log("fail");   // it will print  bz condition is true
}

// trafic systyem

let colour = "red"
if(colour==="yellow"){
    console.log("go slowely"); // will not print  
} else if(colour==="green"){
    console.log("go");     // will not print
}else if(colour ==="red")
    console.log("stop"); // it will print
    