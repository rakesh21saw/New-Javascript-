/* else ststment - else statment ye btata hai ki agar upar wali sari satatment fail ho jaaiye tho 
                   hme kya karna chaiye
                   - else ke andar hm koi statment check nhi karte , agar upar ke sare statment false hai tho 
                    else khud ba khud rxecute ho jata hai.

 if (condition){
    // do something
 }

 else{
    // do something else
 }
*/

//

let age = 18 
if( age>=18){
    console.log("you can drink");   // will print
} else{
    console.log("you can not drink"); // will not print  
}

//

let age1 = 15
if( age1>=18){
    console.log("you can drink");   // will print
} else{
    console.log("you can not drink"); // will not print  
}

// traffic

let colour = "blue";

if(colour==="red") console.log("stop");
if(colour==="yellow") console.log("go slow");
if(colour==="green") console.log("go");
else{
   console.log("traffic light is not working")
}


// q> create a system to calculate popcorn prices based on the size customer asked for
// if sixe is 'XL', price is Rs. 250
// if sixe is 'L', price is Rs. 2OO
// if sixe is 'M', price is Rs. 150
// if sixe is 'S', price is Rs. 100

let size = "XL";
if(size==="XL") console.log("popcorn price: 250");  // it will print inly
 else if (size==="L") console.log("popcorn price: 200");
  else if (size==="M") console.log("popcorn price: 150");
     else if (size==="S") console.log("popcorn price: 100");
        else {
           console.log("not avialvle");   // it will also not print
}
// or
if(size==="XL") console.log("popcorn price: 250");
  if (size==="L") console.log("popcorn price: 200");
   if (size==="M") console.log("popcorn price: 150");
      if (size==="S") console.log("popcorn price: 100");
        else {
          console.log("not avialvle");  // here it will print
        }
