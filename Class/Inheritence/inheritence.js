// Inheritence: is a way to create a new class from an existing class.
// Inheritence is used to create a new class that is a copy of an existing class.


// Simple Example of Inheritence

class father {
    constructor(num1, num2) {
        console.log(num1 + num2);
    }
}

class son extends father {

}

const fatherClass = new father(10, 20);
console.log(fatherClass)
const sonClass = new son(30, 40);
console.log(sonClass)
