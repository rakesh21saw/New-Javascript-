//

let cars = ["innova","safari","thar","bolero","vagnor"]

// let print the cars by using for loop

for (let x = 0; x < cars.length; x++) {
    console.log(x,cars[x]);  // cars ke saath index no bhi print hoga 
    // here x will print index number
}
//
for (let x = 0; x < cars.length; x++) {
    console.log(cars[x]);  // sirf caes print hoga 
}

//  sirf odd index print karo

for (let y = 1; y < cars.length; y=y+2) {
    console.log(y,cars[y]);
}
//

let bikes = ["honda","hero","bullet","bmw"]
bikes.push("harley")
  for (let z = 0; z < bikes.length; z++) {
    console.log(z,bikes[z]);  
  }

 // starting from last length

  for (let w = bikes.length-1; w>=0; w--) { // backword
    console.log(w,bikes[w]);
  
  }

  // Nasted loops with nasted arrays.

  
    
