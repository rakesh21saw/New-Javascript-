// q- A "good string" is a sring that starts with the letter 'a' & has a length>3.write a program to find 
// if a string is good or not.

let x = "abcde"
 //console.log(x[0]==='a');
 //console.log(x.length);
 //console.log(x.length>3);
 
  if ((x[0]==='a') && (x.length>3)){
    console.log("good string");
  } else{
    console.log("not a good string");
    
  }

  //q2

  let num =12
  
  if((num%3===0) &&((num+1== 15) || (num-1==11))){
    console.log("safe");
    
  } else{
    console.log("unsafe");
    
  }

  //q3= use switch statment to print the day of the week using a number variable 'day with value 1 to 7.

  let day =1

  switch (day) {
    case 1:
      console.log("monday");
      break
      case 2:
        console.log("tuesday");
        break
        case 3:
      console.log("wednesday");
      break
      case 4:
      console.log("thrusday");
      break
      case 5:
      console.log("friday");
      break
      case 6:
      console.log("saturday");
      break
      case 7:
      console.log("sunday");
      break
    default:
      console.log("weekand");
      
      break;
  }
  
  // Q-4:- let msg = "help", trim it and convert it to uppercase
 let msg = "    help!    "
 console.log(msg.trim().toUpperCase()); // HELP!
 //or
 let newmsg = msg.trim().toUpperCase() 
 console.log(newmsg); // HELP!
 