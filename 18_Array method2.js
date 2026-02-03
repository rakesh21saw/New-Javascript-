//
// concation- In programming language concatation means joining string end to end.

 // the concatation method creates a new arraay by merging existing arrays.

 // The concat method can take any number of array.
 
 // in concatation jis arrary ko pahle likhte hai uske value bhi pahle aata hai

 let marvelhero = ["thor","ironman","spiderman"];

 let dchero = ["superman","batman","pokieman"];

 let allheros = marvelhero.concat(dchero); // in concatation jis arrary ko pahle likhte hai uske value bhi pahle aata hai

 console.log(allheros);// [ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'pokieman' ]

 //

 let marvelhero1 = ["thor","ironman","spiderman"];

 let dchero1 = ["superman","batman","pokieman"];

 let allheros1 = dchero1.concat(marvelhero1) // // in concatation jis arrary ko pahle likhte hai uske value bhi pahle aata hai

 console.log(allheros1); //[ 'superman', 'batman', 'pokieman', 'thor', 'ironman', 'spiderman' ]

 // The concat method can take any number of array.

 const arry1 = ["Ram","Sita"];
 const arry2 = ["Hnuman","Laxman"]
 const arry3 = ["Ravan","Lanka"]

 const Ramyan = arry1.concat(arry2,arry3)
 console.log(Ramyan);//[ 'Ram', 'Sita', 'Hnuman', 'Laxman', 'Ravan', 'Lanka' ]


 /// Reverse - reverse an array

 let x = ["a","b","c","d"]

 console.log(x.reverse());// [ 'd', 'c', 'b', 'a' ]

 console.log(x.reverse()); // [ 'a', 'b', 'c', 'd' ]


 // Slice()= Copies a portion of array

 let color = ["red","green","black","white","grey"];

 console.log(color.slice()); // [ 'red', 'green', 'black', 'white', 'grey' ]

 console.log(color.slice(2)); //[ 'black', 'white', 'grey' ]
 console.log(color.slice(4)); // [ 'grey' ]
 console.log(color.slice(2,4));//[ 'black', 'white' ]

 console.log(color.slice(4,5))//[ 'grey' ]

 console.log(color.slice(8)) // [] bz at 8 th postion we dont have any value.

 console.log(color.slice(-2)) // [ 'white', 'grey' ]

 console.log(color.slice(-3)) //[ 'black', 'white', 'grey' ]
 console.log(color.slice(-2,-1)) // [ 'white' ]
 console.log(color.slice(-4,-1)) // [ 'green', 'black', 'white' ]


 // Splice() - removes /replace/ add element in place

 // three parameter in splice we can add - splice(start,deleteCount,item0...itemN)
 

 // SORT an array= sorts an array

 let days = ["sunday","monday","tuesday","thrusday","friday","saturday"];

 console.log(days.sort());// [ 'friday', 'monday', 'saturday', 'sunday', 'thrusday', 'tuesday' ]- alphabetically arranged
  console.log(days.sort().length); //6

let word =["d","a","c","e","b"];
console.log(word.sort());// [ 'a', 'b', 'c', 'd', 'e' ]

// ye short method number me accrutely kaam nhi karta

let marks = [66,70,80,60,50,90]
console.log(marks.sort());// [ 50, 60, 66, 70, 80, 90 ]


// array refrences- address in memory


  
  
 

 



 
 
 