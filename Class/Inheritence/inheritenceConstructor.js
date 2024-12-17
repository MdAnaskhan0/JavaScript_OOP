// Inheritence Constructor: is a way to create a new class from an existing class.
// Inheritence Constructor is used to create a new class that is a copy of an existing class.

/* 
    3 Pair of Constructor and Inheritence:
        3.1 Constructor inside only parent class
        3.2 Constructor inside only parrent class passing arguments

        3.3 Constructor inside child class
        3.4 Constructor inside child class passing arguments

        3.5 Constructor inside child class  and Parent class
        3.6 Constructor inside child class  and Parent class passing arguments
*/

// 3.1, 3.2:  Constructor inside only parent class

class father {
    constructor(num1, num2) {
        console.log(num1 + num2);
    }
}

class son extends father {

}

new father(10, 20);
// *** Result ***
// 30
new son(30, 40);
// *** Result ***
// 70


// 3.3, 3.4:  Constructor inside child class and Passing Arguments

class Manager {

}

class Developer extends Manager {
    // For Call Constructor in Child Class we have to use super(); Note:****
    constructor(msg){
        super();
        console.log(msg);
    }
}

new Manager("Hello I am Manager");
// *** Result ***
// 

new Developer("Hello sir, How are you, I am Developer");
// *** Result ***
// Hello sir, How are you, I am Developer


// 3.5, 3.6:  Constructor inside child class and Parent class and Passing Arguments

class CEO {
    constructor(msg_CEO){
        console.log(msg_CEO);
    }
}

class CTO extends CEO {
    constructor(msg_CTO){
        super();
        console.log(msg_CTO);
    }
}

new CEO("Hello I am CEO");
// *** Result ***
// Hello I am CEO

new CTO("Hello I am CTO");   
// *** Result ***
// undefined -> This is from CEO Constructor 
// Hello I am CTO -> This is from CTO Constructor



