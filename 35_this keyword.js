// this keyword- this keyword refers to an object that is executing the current piece of code

const student = {  
    name: "rakesh",
    age : 29,
    height : 6,
    colour : "fair",
    eng: 70,
    math: 60,
    hindi:90,
   
    getAvg () {
        
        //let avg  = (eng + math +hindi) /3;//directly parameter ko access nhi kar sakta hai.
        //console.log(avg);  // directly parameter ko access nhi kar sakta hai.
        let avg =(this.eng + this.math+ this.hindi) /3 ;
         console.log(`${this.name} got avg marks = ${avg}`); 
    }

}
student.getAvg();// rakesh got avg marks = 73.33333333333333
