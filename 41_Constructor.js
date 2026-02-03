/*
constructor function is a special method for creating and initializing an object created within a
 class. It is called automatically when a new instance of the class is created using the 'new' keyword.

 Q. why we use constructor function?
 Ans: We use constructor functions to set up initial values for object properties and to ensure that
 each instance of a class has its own unique set of properties.

 q. how to define a constructor function in a class?
 Ans: In JavaScript, a constructor function is defined using the 'constructor' keyword within a class.
 The constructor function can take parameters to initialize object properties.
    Example:
    class Car {
        constructor(brand, model, year) {// constructor function
            this.brand = brand;
            this.model = model;
            this.year = year;
        }
    }
    const myCar = new Car("Toyota", "Camry", 2020);// creating an instance of the Car class
    console.log(myCar.brand); // Output: Toyota



    this keyword in constructor function: The
    this keyword refers to the current instance of the class. It is used to access and set
    properties and methods of the object being created.
    Example:
    class Person {
        constructor(name, age) {
            this.name = name; // 'this' refers to the current instance
            this.age = age;
        }
    }
    const person1 = new Person("Alice", 30);
    console.log(person1.name); // Output: Alice

    In summary, constructor functions are essential for initializing objects in classes,
    and the this keyword allows you to reference the specific instance of the class being created.

*/


  class UserLogin {
    constructor(userNmae,password,login){
      
   this.userName = userNmae;
   this.password = password;
   this.loginStatus = true;
    }

    userName1(){
        return `${this.userName} has logged in successfully`;
    }

     userPassword1(){
        return`password for ${this.userName} is ${this.password}`;
     }

     userLogin1(){
        return `${this.userName} login status is ${this.loginStatus}`;
     }
  }

  const user1 = new UserLogin("Admin","admin123",true);

  console.log(user1.userName1());// Admin has logged in successfully
  console.log(user1.userPassword1());// password for Admin is admin123
  console.log(user1.userLogin1());// Admin login status is true 
  
  
  
  