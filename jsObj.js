// Methods for Defining JavaScript Objects

// Using an Object Literal
// Using the new Keyword
// Using an Object Constructor
// Using Object.assign()
// Using Object.create()
// Using Object.fromEnties()


// JavaScript Object Literal
// An object literal is a list of property names:values inside curly braces {}.

// {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};


// Note:
// An object literal is also callled an object initializer.



//Creating an empty object 
const person = {};
//add properties
person.firstName = "Bijay";
person.lastName = "B.K.";
person.age = "23";
person.eyeColor = "black";
// Display Data from Object
document.getElementById("demo1").innerHTML =
person.firstName + " is " + person.age + " years old.";



// Create an empty JavaScript object using new Object(), and add 4 properties:

// Create an Object
const personA = new Object();
personA.firstName = "John";
personA.lastName = "Doe";
personA.age = 50;
personA.eyeColor = "blue"; 
// Diplay Object Content
document.getElementById("demo2").innerHTML =
personA.firstName + " is " + personA.age + " years old.";




// Note:
// The examples above do exactly the same.
// But, there is no need to use new Object().
// For readability, simplicity and execution speed, use the object literal method.




//  //    Object Constructor Functions
// Sometimes we need to create many objects of the same type.
// To create an object type we use an object constructor function.
// It is considered good practice to name constructor functions with an upper-case first letter.

// Constructor Function for Person objects
class PersonB {
    constructor(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
    }
}
//Alternative 
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }
  
  // Create a Person object
  const myFriend = new PersonB("John", "Doe", 50, "blue");
  
  // Display age
  document.getElementById("demo3").innerHTML =
  "My friend is " + myFriend.age + "."; 


// //   Note:
// In the constructor function, this has no value.
// The value of this will become the new object when a new object is created.

// Now we can use new Person() to create many new Person objects:

function PersonC(first, last, age, sex){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.sex = sex;
    this.nationality = "Nepalese";
}
//Creating two person objects 
const myMother = new PersonC("Kanta ", "B.K.", 45, "Female",);
const myFather = new PersonC("Indra ", "B.K.", 57, "Male");

//Display
document.getElementById("demo4").innerHTML ="My Father and Mother, both are " + myFather.nationality + ". " +  "My father is " + myFather.age + ". My mother is " + myMother.age + "."; 
