// Constructor: is a special type of function that is used to create an object.

// Advantage of Constructor:
/* 
    1. Constructor executes automatically when an object is created.
    2. Constructor can be used to initialize the properties of the object.
    3. Constructor can take arguments.
*/

// Disadvantage of Constructor:
/* 
    1. Constructor can not return a value.
    2. Constructor can not be inherited.
    3. Constructor can not be used to access the properties of the object.
*/


// Class created by Constructor

// Simple Example of Constructor
class person {

    constructor(){
        console.log("Constructor Executed");
    }

}

const person1 = new person();
console.log(person1)


// Passing Arguments to Constructor

class numberAddition {

    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
        console.log(this.num1 + this.num2);
    }
}

const num1 = new numberAddition(10, 20);
console.log(num1)

const num2 = new numberAddition(30, 40);
console.log(num2)
