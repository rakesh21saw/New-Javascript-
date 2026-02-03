//
// ADD / UPDATE VALUE.

const student = {
name: "aman",
age: 23,
marks:90,
school:"dav"
}
console.log(student);// { name: 'aman', age: 23, marks: 90, school: 'dav' }
  
// now change, the school to "GM HIGH SCHOOL",add a new property, gender:n male, change the marks to "A" 

console.log(student.school) // dav
student.school = "GM HIGH SCHOOL"
console.log(student.school); // GM HIGH SCHOOL
console.log(student);//  { name: 'aman', age: 23, marks: 90, school: 'GM HIGH SCHOOL' }

student.gender= "male"
student.marks = "A"

console.log(student);

// how to delete any key value pair-

delete student.school; // we want to delete school

console.log(student); // { name: 'aman', age: 23, marks: 'A', gender: 'male' }


//** */


// NESTED OBJECT - object of object
  
const classInfo = {
  
 sachin : {
    tag : "God of cricket",
    run : 30000,
    hundreds : 100
 },
  
 Kohli : {
    tag : " KING OF CRICKET",
    run : 25000,
    hundreds : 95
 },
  Rohit : {
    tag : "HITMAN",
    run : 20000,
    hundreds : 50
  }

}

console.log(classInfo);

console.log(classInfo.Rohit);// { tag: 'HITMAN', run: 20000, hundreds: 50 }

console.log(classInfo.sachin.tag);// God of cricket

console.log(classInfo.Kohli.run);//25000

classInfo.Rohit.tag = "sharma ji ke beta";

console.log(classInfo.Rohit);// { tag: 'sharma ji ke beta', run: 20000, hundreds: 50 }


////

// Arry of object - storing information of multiple student

const cricketInfo = [
  
   {
      Namae : "RAHUL",
       tag : "wall of cricket",
       run : 18000,
       ipltrophy : 0
    },
     
    {
       name : "Dhoni",
       tag : "captain cool",
       run : 25000,
       ipltrophy : 5
    },

       {
       name : "youraj",
       tag : "sixer king",
       run : 10000,
       ipltrophy: 2
     }
   
]

console.log(cricketInfo);

console.log(cricketInfo[2]);  // { name: 'youraj', tag: 'sixer king', run: 10000, ipltrophy: 2 }

console.log(cricketInfo[1].tag); // captain cool

console.log(cricketInfo[0].run); // 18000

// for updating anything

cricketInfo[1].city = "Ranchi";

console.log(cricketInfo[1]); // ranchi is added in output



















