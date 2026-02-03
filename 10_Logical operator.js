/*
 Logical operator to combine expression

&& - Logical AND = used for combined expression.

true && true - true
true && false - false
false && true - false
false && false - false
*/
// && - (exp1) && (exp2)

 let marks = 90;

 if(marks>=33 && marks>= 80){
    console.log("pass"); // here both condition are true so it will print
    console.log("A+");  
 }
//
let marks1 = 75;

if(marks1>=33 && marks1>= 80){
   console.log("pass"); // this condition is true 
   console.log("A+");  // this condition is not true 
   // output will not print bz only one statment is true
}

/* 
or(||)  operator - dono me se koi bhi ek condition true honi chaiye
|| -  logical or operator

true || true - true
true || false - true
false || true - true
false || false - false
*/
let marks2 = 75;

if(marks2>=33 || marks1>= 80){
   console.log("pass tho hona hi tha"); // this condition is true 
   console.log(" Grade:A+"); // not true phir bhi ye print ho jaaiyega

   //output will print bz we using or operator we need one ststment true
}
/*
! - logical not operator- jis bhi expression ke samne hm !( not) laga dete hai uska
     value reverse ho jati hai
      !true = false
      !false = true
*/
  let age = 21

  if(!(age<18)){
    console.log("drive karega"); 
  }

  // let combine a multiple statment -- operator hmesha left se right ke side lagta hai.

  const markss = 50

  if(markss>33 && markss<= 60 || !(false)){

    console.log("will top university");// wipp print
    
  }

  // 

  const value = 50

  if(value>33 && value<= 60 || !(true)){

    console.log("valuevalue"); // it will print
    
  }

  //

  let score = 50

  if(score<49 && score > 60 || !(false)){

    console.log("match won"); // it will print bz final condition is true
    
  }

  let score1 = 50

  if(score1<49 && score > 60 || !(true)){

    console.log("match lost"); // it will print not print bz final condition is false
    
  }

  