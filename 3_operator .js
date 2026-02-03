/*Operator precedence describes the order in which operations are performed in an arithmetic expression.

this is the general order of solving an expression.

() > ** > *,/,% > +,- higher precedence order

Multiplication (/) and division (* ) have higher precedence than addition (+) and subtraction (-).

*/

console.log((10+20)/5+10*2); // 26

console.log((2+1)*3); // 9

console.log(3/1+2**2); // 7

console.log(4+1*6/2);//7

/* Assignment Operator.

age = age + 1 

in short form  we can write,  age +=1

age = age -2 ,we can wrte this like in short form age-=2

age = age*2, = age*=2

age = age/2 = age/= 2

*/

let age = 20;
age = age + 4;
console.log(age);

// or

let age1 = 20;
age1+= 4;
console.log(age1);

/* UNARY OPERATOR- it need only single operant.

 age++   post-increament operator  ( use, then change)

 age--    post-Decreament operator

 ++ age   pre-incement operator ( change, then use)

 -- age    pre- decreament

*/

let year = 2005;
year++
console.log(year);

 let salery = 5;
 let revisedsalery = salery++
 console.log(revisedsalery); // 5
 console.log(salery); // 6
 
 

//
let  year2 = 2008;
let   newyear2 = ++ year2;
console.log(year2);

console.log(newyear2);

// Q1

let num = 5;
let newnum = num++;
newnum = ++num;
console.log(newnum); // 7

// Arithmatic operator.

let a = 10;
let b = 5;
console.log(a+b);
console.log(a++);
console.log(++a);




 













