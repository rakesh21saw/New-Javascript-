// ARRAY METHOD.=The forEach() method in JavaScript is an Array method used to execute a function once for each element in an array.

// arr.forEach(some function defination or name);

let arry = [1,2,3,4,5,6];

let print = function (el){
    console.log(el);   
}

arry.forEach(print)// print

// or

let arry1 = [7,8,9,10]

arry1.forEach(function(el1){
    console.log(el1);   

})
// or we can use arrow function

let arry2 = [11,12,13,14]

arry2.forEach((el2) =>{
   console.log(el2);  

})

// for each for object.

let arr = [{
    name:"rakesh",
     age: 29
},

{
    name:"ankit",
     age: 31
},

{

    name:"vanky",
     age: 27
}];

arr.forEach((frnds) => {
  console.log(frnds.name);
  console.log(frnds.age);
  console.log(frnds); 
})

//***************************************************************************************************************** */

// Map- .map() is a built-in method available for arrays. It creates a new array by applying a callback-
//  -function to each element of the original array. It does not modify the original array.

// let newarry = arr.map(some function or name);

let num = [2,4,8,16];

let double = num.map((ele)=>{
    return ele*3;   
}) 
 console.log(double);// [ 6, 12, 24, 48 ]
//
 let dost = [{
    name:"rakesh",
     age: 29
},

{
    name:"ankit",
     age: 31
},

{

    name:"vanky",
     age: 27
}];

 let age =dost.map((dosti)=>{
   return dosti.age *2;

 })
  console.log(age);
  






 //*********************************************************************************************************************** */

 // every method in Array. - Returns true if every element of array gives true for some function. Else returns false.

  // arr.every(some function defination or name);

  let array = [2,4,6,8]


