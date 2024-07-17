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