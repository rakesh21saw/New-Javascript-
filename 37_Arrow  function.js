// Arrow function. it usayally used as value
// Arrow function can be used in high order function ke liye koi parameter pass karne keliye.
// arrow functions are nameless function


const sum = (a,b) => { // arrow function with argument
    console.log(a+b);   
}
sum(3,5);//8
//or
const sum1= (a,b) => a+b // called implicit function
sum1(30,80);
console.log(sum1(30,80));





// let pass only a single argument
const cube=(n) => {
    return n*n*n
}
cube(5);
console.log(cube(5));//125

// or agar single argument hai tho us case me prentesis optional ho jate hai.

const cube1= n => {
    return n*n*n
}
cube1(8);
console.log(cube1(8));//512
// or


//
const pow = (a,b) => {
    return a**b
}

pow(3,4);
console.log(pow(3,4));//81

// arrow function with no argument

const hello = () => {
    console.log("JITNA SAHNA THA SAH LIYA");
    
}

hello();// JITNA SAHNA THA SAH LIYA


/// IMPLICIT RETURN ARROW FUNCTION(means automatic return)- jab bhi arrow function ke andar kuchkam nhi hota wo sief ek single value
//  ko return karata hai tho aise cases me arrow function ko aur short or compact bna sakte hai.

const mulyiply = (a,b) => a*b;
 mulyiply(4,9);
 console.log(mulyiply(4,9));//36

 const cube2 = n => n*n*n;
 cube2(10)
 console.log(cube2(10));
 


