/*
SWITCH - The switch statement is used to perform different actions based on different conditions.\
          Used when we have some fixed values that we need to compare.


** 
switch (key) {         // key wo value hai jo mujhe her ek time check karna hai
    case value:
        
        break;

    default:
        break; // When JavaScript reaches a break keyword, it breaks out of the switch block.
               // this will stop the execution inside the switch block.
}

*/
//
let color = "Red"
 switch (color) {
    case "Red":
        console.log("stop"); // it will print only
        break;
 case "yellow":
    console.log("slow down");
    break
 case "Green":
    console.log("go");
    break
    default:
        console.log("broken light"); 
        break;
 }

 //
 let color1 = "Green"
 switch (color1) {
    case "Red":
        console.log("stop");
        break;
 case "yellow":
    console.log("slow down");
    break
 case "Green":
    console.log("go"); // it will print only
    break
    default:
        console.log("broken light"); 
        break;
 }
 //

 let color2 = "BLUE"
 switch (color2) {
    case "Red":
        console.log("stop");
        break;
 case "yellow":
    console.log("slow down");
    break
 case "Green":
    console.log("go");
    break
    default:
        console.log("broken light"); // it will print only
        break;
 }

 // lets remove the break

 let color3 = "Red"
 switch (color3) {
    case "Red":
        console.log("stop hona"); // after removing break all console will print.
        //break;
 case "yellow":
    console.log("slow down hona");
    //break
 case "Green":
    console.log("go go"); 
    default:
        console.log("broken light hoga"); 
        break;
 }

 ////q3= use switch statment to print the day of the week using a number variable 'day with value 1 to 7.

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
  

