/*
JS OBJECT LITRALS- Used to store keyed collection & complex entities.

property=>(key,value) pair


*/
// OBJECT - object are collection of properties.

let arry = []
console.log(typeof arry); // object


// 2. How we create a object litrals
let student = {
 name: "Ankit",
 age : 20,
 city: "Dhanbad",
 Marks : 95,
};
console.log(student);//{ name: 'Ankit', age: 20, city: 'Dhanbad', Marks: 95 }


// let create a array for student

let student1= ["Ankit",20,"Dhanbad",95]
console.log(student1); // [ 'Ankit', 20, 'Dhanbad', 95 ]

// dono me difreence itna hai ki object ke andar clearity jayda hoge like name, age  jabki array me sirf value store kar pate hai.

let chatra = {
   area:10,
   popul: "Eleven lakh",
   state : "jharkhand",
   dance : ["Jhumira","pieka","fagua"] // Objeck ke andar we can create multiple value.

};
console.log(chatra);// { area: 10, popul: 'Eleven lakh', state: 'jharkhand',dance: [ 'Jhumira', 'pieka', 'fagua' ] }

// q> Create a object litrals for the properties of thread/ twitter post which 
// include - username, content ,likes, reposts,tags

const twitter = {
 username : "@Kangna",
 content : "gd for her political carrer",
 likes : 100000,
 reposts : 5000,
 tags : ["@aditya","@uddahav","sanjay@"]    

}
//console.log(twitter);

//4. How access the data(Values) which is stored in object. 
// or kisi particular key ki value kaise print kare

let instagram = {

    userid:"rakesh_21",
    password :"saw123@",
    followers : 150,
    following : 122,
    post  : 12 ,
    tags : ["@aditya","@uddahav","sanjay@"]  
}
// to get print any particular key 
//M-1
 console.log(instagram["post"]); // 12
 console.log(instagram["post","userid"]); // rakesh_21
 console.log(instagram["tags"]); [ '@aditya', '@uddahav', 'sanjay@' ]
 console.log(instagram["tags"]);
 
 

 // M-2 

 console.log(instagram.followers);// 150
 console.log(instagram.post);//12
 console.log(instagram.tags[1]); // @uddahav

 // 5.> Conversion in Get value.
 // JS automitcally converts object keys to strings. Even if we made the number as a key , the number will be converted to string.

 const object = {
   1 : "a",  // ye 1 yaha ek number nhi hai, yaha ye 1 string me convert ho gya automatically
    2 : "b",  // same as avove
     true :"C", // js is true ko as a string "true" ki trah padh rha hai
      null : "d",// same as above
       undefined :"e" // same as above 
 }
 console.log(object);// { '1': 'a', '2': 'b', true: 'C', null: 'd', undefined: 'e' }
 console.log(object[1]);
 
 
 
 
 
 
